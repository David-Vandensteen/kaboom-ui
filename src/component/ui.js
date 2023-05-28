import { KaboomSingleton } from '#src/lib/kaboomSingleton';
import { uid } from 'uid';

export default class UI {
  constructor(options) {
    this.uid = uid();
    this.kaboom = KaboomSingleton.getInstance();
    this.options = options;
  }

  display() {
    if (this.load) this.load();
    if (this.add) this.add();
    if (this.go) this.go();
    return this;
  }
}

export { UI };
