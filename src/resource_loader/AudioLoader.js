import AbstractLoader from '/resource_loader/AbstractLoader';
import AudioClip from '/components/AudioClip';

export default class AudioLoader extends AbstractLoader
{
	constructor(resource_id, url, loop = true, volume = 1)
	{
		super(resource_id, url);
		this.loader = new THREE.AudioLoader();
		this.loop = loop;
		this.volume = volume;
	}

	load(resource_container)
	{
		let ctx = this;

		this.loader.load(this.url, (buffer)=> {

			resource_container.set_resource(ctx.resource_id, new AudioClip(buffer, this.loop, this.volume));


			ctx.__update_progress(1);
			ctx.__loading_ended()
		},
		undefined,
		(error) => {
			ctx.__set_error("Audio could not be loaded. Maybe wrong name or path, I don't know" + '¯\\_(ツ)_/¯', error);
			ctx.__loading_ended()
		});
	}

}
