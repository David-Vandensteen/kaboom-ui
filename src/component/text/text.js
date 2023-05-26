import { UIObject } from '#src/component/uiObject';

export default class Text extends UIObject {
  constructor(...options) {
    const [keyName, text] = options;
    super(keyName);
    console.log('text', text);
  }
}

export { Text };
