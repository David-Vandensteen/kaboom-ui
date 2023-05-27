import { Button } from '#src/component/button/button';

export default class TextButton extends Button {
  constructor(parameters) {
    super(parameters);
    this.id = `textButton-${this.uid}`;
    this.text = parameters.text;
    this.text.setPosition(this.position);
  }

  add() {
    super.add();
    this.text.add();
    return this;
  }
}

export { TextButton };
