import { UI } from '#src/component/ui';
import { State } from '#src/lib/state';

export default class UIObject extends UI {
  constructor(options) {
    super(options);
    this.position = { x: 0, y: 0 };
    if (options?.position) this.position = options.position;
  }

  add(options) {
    this.component = this.kaboom.add([
      this.kaboom.pos(this.position.x, this.position.y),
      this.kaboom.area(),
      ...options,
    ]);

    if (this.options?.onHover) this.component.onHover(this.options.onHover);
    if (this.options?.onHoverEnd) this.onHoverEnd(this.options.onHoverEnd);
    if (this.options?.onClick) this.component.onClick(this.options.onClick);

    return this;
  }

  onHover(callBack) {
    this.component.onHover(callBack);
    return this;
  }

  onHoverEnd(callBack) {
    this.component.onUpdate(() => {
      if (!this.component.isHovering()) callBack();
    });
    return this;
  }

  setPosition(position) {
    this.position = position;
    return this;
  }
}

export { UIObject };
