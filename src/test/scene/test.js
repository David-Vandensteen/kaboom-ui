import {
  UIScene,
  Button,
  TextButton,
  Text,
} from '#src/export';

export default class TestScene extends UIScene {
  display() {
    this.button = new Button({
      position: { x: 120, y: 120 },
      onPressed: 'hello button',
    })
      .display();

    this.textButton = new TextButton('Hello text button').display();

    this.textButton2 = new TextButton('Text button 2', {
      position: { x: 130, y: 130 },
    }, {
      size: 100,
    }).display();

    this.text = new Text('Text::Hello', {
      position: { x: 150, y: 600 },
    })
      .display();

    return this;
  }
}

export { TestScene };
