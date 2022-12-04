import { BufferAttribute } from 'three';

import ParticleAttribute from '../gpu_particles/ParticleAttribute';
import ParticleStorageMaterial from '../materials/gpu_particles/ParticleStorageMaterial';

export default class ParticlePositionAttribute extends ParticleAttribute
{
  constructor(update_material)
  {
    super('_Position', update_material);
  }

  store_geometry(geometry, attribute_writter_scene)
  {
    const pos_attr = geometry.getAttribute('position');
    this.read    = this.build_RT(pos_attr.count);
    this.write   = this.build_RT(pos_attr.count);

    const mat = new ParticleStorageMaterial();
    this.store_geometry_attribute_in_RT(geometry.getAttribute('position'), this.read, mat, attribute_writter_scene);
  }

  store_positions(positions, attribute_writter_scene)
  {
    this.read    = this.build_RT(positions.length);
    this.write   = this.build_RT(positions.length);

    const arr = new Float32Array(positions.length * 4);

    for (let i = 0; i < positions.length; i++)
    {
      arr[i * 4 + 0] = positions[i].x;
      arr[i * 4 + 1] = positions[i].y;
      arr[i * 4 + 2] = positions[i].z;
      arr[i * 4 + 3] = (Math.random() * 2 - 1) * 10;
    }
    const mat = new ParticleStorageMaterial();
    this.store_geometry_attribute_in_RT(new BufferAttribute(arr, 4), this.read, mat, attribute_writter_scene);
  }
}
