import { UI } from '#src/component/ui';
import { store } from '#src/lib/store';

export default class UIObject extends UI {
  constructor(options) {
    super(options);
    store.state = {
      hover: false,
    };
    store.position = { x: 0, y: 0 }; // TODO : set
    if (options?.position) store.position = options.position; // TODO : get
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
      // console.log(this.store.get('state'));
      // console.log(this.store);
      const state = store.get('state') || { hover: null };

      if (this.component.isHovering() && state.hover === false) onHover();
      if (!this.component.isHovering() && state.hover === true) onHoverEnd();

      if (this.component.isHovering()) store.set('state', { hover: true });
      if (!this.component.isHovering()) store.set('state', { hover: false });
    });

    return this;
  }

  add(options) {
    this.component = this.kaboom.add([
      this.kaboom.pos(store.position.x, store.position.y),
      this.kaboom.area(),
      ...options,
    ]);
    this.#eventRegister();
    return this;
  }

  setPosition(position) {
    this.store.position = position;
    return this;
  }
}

export { UIObject };
