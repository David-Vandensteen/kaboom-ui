import {
  UIScene,
  Button,
  TextButton,
  Text,
} from '#src/export';

export default class TestScene extends UIScene {
  display() {
    this.button = new Button('button', {
      position: { x: 120, y: 120 },
      onPressed: 'hello button',
    }).display();

    this.textButton = new TextButton('textButton', { onPressed: 'hello textButton' })
      .display();

    this.text = new Text('text', { text: 'hello text', position: { x: 130, y: 130 } })
      .display();
    return this;
  }
}

export { TestScene };
