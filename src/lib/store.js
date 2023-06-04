import EventEmitter from 'eventemitter3';
import mixin from '#src/lib/mixin';

class Store extends EventEmitter {}
const store = mixin(new Store(), new Map());

export default store;
export { store };
