import { UIObject } from '#src/component/uiObject';
import { buttonSprite } from '#src/config';

export default class Button extends UIObject {
  constructor(...parameters) {
    super(...parameters);
    console.log('Button::parameters', parameters);
    console.log('Button::position', this.position);
    const [, options] = parameters;
    const { onPressed } = options;
  }

  load() {
    this.kaboom.loadSprite(this.keyName, buttonSprite);
    return this;
  }

  #eventRegister() {
    // TODO
  }

  add() {
    console.log('Button::position', this.position);
    console.log('Button::position.x', this.position.x);
    this.kaboom.add([
      this.kaboom.pos(this.position?.x || 0, this.position?.y || 0),
      this.kaboom.sprite(this.keyName),
    ]);
    return this;
  }
}

export { Button };
