import { UIService } from '#src/export';
import { TestScene } from '#src/test/scene/test';
import { kaboomOptions } from '#src/config';

UIService.init(kaboomOptions || {});

new TestScene('scene::test').display();
