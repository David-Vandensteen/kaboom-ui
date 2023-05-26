import { KaboomSingleton } from '#src/lib/kaboomSingleton';

export default class UI {
  constructor(...parameters) {
    console.log('UI::parameters', parameters);
    const [keyName] = parameters;
    console.log('UI::keyName', keyName);
    if (!keyName) throw new Error('UI::KeyName is not provided');
    this.keyName = keyName;
    this.kaboom = KaboomSingleton.getInstance();
  }

  display() {
    if (this.load) this.load();
    if (this.add) this.add();
    if (this.go) this.go();
  }
}

export { UI };
