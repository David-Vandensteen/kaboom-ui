import { UI } from '#src/component/ui';
import { Position } from '#src/lib/position';

export default class UIObject extends UI {
  constructor(parameters) {
    super(parameters);
    this.position = new Position({ x: 0, y: 0 });
    if (parameters?.position) this.position = parameters.position;
  }

  setPosition(position) {
    this.position = position;
    return this;
  }
}

export { UIObject };
