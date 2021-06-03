import Phaser from 'phaser';

class PlayScene extends Phaser.Scene {

  constructor() {
    super('PlayScene');
    this.gameSpeed = 6;
    this.backgroundSpeed = 2;
    this.isGameRunning = true;
    this.gameOver = false;
    this.respawnTime = 0;
    this.score = 0;
    this.timePause = false;
    this.minute = 0;
    this.seconde = 0;
  }

  create() {
    const { height, width } = this.game.config;
    this.vies = this.data.set('vies', 3);
    this.enemyDead = this.data.set('kill', 0);

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
  }

  initSound() {
    this.soundHit = this.sound.add('hit');
    this.soundEnd = this.sound.add('end');
    this.soundHit2 = this.sound.add('hit2');
    this.soundEnd2 = this.sound.add('end2');
    this.soundJump = this.sound.add('jump');
    this.soundPause = this.sound.add('pause');
    this.soundGogogo = this.sound.add('gogogo');
  }

  initTimeEvent() {
    this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.onEventTimer, callbackScope: this, loop: true });
    this.timedEventScore = this.time.addEvent({ delay: 1000 / 10, callback: this.onEventScore, callbackScope: this, loop: true });
  }

  initText() {

    this.scoreText = this.add.text(1050, 0, '', { fill: "#ffffff", font: '900 35px Roboto' });
    this.timeText = this.add.text(1050, 30, '', { font: '900 35px Roboto', fill: '#ffffff' });
    this.textVies = this.add.text(1050, 60, '', { font: '900 35px Roboto', fill: '#ffffff' });
    this.textPause = this.add.text(400, 260, '', { font: '900 150px Roboto', fill: '#ffffff' });
    this.textVitesse = this.add.text(1050, 90, '', { font: '900 35px Roboto', fill: '#ffffff' });
    this.highScoreText = this.add.text(1050, 0, '', { fill: "#535353", font: '900 35px Roboto' });
    this.textGameOver = this.add.text(300, 260, '', { font: '900 100px Roboto', fill: '#000000' });
    this.textEnemyDead = this.add.text(1050, 120, '', { font: '900 35px Roboto', fill: '#ffffff' });
    this.textResumeGame = this.add.text(300, 360, '', { font: '900 70px Roboto', fill: '#ffffff' });
    this.textPause.visible = false;
    this.textGameOver.visible = false;
    this.textResumeGame.visible = false;
  }

  displayText() {
    this.textPause.setText('PAUSE');
    this.textGameOver.setText('GAME OVER');
    this.scoreText.setText('Score: ' + this.score);
    this.textVies.setText('Vies : ' + this.data.get('vies'));
    this.textEnemyDead.setText('Kills : ' + this.data.get('kill'));
    this.textVitesse.setText('Vitesse : ' + Math.trunc(this.gameSpeed));
    this.timeText.setText('Temps : ' + this.minute + " : " + this.seconde);
    this.textResumeGame.setText('Votre score est de : ' + this.score + '\nVous avez tué ' + this.data.get('kill') + ' ennemies\nen ' + this.minute + " minutes et " + this.seconde + ' secondes !');
  }

  initColliders() {
    this.physics.add.collider(this.player, this.platforms);
  }

  initAnims() {
    this.anims.create({
      key: 'running',
      frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 15 }),
      frameRate: 16,
      repeat: -1
    });

    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('perso-down', { start: 0, end: 15 }),
      frameRate: 16,
      repeat: -1
    });

    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('perso-up', { start: 0, end: 8 }),
      frameRate: 16,
      repeat: -1
    });

    this.anims.create({
      key: 'enemy1',
      frames: this.anims.generateFrameNumbers('enemy-1', { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'enemy2',
      frames: this.anims.generateFrameNumbers('enemy-2', { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'enemy3',
      frames: this.anims.generateFrameNumbers('enemy-3', { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'enemy--spe1',
      frames: this.anims.generateFrameNumbers('enemy-spe1', { start: 0, end: 7 }),
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
          this.anims.resumeAll();
          this.textPause.visible = false;
          this.backgroundSpeed = 2;
          this.gameSpeed = currentGameSpeed;
          this.isGameRunning = true;
          this.timePause = false;
          this.soundPause.play();
          this.soundGogogo.play();
        }
        else {
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
    let obsticle;
    const enemyHeight = [120, 350];

    if (obsticleNum > 3) {
      obsticle = this.obsticles.create(this.game.config.width + distance, this.game.config.height - enemyHeight[Math.floor(Math.random() * 2)], `enemy-spe1`);
      obsticle.play('enemy--spe1', 1);
      obsticle.body.height = 110;
      obsticle.body.width = 85;
    } else {
      obsticle = this.obsticles.create(this.game.config.width + distance, this.game.config.height - enemyHeight[Math.floor(Math.random() * 2)], `enemy${obsticleNum}`);
      obsticle.play(`enemy${obsticleNum}`, 1);
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

  update(time, delta) {
    this.ground.tilePositionX += this.gameSpeed;
    this.background.tilePositionX += this.backgroundSpeed;
    Phaser.Actions.IncX(this.obsticles.getChildren(), -this.gameSpeed);
    this.displayText();

    this.respawnTime += delta * this.gameSpeed * 0.08;
    if (this.respawnTime >= 700) {
      this.placeObsticle();
      this.respawnTime = 0;
    }

    this.obsticles.getChildren().forEach(obsticle => {
      if (obsticle.getBounds().right < 0) {
        obsticle.destroy();
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
        this.player.anims.play('down', true) :
        this.player.anims.play('running', true);
    }

    if (this.data.get('vies') == 0) {
      this.gameOver = true;
      this.anims.pauseAll();
      this.randomSound(this.soundEnd, this.soundEnd2);
      this.isGameRunning = false;
      this.backgroundSpeed = 0;
      this.gameSpeed = 0;
      this.timePause = true;

      this.textGameOver.visible = true;
      this.textResumeGame.visible = true;
      this.textVies.visible = false;
      this.textVitesse.visible = false;
      this.scoreText.visible = false;
      this.timeText.visible = false;
      this.textEnemyDead.visible = false;
      this.data.set('vies', 3);
    }
  }
}

export default PlayScene;
