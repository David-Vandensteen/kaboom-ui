import { UIObject } from '#src/component/uiObject';
import { buttonSprite } from '#src/config';

export default class Button extends UIObject {
  constructor(options) {
    super({
      ...options,
      ...{ componentType: options?.componentType || 'button' },
    });
  }

  load() {
    this.kaboom.loadSprite(this.id, buttonSprite);
    return this;
  }

  // override
  add() {
    super.add([
      this.kaboom.sprite(this.id),
    ]);

    console.log(this.component);
    return this;
  }
}

export { Button };
