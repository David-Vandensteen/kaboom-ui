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
    }).display();

    this.textButton = new TextButton({
      text: new Text({ text: 'text button' }),
      onPressed: () => 'hello textButton',
    })
      .display();

    this.text = new Text({
      text: 'Text::hello',
      position: new Position({ x: 130, y: 130 }),
      width: 220,
      size: 30,
    })
      .display();
    return this;
  }
}

export { TestScene };
