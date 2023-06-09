import { Button } from '#src/component/button/button';
import { Text } from '#src/component/text/text';

export default class TextButton extends Button {
  constructor(text, options) {
    super({ ...options, ...{ componentType: 'textButton' } });

    let textOptions = {};
    if (options?.text) textOptions = options.text;

    this.text = new Text(text, {
      size: 22,
      ...textOptions,
    });
    const { x, y } = this.getPosition();
    this.text.setPosition({ x: x + 10, y: y + 10 });
  }

  add() {
    super.add();
    this.text.add();
    return this;
  }
}

export { TextButton };
