import { Button } from '#src/component/button/button';

export default class TextButton extends Button {
  constructor(text, parameters) {
    super(parameters);
    this.id = `textButton-${this.uid}`;
    this.text = text;
    this.text.setPosition(this.position);
  }

  add() {
    super.add();
    this.text.add();
    return this;
  }
}

export { TextButton };
