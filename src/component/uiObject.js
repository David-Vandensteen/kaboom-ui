import { UI } from '#src/component/ui';
import { Store } from '#src/lib/store';

export default class UIObject extends UI {
  constructor(options) {
    super(options);
    this.store = new Store();
    this.store.state = {
      hover: false,
    };
    this.store.position = { x: 0, y: 0 }; // TODO : set
    if (options?.position) this.store.position = options.position; // TODO : get
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
      const state = this.store.get('state') || { hover: null };

      if (this.component.isHovering() && state.hover === false) onHover();
      if (!this.component.isHovering() && state.hover === true) onHoverEnd();

      if (this.component.isHovering()) this.store.set('state', { hover: true });
      if (!this.component.isHovering()) this.store.set('state', { hover: false });
    });

    return this;
  }

  add(options) {
    this.component = this.kaboom.add([
      this.kaboom.pos(this.store.position.x, this.store.position.y),
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
