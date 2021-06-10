import { CST } from "../CST";

export class PreloadScene extends Phaser.Scene {

  constructor() {
    super({
      key: CST.SCENES.PRELOAD
    })
  }

  preload() {
    this.load.image('sky', './dist/assets/image/skyy.png');
    this.load.image('ground', './dist/assets/image/ground.png');
    this.load.image('groundinvi', './dist/assets/image/groundinvi.png');
    this.load.image('background', './dist/assets/image/background.png');

    //this.load.audio('hit', ['./dist/assets/audio/hit.mp3']);
    this.load.audio('end', ['./dist/assets/audio/end.mp3']);
    //this.load.audio('hit2', ['./dist/assets/audio/hit2.mp3']);
    this.load.audio('jump', ['./dist/assets/audio/jump.mp3']);
    this.load.audio('end2', ['./dist/assets/audio/end2.mp3']);
    this.load.audio('pause', ['./dist/assets/audio/pause.mp3']);
    this.load.audio('gogogo', ['./dist/assets/audio/gogogo.mp3']);
    this.load.audio('loselife', ['./dist/assets/audio/loselife.mp3']);
    this.load.audio('hit', ['./dist/assets/audio/hitt.wav']);
    this.load.audio('hit2', ['./dist/assets/audio/hitt2.wav']);

    this.load.audio('soundgame', ['./dist/assets/audio/musicgame.mp3']);

    this.load.image('sablier', './dist/assets/image/time-01.svg');
    
    this.load.image('coeur', './dist/assets/image/coeur.png');
    
    this.load.image('score', './dist/assets/image/score.png');

    this.load.spritesheet('perso', './dist/assets/image/perso-run.png', {
      frameWidth: 88,
      frameHeight: 94
    })

    this.load.spritesheet('perso-down', './dist/assets/image/perso-down-1.png', {
      frameWidth: 100,
      frameHeight: 94
    })

    this.load.spritesheet('perso-down2', './dist/assets/image/perso-down-2.png', {
      frameWidth: 100,
      frameHeight: 94
    })

    this.load.spritesheet('perso-up', './dist/assets/image/perso-jump.png', {
      frameWidth: 88,
      frameHeight: 94
    })

    // enemies

    this.load.image('enemy-1', './dist/assets/image/enemy1.png');
    this.load.image('enemy-2', './dist/assets/image/enemy2.png');
    this.load.image('enemy-3', './dist/assets/image/enemy3.png');

    // specials enemies

    this.load.spritesheet('enemy-spe1', './dist/assets/image/krugs.png', {
      frameWidth: 95,
      frameHeight: 110
    })

    this.load.spritesheet('enemy-spe2', './dist/assets/image/soinc.png', {
      frameWidth: 95,
      frameHeight: 110
    })

    this.load.spritesheet('enemy-spe3', './dist/assets/image/tourelle.png', {
      frameWidth: 95,
      frameHeight: 110
    })

    this.load.spritesheet('enemy-spe4', './dist/assets/image/claptrap.png', {
      frameWidth: 95,
      frameHeight: 110
    })

    this.load.spritesheet('enemy-spe5', './dist/assets/image/bulbizarre.png', {
      frameWidth: 95,
      frameHeight: 110
    })
  }

  create() {
    this.scene.start(CST.SCENES.PLAYSCENE);
    this.scene.launch();
  }
}
