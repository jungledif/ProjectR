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

    this.load.audio('hit', ['./assets/audio/hit.mp3']);
    this.load.audio('end', ['./assets/audio/end.mp3']);
    this.load.audio('hit2', ['./assets/audio/hit2.mp3']);
    this.load.audio('jump', ['./assets/audio/jump.mp3']);
    this.load.audio('end2', ['./assets/audio/end2.mp3']);
    this.load.audio('pause', ['./assets/audio/pause.mp3']);
    this.load.audio('gogogo', ['./assets/audio/gogogo.mp3']);

    this.load.image('sablier', './assets/image/sablier.png');
    this.load.image('mort', './assets/image/mort.png');
    this.load.image('coeur', './assets/image/coeur.png');
    this.load.image('botte', './assets/image/botte.png');
    this.load.image('score', './assets/image/score.png');

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

    // enemies

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

  // specials enemies

    this.load.spritesheet('enemy-spe1', './assets/image/krugs.png', {
      frameWidth: 95,
      frameHeight: 110
    })

    this.load.spritesheet('enemy-spe2', './assets/image/soinc.png', {
      frameWidth: 95,
      frameHeight: 110
    })

    this.load.spritesheet('enemy-spe3', './assets/image/tourelle.png', {
      frameWidth: 95,
      frameHeight: 110
    })

    this.load.spritesheet('enemy-spe4', './claptrap.png', {
      frameWidth: 95,
      frameHeight: 110
    })
  }
  
  create() {
    this.scene.start(CST.SCENES.PLAYSCENE);
    this.scene.launch();
  }
}
