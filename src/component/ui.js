import { KaboomSingleton } from '#src/lib/kaboomSingleton';

export default class UI {
  constructor(keyName) {
    if (!keyName) throw new Error('UI::KeyName is not provided');
    this.keyName = keyName;
    this.kaboom = KaboomSingleton.getInstance();
  }
}

export { UI };
