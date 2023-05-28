import { UIObject } from '#src/component/uiObject';

const getKaboomOptions = (parameters) => {
  const options = {};
  if (parameters?.width) options.width = parameters.width;
  if (parameters?.size) options.size = parameters.size;
  return options;
};

export default class Text extends UIObject {
  constructor(text, options) {
    super(options);
    this.id = `text-${this.uid}`;
    this.text = text;
  }

  add() {
    this.kaboom.add([
      this.kaboom.pos(this.position.x, this.position.y),
      this.kaboom.text(this.text, getKaboomOptions(this?.options)),
    ]);
    return this;
  }
}

export { Text };
