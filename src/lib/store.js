import EventEmitter from 'eventemitter3';

const defaultStore = 'defaultStore';

export default class Store extends EventEmitter {
  get(key, { nameSpace } = { nameSpace: defaultStore }) {
    if (!this[nameSpace]) return undefined;
    return this[nameSpace][key];
  }

  set(key, value, { nameSpace } = { nameSpace: defaultStore }) {
    if (!this[nameSpace]) this[nameSpace] = {};
    if (this[nameSpace][key] !== value) {
      this[nameSpace][key] = value;
      this.emit(key, value); // TODO : nameSpace
    }
  }
}

export { Store };
