import { UIObject } from '#src/component/uiObject';

export default class Text extends UIObject {
  constructor(...parameters) {
    super(...parameters);
    const [, options] = parameters;
    const { text } = options;
    this.text = text;
    console.log('Text::parameters', parameters);
    console.log('Text::text', text);
  }

  add() {
    this.kaboom.add([
      this.kaboom.text(this.text),
      this.kaboom.pos(this.position?.x || 0, this.position?.y || 0),
    ]);
    return this;
  }
}

export { Text };
