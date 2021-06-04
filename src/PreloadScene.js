
import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {

  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.image('sky', './skyy.png');
    this.load.image('ground', './ground.png');
    this.load.image('groundinvi', './groundinvi.png');
    this.load.image('background', './background.png');

    this.load.audio('hit', ['./audio/hit.mp3']);
    this.load.audio('end', ['./audio/end.mp3']);
    this.load.audio('hit2', ['./audio/hit2.mp3']);
    this.load.audio('jump', ['./audio/jump.mp3']);
    this.load.audio('end2', ['./audio/end2.mp3']);
    this.load.audio('pause', ['./audio/pause.mp3']);
    this.load.audio('gogogo', ['./audio/gogogo.mp3']);

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

    // enemies

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

    // specials enemies

    this.load.spritesheet('enemy-spe1', './krugs.png', {
      frameWidth: 95,
      frameHeight: 110
    })

    this.load.spritesheet('enemy-spe2', './soinc.png', {
      frameWidth: 95,
      frameHeight: 110
    })

    this.load.spritesheet('enemy-spe3', './tourelle.png', {
      frameWidth: 95,
      frameHeight: 110
    })

    this.load.spritesheet('enemy-spe4', './claptrap.png', {
      frameWidth: 95,
      frameHeight: 110
    })
  }

  create() {
    this.scene.start('PlayScene');
  }
}

export default PreloadScene;
