import { ResourceContainer } from 'ohzi-core';

import { AsyncAudiosLoader } from '../../loaders/AsyncAudiosLoader';
import { AsyncObjectsLoader } from '../../loaders/AsyncObjectsLoader';
import { AsyncTexturesLoader } from '../../loaders/AsyncTexturesLoader';
import { CompilatorManager } from './CompilatorManager';

class SceneLoadingState
{
  constructor(scene, { SceneCompilator, TexturesCompilator, AudiosCompilator })
  {
    this.scene = scene;

    this.SceneCompilator = SceneCompilator;
    this.TexturesCompilator = TexturesCompilator;
    this.AudiosCompilator = AudiosCompilator;

    this.loaders = [];
    this.compilators = [];

    this.callback_called = false;
  }

  set_assets(scene_objects, scene_textures, scene_sounds)
  {
    this.scene_objects = scene_objects;
    this.scene_textures = scene_textures;
    this.scene_sounds = scene_sounds;
  }

  get loading_progress()
  {
    let progress = 0;

    for (let i = 0; i < this.loaders.length; i++)
    {
      const loader = this.loaders[i];
      progress += loader.get_progress();
    }
    return progress / this.loaders.length;
  }

  load()
  {
    this.setup_loader();

    // TODO: improve this.
    // We call load method to one of the 3 loaders because they share the same worker.
    this.loaders[0].load();
  }

  on_enter()
  {
  }

  on_exit()
  {
  }

  update()
  {

  }

  setup_loader()
  {
    const compilators = [];

    const assets_worker = ResourceContainer.get('assets_worker');
    assets_worker.postMessage({ type: 'reset', loader_name: this.scene.name });

    const object_loader = new AsyncObjectsLoader(this.scene.name, this.scene_objects, assets_worker);
    this.loaders.push(object_loader);
    compilators.push(new this.SceneCompilator(this.scene));

    const textures_loader = new AsyncTexturesLoader(this.scene.name, this.scene_textures, assets_worker);
    this.loaders.push(textures_loader);
    compilators.push(new this.TexturesCompilator(textures_loader.get_assets_names()));

    const audios_loader = new AsyncAudiosLoader(this.scene.name, this.scene_sounds, assets_worker);
    this.loaders.push(audios_loader);
    compilators.push(new this.AudiosCompilator(audios_loader.get_assets_names()));

    this.compilator_manager = new CompilatorManager(compilators);
  }

  is_loaded()
  {
    let loaded = true;

    for (let i = 0; i < this.loaders.length; i++)
    {
      const loader = this.loaders[i];

      loaded = loaded && loader.is_loaded();
    }

    return loaded;
  }

  is_compiled()
  {
    this.compilator_manager.update();
    return this.compilator_manager.is_finished();
  }
}

export { SceneLoadingState };
