import {
  UIScene,
  Button,
  TextButton,
  Text,
  storeService,
  // KaboomSingleton,
} from '#src/export';

export default class TestScene extends UIScene {
  display() {
    this.text = new Text('text', {
      onHover: () => { console.log('text onHover'); },
      onClick: () => { console.log('text onClick'); },
    })
      .display();

    this.button = new Button({
      position: { x: 100, y: 100 },
      onHover: () => { console.log('button onHover'); },
      onHoverEnd: () => { console.log('button onHoverEnd'); },
      onClick: () => { console.log('button onClick'); },
    })
      .display();

    this.textButton = new TextButton('Hello', { position: { x: 200, y: 200 } })
      .display();

    console.log(storeService);
    return this;
  }
}

export { TestScene };
