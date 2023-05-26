import {
  UIScene,
  Button,
  TextButton,
  Text,
} from '#src/export';

export default class TestScene extends UIScene {
  constructor(...parameters) {
    super(parameters);
    this.button = new Button('button', {
      position: { x: 120, y: 120 },
      onPressed: 'hello button',
    }).display();

    this.textButton = new TextButton('textButton', { onPressed: 'hello textButton' })
      .display();

    this.text = new Text('text', 'hello text')
      .display();
  }
}

export { TestScene };
