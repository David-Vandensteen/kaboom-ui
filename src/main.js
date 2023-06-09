import { UIService } from '#src/export';
import { TestScene } from '#src/test/scene/test';

UIService.init();
new TestScene('scene::test').display();
