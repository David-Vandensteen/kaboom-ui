import kaboom from 'kaboom';

let kaboomInstance;

export default class KaboomSingleton {
  static getInstance() {
    if (!kaboomInstance) kaboomInstance = kaboom();
    return kaboomInstance;
  }

  static setInstance(instance) {
    kaboomInstance = instance;
    return kaboomInstance;
  }
}

export { KaboomSingleton };
