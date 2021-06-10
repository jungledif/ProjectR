import { CST } from "../CST";

export class PlayScene extends Phaser.Scene {

  constructor() {
    super({
      key: CST.SCENES.PLAYSCENE
    })

  }

  create() {
    this.gameSpeed = 2;
    this.backgroundSpeed = 2;
    this.isGameRunning = true;
    this.gameOver = false;
    this.respawnTime = 900;
    this.score = 0;
    this.timePause = false;
    this.minute = 0;
    this.seconde = 0;
    this.bonusPoint = 10;
    
    this.data.set('score', this.gameSpeed);
    this.data.set('time', this.minute + " : " + this.seconde);
    this.enemyDead = this.data.set('kill', 0);
    this.vies = this.data.set('vies', 3);
    this.timePause = false;

    const { height, width } = this.game.config;
    this.add.image(640, 360, 'sky');
    this.background = this.add.tileSprite(0, height, width, 720, 'background').setOrigin(0, 1);
    this.ground = this.add.tileSprite(0, height, width, 170, 'ground').setOrigin(0, 1);
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 690, 'groundinvi').setScale(2).refreshBody();
    this.platforms.create(400, 245, 'groundinvi').setScale(2).refreshBody();
    this.player = this.physics.add.sprite(100, 400, 'perso').setCollideWorldBounds(true).setGravityY(8000);
    this.obsticles = this.physics.add.group();
    this.initTimeEvent();
    this.initText();
    this.initAnims();
    this.initColliders();
    this.initSound();
    this.handleInputs();
    this.initIcone();

