import { SceneLoadingState } from './SceneLoadingState';

class HighQualityAssetsState extends SceneLoadingState
{
  on_enter()
  {
    super.on_enter();
    // this.setup_loader();
  }

  on_exit()
  {
    super.on_exit();
  }

  update()
  {
    super.update();

    if (this.is_loaded())
    {
      // if (this.is_compiled())
      // {
      this.scene.on_high_quality_assets_ready();
      // }
    }
  }
}

export { HighQualityAssetsState };
