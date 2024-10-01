// @ts-check
// @ts-ignore
import edge_visualizer_frag from '../shaders/edge_visualizer/edge_visualizer.frag';
// @ts-ignore
import edge_visualizer_vert from '../shaders/edge_visualizer/edge_visualizer.vert';

import { GeometryUtilities } from '../utilities/GeometryUtilities';

import { BufferGeometry, Mesh } from 'three'; // eslint-disable-line no-unused-vars
import { Color } from 'three';
import { ShaderMaterial } from 'three';

class GeometryEdgeVisualizer extends Mesh
{
  /**
   * @param {BufferGeometry} geometry
   * @param {string | number} [line_color]
   */
  constructor(geometry, line_color)
  {
    line_color = line_color || '#91EE91';

    const material = new ShaderMaterial({
      uniforms: {
        _Color: { value: new Color('#CC3333') },
        _LineColor: { value: new Color(line_color) },
        _Alpha: { value: 1 },
        _DepthOffset: { value: 0.001 },
        _Thickness: { value: 2.5 }
      },
      vertexShader: edge_visualizer_vert,
      fragmentShader: edge_visualizer_frag,
      // @ts-ignore
      extensions: { derivatives: true },
      transparent: true,
      depthWrite: false
    });

    let non_indexed_geometry = geometry;
    if (non_indexed_geometry.index)
    {
      non_indexed_geometry = GeometryUtilities.convert_to_non_indexed_geometry(geometry);
    }

    GeometryUtilities.add_barycentric_attribute(non_indexed_geometry);

    super(non_indexed_geometry, material);
    this.material = material;
  }

  hide_faces()
  {
    this.material.uniforms._Alpha.value = 0;
  }
}

export { GeometryEdgeVisualizer };
