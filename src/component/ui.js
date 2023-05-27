import { KaboomSingleton } from '#src/lib/kaboomSingleton';
import { uid } from 'uid';

export default class UI {
  constructor(parameters) {
    this.uid = uid();
    this.kaboom = KaboomSingleton.getInstance();
    this.parameters = parameters;
  }

  display() {
    if (this.load) this.load();
    if (this.add) this.add();
    if (this.go) this.go();
  }
}

export { UI };
