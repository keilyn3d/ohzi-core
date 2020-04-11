import UIElementState from '/UIElementState'

export default class OnMouseExit extends UIElementState
{
	constructor()
	{
		super();
	}

	on_enter(ui_element)
	{
		if(ui_element.on_exit)
		{
			ui_element.on_exit();
		}

		ui_element.set_state(ui_element._on_idle_state);
	}

}
