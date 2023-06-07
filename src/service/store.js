import EventEmitter from 'eventemitter3';
import mixin from '#src/lib/mixin';

class StoreService extends EventEmitter {}
const storeService = mixin(new StoreService(), new Map());

export default storeService;
export { storeService };
