import {CST} from "../CST";

export class PreloadScene extends Phaser.Scene {

  constructor() {
    super({
      key: CST.SCENES.PRELOAD
  })
  }
 
  preload() {
    this.load.image('sky', './assets/image/skyy.png');
    this.load.image('ground', './assets/image/ground.png');
    this.load.image('groundinvi', './assets/image/groundinvi.png');
    this.load.image('background', './assets/image/background.png');
    this.load.spritesheet('perso', './assets/image/perso-run.png', {
      frameWidth: 88,
      frameHeight: 94
    })

    this.load.spritesheet('perso-down', './assets/image/perso-down.png', {
      frameWidth: 88,
      frameHeight: 94
    })

    this.load.spritesheet('perso-up', './assets/image/perso-jump.png', {
      frameWidth: 88,
      frameHeight: 94
    })

    this.load.spritesheet('enemy-1', './assets/image/enemy1.png', {
      frameWidth: 70,
      frameHeight: 80
    })

    this.load.spritesheet('enemy-2', './assets/image/enemy2.png', {
      frameWidth: 70,
      frameHeight: 80
    })

    this.load.spritesheet('enemy-3', './assets/image/enemy3.png', {
      frameWidth: 70,
      frameHeight: 80
    })

    this.load.spritesheet('enemy-spe1', './assets/image/krugs.png', {
      frameWidth: 95,
      frameHeight: 110
    })

  }

  create() {
    this.scene.start(CST.SCENES.PLAYSCENE);
    this.scene.launch();
  }
}
