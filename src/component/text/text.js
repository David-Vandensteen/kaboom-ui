import { UIObject } from '#src/component/uiObject';

export default class Text extends UIObject {
  constructor(...parameters) {
    super(...parameters);
    const [, text] = parameters;
    this.text = text;
    console.log('Text::text', text);
  }

  add() {
    this.kaboom.add([
      this.kaboom.text(this.text),
    ]);
    return this;
  }
}

export { Text };
