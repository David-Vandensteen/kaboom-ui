import { UI } from '#src/component/ui';
import { store } from '#src/lib/store';

export default class UIObject extends UI {
  constructor(options) {
    super(options);
    store.state = {
      hover: false,
    };
    store.set('position', options?.position || { x: 0, y: 0 });
  }

  #eventRegister() {
    const onHover = () => {
      console.log('onHover');
    };

    const onHoverEnd = () => {
      console.log('onHoverEnd');
    };

    this.component.onClick(() => {
      console.log('onClick');
    });

    this.component.onUpdate(() => {
      const isHovering = this.component.isHovering();
      const previousState = store.get('state') || { hover: null };

      if (isHovering && previousState.hover === false) {
        onHover();
      }
      if (!isHovering && previousState.hover === true) {
        onHoverEnd();
      }

      store.set('state', { hover: isHovering });
    });

    return this;
  }

  add(options) {
    this.component = this.kaboom.add([
      this.kaboom.pos(store.get('position').x, store.get('position').y),
      this.kaboom.area(),
      ...options,
    ]);
    this.#eventRegister();
    return this;
  }

  setPosition(position) {
    store.set('position', position);
    return this;
  }
}

export { UIObject };
