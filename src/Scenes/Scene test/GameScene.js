// import {CST} from "../CST";
// export class GameScene extends Phaser.Scene {
//   constructor () {
//     super({
//         key: CST.SCENES.GAME
//     })

//   }
 
//   preload () {
//     // load images
//             this.load.image('sky', './assets/image/sky.png');
//             this.load.image('ground', './assets/image/groundmvp.png');
//             this.load.image('groundinvi', './assets/image/groundinvi.png');
//             this.load.image('background_image', './assets/image/background.png');
//             this.load.spritesheet('perso', './assets/image/perso-run.png', {
//                 frameWidth: 88,
//                 frameHeight: 94
//             });

//             this.load.spritesheet('perso-down', './assets/image/perso-down.png', {
//                 //frameWidth: 118,
//                 //frameHeight: 94
//                 frameWidth: 88,
//                 frameHeight: 94
//             });

//             this.load.spritesheet('perso-up', './assets/image/perso-jump.png', {
//                 frameWidth: 88,
//                 frameHeight: 94
//             });
//   }
 
//   create() {
//     const { height, width } = this.game.config;
//     this.gameSpeed = 6;
//     this.isGameRunning = true;
//     this.respawnTime = 0;
//     this.score = 0;

//     this.add.image(640, 360, 'sky');

//     this.ground = this.add.tileSprite(0, height, width, 170, 'ground').setOrigin(0, 1);
//     this.platforms = this.physics.add.staticGroup();
//     this.platforms.create(400, 690, 'groundinvi').setScale(2).refreshBody();
//     this.platforms.create(400, 245, 'groundinvi').setScale(2).refreshBody();

//     this.player = this.physics.add.sprite(100, 400, 'perso').setCollideWorldBounds(true).setGravityY(5000);

//     this.scoreText = this.add.text(width, 0, "00000", { fill: "#ffffff", font: '900 35px Courier', resolution: 5 })
//       .setOrigin(1, 0)
//       .setAlpha(1);

//     this.highScoreText = this.add.text(0, 0, "00000", { fill: "#535353", font: '900 35px Courier', resolution: 5 })
//       .setOrigin(1, 0)
//       .setAlpha(0);

//     this.obsticles = this.physics.add.group();

//     this.initAnims();
//     this.initColliders();
//     this.handleInputs();
//     this.handleScore();
//   }

//   initColliders() {
//     this.physics.add.collider(this.player, this.platforms);
//   }

//   initAnims() {
//     this.anims.create({
//       key: 'running',
//       frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 15 }),
//       frameRate: 16,
//       repeat: -1
//     });

//     this.anims.create({
//       key: 'down',
//       frames: this.anims.generateFrameNumbers('perso-down', { start: 0, end: 15 }),
//       frameRate: 16,
//       repeat: -1
//     });

//     this.anims.create({
//       key: 'jump',
//       frames: this.anims.generateFrameNumbers('perso-up', { start: 0, end: 8 }),
//       frameRate: 16,
//       repeat: -1
//     });

//     this.anims.create({
//       key: 'enemy1',
//       frames: this.anims.generateFrameNumbers('enemy-1', { start: 0, end: 1 }),
//       frameRate: 10,
//       repeat: -1
//     })

//     this.anims.create({
//       key: 'enemy2',
//       frames: this.anims.generateFrameNumbers('enemy-2', { start: 0, end: 1 }),
//       frameRate: 10,
//       repeat: -1
//     })

//     this.anims.create({
//       key: 'enemy3',
//       frames: this.anims.generateFrameNumbers('enemy-3', { start: 0, end: 1 }),
//       frameRate: 10,
//       repeat: -1
//     })

//     this.anims.create({
//       key: 'enemy--spe1',
//       frames: this.anims.generateFrameNumbers('enemy-spe1', { start: 0, end: 7 }),
//       frameRate: 16,
//       repeat: -1
//     })
//   }

//   handleScore() {
//     this.time.addEvent({
//       delay: 1000 / 10,
//       loop: true,
//       callbackScope: this,
//       callback: () => {
//         if (!this.isGameRunning) { return; }

