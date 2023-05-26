import {
  UIService,
} from '#src/export';

import { TestScene } from '#src/test/scene/test';

UIService.init();
const scene = () => new TestScene('scene::test');
scene();
