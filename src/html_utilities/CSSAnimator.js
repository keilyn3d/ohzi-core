import { Animating } from './css_animator_states/Animating';
import { Idle } from './css_animator_states/Idle';
import { EasingFunctions } from '../utilities/EasingFunctions';

class CSSAnimator
{
  constructor({
    element,
    css_property,
    from = 0,
    to = 1,
    duration = 1,
    value_prefix = '',
    value_suffix =  '',
    easing_function = EasingFunctions.ease_in_out_cubic,
    finished_callback = () =>
    {}
  })
  {
    this.element = element;
    this.css_property = css_property;
    this.from = from;
    this.to = to;
    this.value_prefix = value_prefix;
    this.value_suffix = value_suffix;
    this.duration = duration;
    this.easing_function = easing_function;
    this.finished_callback = finished_callback;

    this.current_state = new Idle();
  }

  animate()
  {
    this.set_current_state(new Animating());
  }

  stop()
  {
    this.set_current_state(new Idle());
  }

  set_property_value(value)
  {
    this.element.style[this.css_property] = `${this.value_prefix}${value}${this.value_suffix}`;
  }

  update()
  {
    this.current_state.update(this);
  }

  get is_animating()
  {
    return this.current_state.is_animating;
  }

  set_current_state(state)
  {
    this.current_state.on_exit(this);
    this.current_state = state;
    this.current_state.on_enter(this);
  }
}

export { CSSAnimator };