//         this.score++;
//         this.gameSpeed += 0.01

//         if (this.score % 100 === 0) {
//           //this.reachSound.play();

//           this.tweens.add({
//             targets: this.scoreText,
//             duration: 100,
//             repeat: 3,
//             alpha: 0,
//             yoyo: true
//           })
//         }

//         const score = Array.from(String(this.score), Number);
//         for (let i = 0; i < 5 - String(this.score).length; i++) {
//           score.unshift(0);
//         }

//         this.scoreText.setText(score.join(''));
//       }
//     })
//   }

//   handleInputs() {
//     this.input.keyboard.on('keydown_ESC', function () {
//       if (this.anims.paused) {
//         this.anims.resumeAll();
//         this.gameSpeed = 6;
//       }
//       else {
//         this.anims.pauseAll();
//         this.ground.tilePositionX = 0;
//         this.gameSpeed = 0;
//       }
//     }, this);

//     var jumpTime = 0;
//     var downTime = 0;
    
//     this.input.keyboard.on('keydown_SPACE', () => {
//       if (!jumpTime == 0) { return; }
//       this.player.body.height = 92;
//       this.player.body.offset.y = 0;
//       this.player.setVelocityY(-1600);
//       jumpTime = 1;
//     })

//     this.input.keyboard.on('keyup_SPACE', () => {
//       jumpTime = 0;
//     })

//     this.input.keyboard.on('keydown_DOWN', () => {
//       if (!downTime == 0) { return; }
//       this.player.body.height = 58;
//       this.player.body.offset.y = 34;
//       downTime = 1;
//     })

//     this.input.keyboard.on('keyup_DOWN', () => {
//       downTime = 0;
//     })

//     this.time.addEvent({
//       delay: 150,
//       loop: true,
//       callbackScope: this,
//       callback: () => {
//         if (!this.player.body.height == 58) { return; }
//         this.player.body.height = 92;
//         this.player.body.offset.y = 0;
//       }
//     })
//   }

//   placeObsticle() {
//     const obsticleNum = Math.floor(Math.random() * 4) + 1;
//     const distance = Phaser.Math.Between(600, 900);
//     let obsticle;
//     const enemyHeight = [120, 350];

//     if (obsticleNum > 3) {
//       obsticle = this.obsticles.create(this.game.config.width + distance, this.game.config.height - enemyHeight[Math.floor(Math.random() * 2)], `enemy-spe1`);
//       obsticle.play('enemy--spe1', 1);
//       obsticle.body.height = 110;
//       obsticle.body.width = 85;
//     } else {
//       obsticle = this.obsticles.create(this.game.config.width + distance, this.game.config.height - enemyHeight[Math.floor(Math.random() * 2)], `enemy${obsticleNum}`);
//       obsticle.play(`enemy${obsticleNum}`, 1);
//       obsticle.body.height = 70;
//       obsticle.body.width = 60;
//     }

//     obsticle.setImmovable();
//   }

//   update(time, delta) {

//     this.ground.tilePositionX += this.gameSpeed;
//     Phaser.Actions.IncX(this.obsticles.getChildren(), -this.gameSpeed);

//     this.respawnTime += delta * this.gameSpeed * 0.08;
//     if (this.respawnTime >= 700) {
//       this.placeObsticle();
//       this.respawnTime = 0;
//     }

//     this.obsticles.getChildren().forEach(obsticle => {
//       if (obsticle.getBounds().right < 0) {
//         obsticle.destroy();
//       }
//     })

//     this.obsticles.getChildren().forEach(obsticle => {
//       var player = this.player;
//       this.physics.add.overlap(this.player, this.obsticles, killenemies, null, this);
//     })

//     function killenemies(player, obsticle) {
//       obsticle.destroy();
//     }

//     if (this.player.body.onFloor() == false) {
//       this.player.anims.play('jump', true);
//     } else {
//       this.player.body.height <= 58 ?
//         this.player.anims.play('down', true) :
//         this.player.anims.play('running', true);
//     }
//   }
// }

// // export default GameScene;
