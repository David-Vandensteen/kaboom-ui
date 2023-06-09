import {
  UIScene,
  Button,
  TextButton,
  Text,
  storeService,
} from '#src/export';

export default class TestScene extends UIScene {
  display() {
    this.button = new Button({
      position: { x: 100, y: 100 },
      onHover: () => { console.log('onHover'); },
      onHoverEnd: () => { console.log('onHoverEnd'); },
      onClick: () => { console.log('onClick'); },
    })
      .display();

    this.textButton = new TextButton('Hello', { position: { x: 10, y: 10 } })
      .display();

    console.log(storeService);
    return this;
  }
}

export { TestScene };
