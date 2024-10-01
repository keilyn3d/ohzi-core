// @ts-check
import { AudioListener, Audio as TAudio } from 'three'; // eslint-disable-line no-unused-vars
import { PositionalAudio as TPositionalAudio } from 'three';

class AudioClip
{
  /**
   * @param {AudioBuffer} buffer
   * @param {boolean} [loop]
   * @param {number} [volume]
   * @param {boolean} [positional]
   */
  constructor(buffer, loop = true, volume = 1, positional = false)
  {
    this.buffer = buffer;
    this.loop = loop;
    this.volume = volume;
    this.positional = positional;

    this.audio = undefined;
  }

  /**
   * @param {AudioListener} audio_listener
   */
  init(audio_listener)
  {
    if (this.positional)
    {
      this.audio = new TPositionalAudio(audio_listener);
    }
    else
    {
      this.audio = new TAudio(audio_listener);
    }

    this.audio.setBuffer(this.buffer);
    this.audio.setLoop(this.loop);

    // This prevents undesired volume at the beginning of playing
    this.audio.gain.gain.value = 0;

    this.audio.setVolume(this.loop ? 0 : this.volume);
  }

  play()
  {
    this.audio.play();
  }

  pause()
  {
    this.audio.pause();
  }

  stop()
  {
    this.audio.stop();
  }

  get is_playing()
  {
    return this.audio.isPlaying;
  }
}

export { AudioClip };
