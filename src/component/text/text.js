import { UIObject } from '#src/component/uiObject';

const getKaboomOptions = (parameters) => {
  const options = {};
  if (parameters.width) options.width = parameters.width;
  if (parameters.size) options.size = parameters.size;
  return options;
};

export default class Text extends UIObject {
  constructor(parameters) {
    super(parameters);
    this.id = `text-${this.uid}`;
  }

  add() {
    this.kaboom.add([
      this.kaboom.pos(this.position.x, this.position.y),
      this.kaboom.text(this.parameters.text, getKaboomOptions(this.parameters)),
    ]);
    return this;
  }
}

export { Text };
