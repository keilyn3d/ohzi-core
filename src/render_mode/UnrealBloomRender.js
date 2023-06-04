import { OScreen } from '../OScreen';
import { BaseRender } from '../render_mode/BaseRender';
import { UnrealBloomComposeMaterial } from '../materials/UnrealBloomComposeMaterial';
import { AddMaterial } from '../materials/AddMaterial';

import { WebGLRenderTarget } from 'three';

import { GaussianBlurrer } from '../render_utilities/GaussianBlurrer';
import { Graphics } from '../Graphics';
import { CameraManager } from '../CameraManager';
import { SceneManager } from '../SceneManager';

class UnrealBloomRender extends BaseRender
{
  constructor()
  {
    super();

    this.bloom_compose_mat = undefined;

    this.main_RT = undefined;
    this.blur_RT = undefined;
    this.blurrer = undefined;

    this.add_mat = new AddMaterial();
  }

  on_enter()
  {
    this.blurrer = new GaussianBlurrer();
    this.main_RT = new WebGLRenderTarget(OScreen.width, OScreen.height);
    this.blur_RT = new WebGLRenderTarget(OScreen.width, OScreen.height);

    this.bloom_compose_mat = new UnrealBloomComposeMaterial(5);
    this.blurrer = new GaussianBlurrer(5);

    this.bloom_compose_mat.set_RT_0(this.blurrer.renderTargetsVertical[0].texture);
    this.bloom_compose_mat.set_RT_1(this.blurrer.renderTargetsVertical[1].texture);
    this.bloom_compose_mat.set_RT_2(this.blurrer.renderTargetsVertical[2].texture);
    this.bloom_compose_mat.set_RT_3(this.blurrer.renderTargetsVertical[3].texture);
    this.bloom_compose_mat.set_RT_4(this.blurrer.renderTargetsVertical[4].texture);

    this.bloom_compose_mat.set_bloom_strength(1);
    this.bloom_compose_mat.set_bloom_radius(1);

    this.add_mat.set_add_texture(this.blurrer.renderTargetsHorizontal[0].texture);
  }

  set_bloom_strength(val)
  {
    this.bloom_compose_mat.set_bloom_strength(val);
  }

  set_bloom_radius(val)
  {
    this.bloom_compose_mat.set_bloom_radius(val);
  }

  set_tint_color_0(col_string)
  {
    this.bloom_compose_mat.set_tint_color_0(col_string);
  }

  set_tint_color_1(col_string)
  {
    this.bloom_compose_mat.set_tint_color_1(col_string);
  }

  set_tint_color_2(col_string)
  {
    this.bloom_compose_mat.set_tint_color_2(col_string);
  }

  set_tint_color_3(col_string)
  {
    this.bloom_compose_mat.set_tint_color_3(col_string);
  }

  set_tint_color_4(col_string)
  {
    this.bloom_compose_mat.set_tint_color_4(col_string);
  }

  render()
  {
    this.__check_RT_size();

    Graphics.clear(this.main_RT, CameraManager.current, true, false);
    Graphics.render(SceneManager.current, CameraManager.current, this.main_RT);

    // // BLUR
    this.blurrer.blur(this.main_RT, true);

    // Blur compose
    Graphics.material_pass(this.bloom_compose_mat, this.blurrer.renderTargetsHorizontal[0]);

    // Additive blend
    Graphics.blit(this.main_RT, undefined, this.add_mat);
  }

  __check_RT_size()
  {
    if (this.main_RT.width !== OScreen.width || this.main_RT.height !== OScreen.height)
    {
      this.main_RT.setSize(OScreen.width, OScreen.height);
      this.blur_RT.setSize(OScreen.width, OScreen.height);
    }
  }
}

export { UnrealBloomRender };
