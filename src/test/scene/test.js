import {
  UIScene,
  Button,
  TextButton,
  Text,
  Position,
} from '#src/export';

export default class TestScene extends UIScene {
  display() {
    this.button = new Button({
      position: new Position({ x: 120, y: 120 }),
      onPressed: 'hello button',
    })
      .display();

    this.textButton = new TextButton(new Text('Hello text button')).display();

    this.text = new Text('Text::Hello', {
      position: new Position({ x: 150, y: 150 }),
    })
      .display();

    return this;
  }
}

export { TestScene };
