import EventEmitter from 'eventemitter3';
// import mixin from '#src/lib/mixin';

class StoreService extends EventEmitter {
  register(componentId) {
    this.id = componentId;
    this[componentId] = {};
  }

  get(location) {
    return this[this.id][location];
  }

  set(location, value) {
    this[this.id][location] = value;
    return this;
  }
}

// const storeService = mixin(new StoreService(), new Map());
const storeService = new StoreService();

export default storeService;
export { storeService };
