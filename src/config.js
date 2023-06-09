const config = {
  kaboomOptions: {
    background: [0, 0, 0],
  },
  sprite: {
    component: {
      button: 'sprite/ui/wenrexa-assets-gui-dark-miko/Standart Button V1/Standart Button Normal/Standart Button Normal 6.png',
    },
  },
};

const buttonSprite = config.sprite.component.button;
const { kaboomOptions } = config;

export default config;
export {
  kaboomOptions,
  config,
  buttonSprite,
};