    this.soundgame.play();

  }

  initIcone() {
    // this.iconeScore = this.add.image(30, 30, 'score');
    // this.iconeScore.setScale(2);
    // this.iconeKill = this.add.image(322, 30, 'mort');
    // this.iconeKill.setScale(2);
    this.iconeTime = this.add.image(614, 30, 'sablier');
    this.iconeTime.setScale(0.3);
    // this.iconeSpeed = this.add.image(906, 30, 'botte');
    // this.iconeSpeed.setScale(2);
    this.iconeVie = this.add.image(30, 690, 'coeur');
    this.iconeVie2 = this.add.image(60, 690, 'coeur');
    this.iconeVie3 = this.add.image(90, 690, 'coeur');
    this.iconeVie.setScale(0.10);
    this.iconeVie2.setScale(0.10);
    this.iconeVie3.setScale(0.10);
  }
  
  initSound() {
    this.soundgame = this.sound.add('soundgame',{volume: 10});
    this.soundEnd = this.sound.add('end');
    this.soundHit = this.sound.add('hit',{volume: 1.5});
    this.soundEnd = this.sound.add('end');
    this.soundHit2 = this.sound.add('hit2',{volume: 1.5});
    this.soundEnd2 = this.sound.add('end2');
    this.soundJump = this.sound.add('jump',{volume: 2});
    this.soundPause = this.sound.add('pause',{volume: 0.15});
    // this.soundGogogo = this.sound.add('gogogo');
    this.soundLoseLife = this.sound.add('loselife',{volume: 6 });
  }

  initTimeEvent() {
    this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.onEventTimer, callbackScope: this, loop: true });
    this.timedEventScore = this.time.addEvent({ delay: 1000 / 10, callback: this.onEventScore, callbackScope: this, loop: true });
  }

  initText() {
    this.scoreText = this.add.text(30, 15, '', { fill: "#ffffff", font: '900 35px Roboto' });
    this.timeText = this.add.text(644, 15, '', { font: '900 35px Roboto', fill: '#ffffff' });
    // this.textVies = this.add.text(1230, 15, '', { font: '900 35px Roboto', fill: '#ffffff' });
    this.textPause = this.add.text(400, 260, '', { font: '900 150px Roboto', fill: '#ffffff' });
    this.textVitesse = this.add.text(936, 15, '', { font: '900 35px Roboto', fill: '#ffffff' });
    this.highScoreText = this.add.text(1050, 0, '', { fill: "#535353", font: '900 35px Roboto' });
    this.textGameOver = this.add.text(300, 260, '', { font: '900 100px Roboto', fill: '#000000' });
    this.textEnemyDead = this.add.text(352, 15, '', { font: '900 35px Roboto', fill: '#ffffff' });
    this.textResumeGame = this.add.text(300, 360, '', { font: '900 70px Roboto', fill: '#ffffff' });
    this.textPause.visible = false;
    this.textGameOver.visible = false;
    this.textResumeGame.visible = false;
  }

  displayText() {
    this.textPause.setText('PAUSE');
    this.textGameOver.setText('GAME OVER');
    this.scoreText.setText(this.score);
    // this.textVies.setText(this.data.get('vies'));
    // this.textEnemyDead.setText(this.data.get('kill'));
    // this.textVitesse.setText(Math.trunc(this.gameSpeed));
    this.timeText.setText(this.minute + " : " + this.seconde);
    // this.textResumeGame.setText('Votre score est de : ' + this.score + '\nVous avez tué ' + this.data.get('kill') + ' ennemies\nen ' + this.minute + " minutes et " + this.seconde + ' secondes !');
  }

  initColliders() {
    this.physics.add.collider(this.player, this.platforms);
  }

  initAnims() {
    this.anims.create({
      key: 'running',
      frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 7 }),
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('perso-down', { start: 0, end: 6 }),
      frameRate: 16,
      repeat: -1
    });

    this.anims.create({
      key: 'down2',
      frames: this.anims.generateFrameNumbers('perso-down2', { start: 0, end: 6 }),
      frameRate: 16,
      repeat: -1
    });

    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('perso-up', { start: 0, end: 7 }),
      frameRate: 16,
      repeat: -1
    });

    this.anims.create({
      key: 'enemy--spe1',
      frames: this.anims.generateFrameNumbers('enemy-spe1', { start: 0, end: 7 }),
      frameRate: 16,
      repeat: -1
    })
    this.anims.create({
      key: 'enemy--spe2',
      frames: this.anims.generateFrameNumbers('enemy-spe2', { start: 0, end: 7 }),
      frameRate: 16,
      repeat: -1
    })

    this.anims.create({
      key: 'enemy--spe3',
      frames: this.anims.generateFrameNumbers('enemy-spe3', { start: 0, end: 7 }),
      frameRate: 16,
      repeat: -1
    })

    this.anims.create({
      key: 'enemy--spe4',
      frames: this.anims.generateFrameNumbers('enemy-spe4', { start: 0, end: 7 }),
      frameRate: 16,
      repeat: -1
    })

    this.anims.create({
      key: 'enemy--spe5',
      frames: this.anims.generateFrameNumbers('enemy-spe5', { start: 0, end: 7 }),
      frameRate: 16,
      repeat: -1
    })
  }

  handleInputs() {

    let jumpTime = 0;
    let downTime = 0;
    let currentGameSpeed = 0;

    this.input.keyboard.on('keydown_ESC', function () {
      if (!this.gameOver) {
        if (this.anims.paused) {
          this.soundgame.resume();
          this.anims.resumeAll();
          this.textPause.visible = false;
          this.backgroundSpeed = 2;
          this.gameSpeed = currentGameSpeed;
          this.isGameRunning = true;
          this.timePause = false;
          this.soundPause.play();
          // this.soundGogogo.play();
        }
        else {
          this.soundgame.pause();
          this.anims.pauseAll();
          this.textPause.visible = true;
          this.backgroundSpeed = 0;
          this.isGameRunning = false;
          currentGameSpeed = this.gameSpeed;
          this.gameSpeed = 0;
          this.timePause = true;
          this.soundPause.play();
        }
      }
    }, this);

    this.input.keyboard.on('keydown_SPACE', () => {
      if (this.timePause == false) {
        if (!jumpTime == 0) { return; }
        this.player.body.height = 92;
        this.player.body.offset.y = 0;
        this.player.setVelocityY(-2600);
        this.soundJump.play();

        jumpTime = 1;
      }
    })

    this.input.keyboard.on('keyup_SPACE', () => {
      jumpTime = 0;
    })

    this.input.keyboard.on('keydown_DOWN', () => {
      if (this.timePause == false) {
        if (!downTime == 0) { return; }
        this.choiceDownImage = Math.floor(Math.random() * 2);
        this.player.body.height = 58;
        this.player.body.offset.y = 34;
        this.player.setVelocityY(+2600);
        downTime = 1;
        setTimeout(() => { this.player.body.height = 92; this.player.body.offset.y = 0 }, 100);
      }
    })

    this.input.keyboard.on('keyup_DOWN', () => {
      downTime = 0;
    })
  }

  placeObsticle() {
    const obsticleNum = Math.floor(Math.random() * 4) + 1;
    const distance = Phaser.Math.Between(600, 900);
    var obsticle;
    const enemyHeight = [120, 350];

    if (obsticleNum > 3) {
      obsticle = this.obsticles.create(this.game.config.width + distance, this.game.config.height - enemyHeight[Math.floor(Math.random() * 2)], `enemy-spe1`);
      if (this.score >= 0 && this.score <= 199) {
        obsticle.play('enemy--spe4', 1);
      } else if (this.score >= 200 && this.score <= 399) {
        obsticle.play('enemy--spe2', 1);
      } else if (this.score >= 400 && this.score <= 599) {
        obsticle.play('enemy--spe3', 1);
      } else if (this.score >= 600 && this.score <= 799) {
        obsticle.play('enemy--spe1', 1);
      } else if (this.score >= 800) {
        obsticle.play('enemy--spe5', 1);
      }

      obsticle.body.height = 110;
      obsticle.body.width = 85;
    } else {
      obsticle = this.obsticles.create(this.game.config.width + distance, this.game.config.height - enemyHeight[Math.floor(Math.random() * 2)], `enemy-${obsticleNum}`);
      obsticle.body.height = 70;
      obsticle.body.width = 60;
    }
    obsticle.setImmovable();
  }

  onEventTimer() {

    !this.timePause ? this.seconde++ : 0;
    if (this.seconde > 59) {
      this.minute++;
      this.seconde = 0;
    }
  }

  onEventScore() {

    if (!this.isGameRunning) { return; }
    this.score++;
    this.gameSpeed += 0.02

    if (this.score % 100 === 0) {
      //this.reachSound.play();

      this.tweens.add({
        targets: this.scoreText,
        duration: 100,
        repeat: 3,
        alpha: 0,
        yoyo: true
      })
    }

    const score = Array.from(String(this.score), Number);
    for (let i = 0; i < 5 - String(this.score).length; i++) {
      score.unshift(0);
    }
  }

  randomSound(sound1, sound2) {
    let randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == 0) {
      return sound1.play();
    } else {
      return sound2.play();
    }
  }

  randomImage(randomNumber) {
    if (randomNumber == 0) {
      return this.player.anims.play('down', true);
    } else {
      return this.player.anims.play('down2', true);
    }
  }

  bonusPoints() {
    if (this.data.get('kill') == this.bonusPoint) {
      this.soundPause.play();
      this.score += 100;
      this.bonusPoint += 10;
    }
  }

  update(time, delta) {
    if (this.data.get('vies') == 0) {
      this.soundgame.stop();
      this.scene.stop();
      this.scene.start(CST.SCENES.ENDING, [this.score, this.enemyDead, this.minute, this.seconde, this.gameSpeed]);
    } else if (this.data.get('vies') == 1) {
      this.iconeVie2.visible = false;
      this.iconeVie3.visible = false;

    } else if (this.data.get('vies') == 2) {
      this.iconeVie3.visible = false;
    }

    this.ground.tilePositionX += this.gameSpeed;
    this.background.tilePositionX += this.backgroundSpeed;
    Phaser.Actions.IncX(this.obsticles.getChildren(), -this.gameSpeed);
    this.displayText();

    this.respawnTime += delta * this.gameSpeed * 0.06;
    if (this.respawnTime >= 700) {
      this.placeObsticle();
      this.respawnTime = 0;
    }
    

    this.obsticles.getChildren().forEach(obsticle => {
      if (obsticle.getBounds().right < 0) {
        obsticle.destroy();
        this.soundLoseLife.play();
        this.vies = this.data.set('vies', this.data.get('vies') - 1);
      }
    })

    this.obsticles.getChildren().forEach(obsticle => {
      var player = this.player;
      this.physics.add.overlap(this.player, this.obsticles, killenemies, null, this);
    })

    function killenemies(player, obsticle) {
      if (this.player.body.onFloor() == false && obsticle.y == 370) {
        this.randomSound(this.soundHit, this.soundHit2);
        obsticle.destroy();
        this.enemyDead = this.data.set('kill', this.data.get('kill') + 1);
      } else if (!this.player.body.offset.y == 0 && obsticle.y == 600) {
        this.randomSound(this.soundHit, this.soundHit2);
        obsticle.destroy();
        this.enemyDead = this.data.set('kill', this.data.get('kill') + 1);
      }
    }

    if (this.player.body.onFloor() == false) {
      this.player.anims.play('jump', true);
    } else {
      this.player.body.height <= 58 ?
        // this.player.anims.play('down', true) :
        this.randomImage(this.choiceDownImage) :
        this.player.anims.play('running', true);
    }

    // if (this.data.get('vies') == 0) {
    //   this.gameOver = true;
    //   this.anims.pauseAll();
    //   this.randomSound(this.soundEnd, this.soundEnd2);
    //   this.isGameRunning = false;
    //   this.backgroundSpeed = 0;
    //   this.gameSpeed = 0;
    //   this.timePause = true;
    //   this.textGameOver.visible = true;
    //   this.textResumeGame.visible = true;
    //   this.data.set('vies', 3);
    // }
    this.bonusPoints();
  }
}