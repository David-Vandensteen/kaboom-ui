import { UIObject } from '#src/component/uiObject';

const getKaboomOptions = (parameters) => {
  const options = {};
  if (parameters?.width) options.width = parameters.width;
  if (parameters?.size) options.size = parameters.size;
  return options;
};

export default class Text extends UIObject {
  constructor(text, options) {
    super({ ...options, ...{ componentType: 'text' } });
    this.text = text;
  }

  add() {
    const { x, y } = this.getPosition();
    this.kaboom.add([
      this.kaboom.pos(x, y),
      this.kaboom.text(this.text, getKaboomOptions(this?.options)),
    ]);
    return this;
  }
}

export { Text };
