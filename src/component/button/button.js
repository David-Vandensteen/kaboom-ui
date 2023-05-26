import { UIObject } from '#src/component/uiObject';
import { buttonSprite } from '#src/config';

export default class Button extends UIObject {
  constructor(...parameters) {
    const [keyName, options] = parameters;
    super(keyName);
    const { onPressed } = options;
    console.log('onPressed', onPressed);
  }

  load() {
    this.kaboom.loadSprite(this.keyName, buttonSprite);
    return this;
  }

  #eventRegister() {
    // TODO
  }

  add(x, y) {
    this.kaboom.add([
      this.kaboom.pos(x, y),
      this.kaboom.sprite(this.keyName),
    ]);
  }
}

export { Button };
