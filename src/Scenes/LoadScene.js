import {CST} from "../CST";

export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.LOAD
        })
    }
    init() {
        this.readyCount = 0;
    }

    preload(){
 // add logo image
 this.load.image("title_bg", "./dist/assets/image/background-menu.png");
 this.load.image("end_bg", "./dist/assets/image/backgroundend.png");

 this.load.audio("title_music", "./dist/assets/audio/menu-music.mp3");
 this.load.audio("end_music", "./dist/assets/audio/failsound.mp3");

 this.load.audio("soundbutton", "./dist/assets/audio/screenbuttons.wav");
 this.load.image('sablier', './dist/assets/image/time-01.svg');
 this.load.image('mort', './dist/assets/image/mort.svg');
    
 this.load.image('vitesse', './dist/assets/image/vitesse.svg');
//  this.load.image("options_button", "./dist/assets/image/options_button1.png");
 this.load.image("play_button", "./dist/assets/image/play_button1.png");
//  this.load.image("logo", "./dist/assets/image/logo.png");
 this.load.image("back_menu_button", "./dist/assets/image/backtomenu.png");
 this.load.image("retry_button", "./dist/assets/image/retry.png");
 this.load.spritesheet("cat", "./dist/assets/sprite/cat.png",{
     frameHeight: 32,
     frameWidth: 32
 });

 this.load.spritesheet("eric", "./dist/assets/sprite/eric.png",{
    frameHeight: 32,
    frameWidth: 29.5
});

this.load.audio("title_music", "./dist/assets/audio/shuinvy-childhood.mp3");
 
// for(let i = 0; i < 100; i++){
//     this.load.spritesheet("cat" + i++,"./dist/assets/sprite/cat.png", {
//         frameWidth: 32,
//         frameHeight: 32
//     })
// }
 let loadingBar = this.add.graphics({
     fillStyle: {
         color: 0xffffff //white
     }
 })

this.load.on("progress", (percent)=>{
    loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
})
// this.load.on("complete", ()=>{
//     console.log("Done");

// })

    }

    create(){
        this.scene.start(CST.SCENES.MENU);
        this.scene.launch()
    }
}