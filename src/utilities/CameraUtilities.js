import CameraManager from '../CameraManager';
import Input from '../Input';
import OMath from '../utilities/OMath';
import OScreen from '../OScreen';

import { Vector3 } from 'three';
import { Matrix4 } from 'three';
import { Plane } from 'three';
import { Ray } from 'three';
import { Sphere } from 'three';
import { Box3 } from 'three';

class CameraUtilities
{
  init()
  {
    this.tmp_mat = new Matrix4();
    this.plane = new Plane();
    this.ray = new Ray();

    this.tmp_size = new Vector3();
    this.tmp_unproj = new Vector3();
  }

  get_up_dir(camera)
  {
    camera = camera || CameraManager.current;
    const tmp_vec = new Vector3();

    tmp_vec.set(0, 1, 0);
    tmp_vec.applyQuaternion(camera.quaternion);

    return tmp_vec;
  }

  get_forward_dir(camera)
  {
    camera = camera || CameraManager.current;
    const tmp_vec = new Vector3();

    tmp_vec.set(0, 0, -1);
    tmp_vec.applyQuaternion(camera.quaternion);

    return tmp_vec;
  }

  get_right_dir(camera)
  {
    camera = camera || CameraManager.current;
    const tmp_vec = new Vector3();

    tmp_vec.set(1, 0, 0);
    tmp_vec.applyQuaternion(camera.quaternion);
    return tmp_vec;
  }

  unproject_mouse_position(NDC, camera)
  {
    camera = camera || CameraManager.current;
    const tmp_vec = new Vector3();

    const v_fov = (camera.fov / 2) * Math.PI / 180;
    const h_fov = (2 * Math.atan(Math.tan(v_fov) * camera.aspect)) / 2;

    const distV = Math.tan(v_fov) * camera.far;
    const distH = Math.tan(h_fov) * camera.far;

    tmp_vec.set(distH * NDC.x, distV * NDC.y, -camera.far).normalize();

    return tmp_vec.applyQuaternion(camera.quaternion);
  }

  get_plane_intersection(plane_position, plane_normal, NDC, camera)
  {
    camera = camera || CameraManager.current;
    NDC = NDC || Input.NDC;

    const tmp_vec = new Vector3();

    this.plane.setFromNormalAndCoplanarPoint(plane_normal || this.get_forward_dir(camera), plane_position);
    if (camera.isPerspectiveCamera)
    {
      this.ray.set(camera.position, this.unproject_mouse_position(NDC, camera));
    }
    else
    {
      this.tmp_unproj.set(NDC.x, NDC.y, 1).unproject(camera);
      this.ray.set(camera.position, this.tmp_unproj);
    }

    this.ray.intersectPlane(this.plane, tmp_vec);
    return tmp_vec;
  }

  fit_points_on_camera(points, zoom_scale = 1)
  {
    const points_sphere = new Sphere().setFromPoints(points);
    const world_space_center = points_sphere.center;
    const camera_forward = this.get_forward_dir(CameraManager.current).clone();

    const plane = new Plane().setFromNormalAndCoplanarPoint(camera_forward, world_space_center);

    const points_on_plane = OMath.project_points_on_plane(points, plane);

    const projected_points_center = new Vector3();
    let box =  new Box3().setFromPoints(points_on_plane);
    box.getCenter(projected_points_center);

    const up = new Vector3(0, 1, 0).applyQuaternion(CameraManager.current.quaternion);
    const right = up.clone().cross(camera_forward).normalize();
    const mat = new Matrix4().set(right.x, up.x, camera_forward.x, world_space_center.x,
      right.y, up.y, camera_forward.y, world_space_center.y,
      right.z, up.z, camera_forward.z, world_space_center.z,
      0,    0,                0,        1);

    const inverse_mat = new Matrix4().getInverse(mat);
    for (let i = 0; i < points_on_plane.length; i++)
    {
      points_on_plane[i].applyMatrix4(inverse_mat);
    }

    const size = new Vector3();
    box =  new Box3().setFromPoints(points_on_plane);
    box.getSize(size);
    size.multiplyScalar(zoom_scale);
    const projected_center = new Vector3();
    box.getCenter(projected_center);

    return {
      position: projected_points_center,
      zoom: this.get_zoom_to_fit_rect(size.x / 2, size.y / 2)
    };
  }

  get_zoom_to_fit_rect(width, height)
  {
    const v_fov = (CameraManager.current.fov / 2) * Math.PI / 180;
    const h_fov = (2 * Math.atan(Math.tan(v_fov) * CameraManager.current.aspect)) / 2;

    const distV = height / Math.tan(v_fov);
    const distH = width / Math.tan(h_fov);

    return Math.max(Math.abs(distH), Math.abs(distV));
  }

  get_zoom_to_fit_box(bb, camera)
  {
    if (camera.isOrthographicCamera)
    {
      bb.getSize(this.tmp_size);

      const obj_x = this.tmp_size.x;
      const obj_y = this.tmp_size.y;
      const object_aspect = obj_x / obj_y;
      if (OScreen.aspect_ratio / object_aspect > 1)
      {
        return OScreen.height / obj_y;
      }
      else
      {
        return OScreen.width / obj_x;
      }
    }
    else
    {
      // return this.fit_points_on_camera([bb.min, bb.max], 1).zoom;
      const size = new Vector3();
      bb.getSize(size);
      return this.get_zoom_to_fit_rect(size.x, size.y);
    }
  }

  get_html_screen_pos(object, camera)
  {
    camera = camera || CameraManager.current;
    const tmp_vec = new Vector3();

    object.getWorldPosition(tmp_vec);
    tmp_vec.project(camera);

    tmp_vec.x = (tmp_vec.x * 0.5 + 0.5) * (OScreen.width);
    tmp_vec.y = (1 - (tmp_vec.y * 0.5 + 0.5)) * OScreen.height;
    return tmp_vec;
  }

  world_pos_to_screen(pos, camera)
  {
    camera = camera || CameraManager.current;
    const tmp_vec = new Vector3();

    tmp_vec.copy(pos);
    tmp_vec.project(camera);

    tmp_vec.x = (tmp_vec.x * 0.5 + 0.5) * (OScreen.width);
    tmp_vec.y = (1 - (tmp_vec.y * 0.5 + 0.5)) * OScreen.height;
    return tmp_vec;
  }

  update_projection(camera)
  {
    camera.left   = -OScreen.width / 2;
    camera.right  = OScreen.width / 2;
    camera.top    = OScreen.height / 2;
    camera.bottom = -OScreen.height / 2;
    camera.aspect = OScreen.aspect_ratio;
    camera.updateProjectionMatrix(true);
  }
}

export default new CameraUtilities();
