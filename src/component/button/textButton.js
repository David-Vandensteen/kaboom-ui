import { Button } from '#src/component/button/button';
import { Text } from '#src/component/text/text';

export default class TextButton extends Button {
  constructor(...parameters) {
    super(...parameters);
    const [, options] = parameters;
    console.log('TextButton::parameters', parameters);
  }
}

export { TextButton };
