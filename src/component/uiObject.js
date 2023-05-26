import { UI } from '#src/component/ui';

export default class UIObject extends UI {
  constructor(...parameters) {
    super(...parameters);
    console.log('UIObject::parameters', parameters);
    this.position = { x: 0, y: 0 };
    const [, options] = parameters;
    if (options?.position) this.position = options.position;

    console.log('UIObject::position', this.position);
    console.log('UIObject::position.x', this.position.x);
  }
}

export { UIObject };
