import { UI } from '#src/component/ui';
import { storeService as store } from '#src/service/store';

export default class UIObject extends UI {
  constructor(options) {
    super(options);
    console.log('UIObject options', options);
    this.id = `${options.componentType}-${this.uid}`;

    store.set(
      'position',
      options?.position || { x: 0, y: 0 },
      { nameSpace: this.id },
    );

    console.log('instance :', this instanceof UIObject);
  }

  eventRegister() {
    const onHover = () => {
      if (this?.options.onHover) this.options.onHover();
      this.emit('onHover', true);
    };

    const onHoverEnd = () => {
      if (this?.options.onHoverEnd) this.options.onHoverEnd();
      this.emit('onHoverEnd', true);
    };

    this.component.onClick(() => {
      if (this?.options.onClick) this.options.onClick();
      this.emit('onClick', true);
    });

    this.component.onUpdate(() => {
      const isHovering = this.component.isHovering();
      const previousState = store.get('hover', { nameSpace: this.id });
      store.set('hover', isHovering, { nameSpace: this.id });

      if (isHovering && previousState === false) {
        onHover();
      }

      if (!isHovering && previousState === true) {
        onHoverEnd();
      }
    });

    return this;
  }

  add(options) {
    const { x, y } = this.getPosition();
    this.component = this.kaboom.add([
      this.kaboom.pos(x, y),
      this.kaboom.area(),
      ...options,
    ]);
    return this;
  }

  getPosition() {
    return store.get('position', { nameSpace: this.id });
  }

  setPosition(position) {
    store.set('position', position, { nameSpace: this.id });
    return this;
  }
}

export { UIObject };
