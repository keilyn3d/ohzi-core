// @ts-check
import { Color } from 'three';
import { PerspectiveCamera as TPerspectiveCamera } from 'three';

class PerspectiveCamera extends TPerspectiveCamera
{
  /**
   * @param {number} fov
   * @param {number} aspect
   * @param {number} near
   * @param {number} far
   */
  constructor(fov, aspect, near, far)
  {
    super(fov, aspect, near, far);

    this.clear_color = new Color('#000000');
    this.clear_alpha = 1;
  }

  /**
   * @param {PerspectiveCamera} camera
   * @returns {this}
   */
  copy(camera)
  {
    super.copy(camera);
    this.clear_color.copy(camera.clear_color);
    this.clear_alpha = camera.clear_alpha;
    return this;
  }
}

export { PerspectiveCamera };
