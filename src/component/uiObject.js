import { UI } from '#src/component/ui';

export default class UIObject extends UI {
  constructor(...parameters) {
    super(...parameters);
    console.log('UIObject::parameters', parameters);
    const [, options] = parameters;
    const { position } = options;
    this.position = (position) || { x: 0, y: 0 };
    console.log('UIObject::position', this.position);
    console.log('UIObject::position.x', this.position.x);
  }
}

export { UIObject };
