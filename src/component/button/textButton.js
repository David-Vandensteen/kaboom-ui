import { Button } from '#src/component/button/button';
import { Text } from '#src/component/text/text';

export default class TextButton extends Button {
  constructor(text, options, textOptions = {}) {
    super(options);
    this.id = `textButton-${this.uid}`;

    this.text = new Text(text, {
      size: 22,
      ...textOptions,
    });

    this.text.setPosition({ x: this.position.x + 10, y: this.position.y + 10 });
  }

  add() {
    super.add();
    this.text.add();
    return this;
  }
}

export { TextButton };
