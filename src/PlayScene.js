import Phaser from 'phaser';

class PlayScene extends Phaser.Scene {

  constructor() {
    super('PlayScene');
  }

  create() {
    const { height, width } = this.game.config;
    this.gameSpeed = 6;
    this.isGameRunning = true;
    this.respawnTime = 0;
    this.score = 0;

    this.add.image(640, 360, 'sky');

    this.ground = this.add.tileSprite(0, height, width, 170, 'ground').setOrigin(0, 1);
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 690, 'groundinvi').setScale(2).refreshBody();
    this.platforms.create(400, 245, 'groundinvi').setScale(2).refreshBody();

    this.player = this.physics.add.sprite(100, 400, 'perso').setCollideWorldBounds(true).setGravityY(8000);

    this.scoreText = this.add.text(1050, 0, '', { fill: "#ffffff", font: '900 35px Roboto' })
    // .setOrigin(1, 0)
    // .setAlpha(1);

    this.highScoreText = this.add.text(1050, 0, '', { fill: "#535353", font: '900 35px Roboto' })
    // .setOrigin(1, 0)
    // .setAlpha(0);

    this.obsticles = this.physics.add.group();

    this.timeText = this.add.text(1050, 30, '', { font: '900 35px Roboto', fill: '#ffffff' });
    this.textVies = this.add.text(1050, 60, '', { font: '900 35px Roboto', fill: '#ffffff' });
    this.textVitesse = this.add.text(1050, 90, '', { font: '900 35px Roboto', fill: '#ffffff' });
    this.vies = this.data.set('vies', 3);
    this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });
    this.minute = 0;
    this.seconde = 0;

    this.initAnims();
    this.initColliders();
    this.handleInputs();
    this.handleScore();
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

  handleScore() {
    this.time.addEvent({
      delay: 1000 / 10,
      loop: true,
      callbackScope: this,
      callback: () => {
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

        this.scoreText.setText('Score: ' + score.join(''));
      }
    })
  }

  handleInputs() {

    let jumpTime = 0;
    let downTime = 0;
    let currentGameSpeed = 0;

    this.input.keyboard.on('keydown_ESC', function () {
      if (this.anims.paused) {
        this.anims.resumeAll();
        // this.gameSpeed = 6;
        this.gameSpeed = currentGameSpeed;
        this.isGameRunning = true;
        this.timePause = false;
      }
      else {
        this.anims.pauseAll();
        // this.ground.tilePositionX = 0;
        this.isGameRunning = false;
        // this.gameSpeed = 0;
        currentGameSpeed = this.gameSpeed;
        this.gameSpeed = 0;
        this.timePause = true;

      }
    }, this);

    this.input.keyboard.on('keydown_SPACE', () => {
      if (!jumpTime == 0) { return; }
      this.player.body.height = 92;
      this.player.body.offset.y = 0;
      this.player.setVelocityY(-2600);
      jumpTime = 1;
    })

    this.input.keyboard.on('keyup_SPACE', () => {
      jumpTime = 0;
    })

    this.input.keyboard.on('keydown_DOWN', () => {
      if (!downTime == 0) { return; }
      this.player.body.height = 58;
      this.player.body.offset.y = 34;
      downTime = 1;
      setTimeout(() => { this.player.body.height = 92; this.player.body.offset.y = 0 }, 100);
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
      console.log(obsticle);
    } else {
      obsticle = this.obsticles.create(this.game.config.width + distance, this.game.config.height - enemyHeight[Math.floor(Math.random() * 2)], `enemy${obsticleNum}`);
      obsticle.play(`enemy${obsticleNum}`, 1);
      obsticle.body.height = 70;
      obsticle.body.width = 60;
    }
    obsticle.setImmovable();
  }

  onEvent() {
    !this.timePause ? this.seconde++ : 0;

    // if (this.loopSeconde() == true) { this.gameSpeed++ };

    if (this.seconde > 59) {
      this.minute++;
      this.seconde = 0;
    }
  }

  update(time, delta) {

    this.ground.tilePositionX += this.gameSpeed;
    Phaser.Actions.IncX(this.obsticles.getChildren(), -this.gameSpeed);

    this.timeText.setText('Temps : ' + this.minute + " : " + this.seconde);
    this.textVies.setText('Vies : ' + this.data.get('vies'));
    this.textVitesse.setText('Vitesse : ' + Math.trunc(this.gameSpeed));

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
        obsticle.destroy();
      } else if (!this.player.body.offset.y == 0 && obsticle.y == 600) {
        obsticle.destroy();
      }
    }

    if (this.player.body.onFloor() == false) {
      this.player.anims.play('jump', true);
    } else {
      this.player.body.height <= 58 ?
        this.player.anims.play('down', true) :
        this.player.anims.play('running', true);
    }
  }
}

export default PlayScene;
