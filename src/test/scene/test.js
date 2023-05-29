import {
  UIScene,
  Button,
  TextButton,
  Text,
} from '#src/export';

export default class TestScene extends UIScene {
  display() {
    this.button = new Button({
      onHover: () => { console.log('onHover'); },
      onHoverEnd: () => { console.log('onHoverEnd'); },
      onClick: () => { console.log('onClick'); },
    })
      .display();

    console.log(this.button.component);

    return this;
  }
}

export { TestScene };
