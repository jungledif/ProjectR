
import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {

  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.image('sky', './sky.png');
    this.load.image('ground', './groundmvp.png');
    this.load.image('groundinvi', './groundinvi.png');

    this.load.spritesheet('perso', './perso-run.png', {
      frameWidth: 88,
      frameHeight: 94
    })

    this.load.spritesheet('perso-down', './perso-down.png', {
      frameWidth: 88,
      frameHeight: 94
    })

    this.load.spritesheet('perso-up', './perso-jump.png', {
      frameWidth: 88,
      frameHeight: 94
    })

    this.load.spritesheet('enemy-1', './enemy1.png', {
      frameWidth: 70,
      frameHeight: 80
    })

    this.load.spritesheet('enemy-2', './enemy2.png', {
      frameWidth: 70,
      frameHeight: 80
    })

    this.load.spritesheet('enemy-3', './enemy3.png', {
      frameWidth: 70,
      frameHeight: 80
    })

    this.load.spritesheet('enemy-spe1', './krugs.png', {
      frameWidth: 95,
      frameHeight: 110
    })

  }

  create() {
    this.scene.start('PlayScene');
  }
}

export default PreloadScene;
