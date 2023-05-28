import { UI } from '#src/component/ui';

export default class UIObject extends UI {
  constructor(options) {
    super(options);
    this.position = { x: 0, y: 0 };
    if (options?.position) this.position = options.position;
  }

  setPosition(position) {
    this.position = position;
    return this;
  }
}

export { UIObject };
