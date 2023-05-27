import { UIObject } from '#src/component/uiObject';
import { buttonSprite } from '#src/config';

export default class Button extends UIObject {
  constructor(parameters) {
    super(parameters);
    this.id = `button-${this.uid}`;
    const { onPressed } = parameters;
  }

  load() {
    this.kaboom.loadSprite(this.id, buttonSprite);
    return this;
  }

  #eventRegister() {
    // TODO
  }

  add() {
    this.kaboom.add([
      this.kaboom.pos(this.position.x, this.position.y),
      this.kaboom.sprite(this.id),
    ]);
    return this;
  }
}

export { Button };
