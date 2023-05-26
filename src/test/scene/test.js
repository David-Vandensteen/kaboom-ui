import {
  UIScene,
  TextButton,
  Text,
} from '#src/export';

export default class TestScene extends UIScene {
  constructor(keyName) {
    super(keyName);
    this.keyName = keyName;
    this.button = new TextButton('button', { onPressed: 'hello button' });
    this.text = new Text('text', 'hello text');
    // TODO : lazy optional mode
    this.load() // TODO : UI override
      .add()
      .go();
  }

  load() {
    this.button.load();
    return this;
  }

  add() {
    this.kaboom.scene(this.keyName, () => {
      this.button.add(120, 120);
    });
    return this;
  }

  go() {
    this.kaboom.go(this.keyName);
    return this;
  }
}

export { TestScene };
