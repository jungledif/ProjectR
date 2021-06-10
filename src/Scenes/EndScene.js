import {CST} from "../CST";

export class EndScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.ENDING
        })
    }
    init(data){
        this.score = data;
       
    }
    create () {
       
        this.add.image(0,0, "end_bg").setOrigin(0);
        
       let retryButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "retry_button");
       let backMenuButton = this.add.image(this.game.renderer.width /2, this.game.renderer.height / 2 + 100, "back_menu_button").setDepth(1);
       let music = this.sound.add("end_music", {
           loop: true
       })
       
       music.play();

       let hoverSprite = this.add.sprite(100, 100, "eric").setDepth(1);
       //hoverSprite.setScale(2);
       hoverSprite.setVisible(false);
   
       this.anims.create({
           key: "walk",
           frameRate: 12,
           repeat: -1, //repeat forever
           frames: this.anims.generateFrameNumbers("eric",{
               frames: [0, 1, 2, 3, 4, 5, 6, 7]
           })
       })

    this.scoreText = this.add.text(1050, 0, '', { fill: "#ffffff", font: '900 35px Roboto' });
    this.scoreText.setText('Score: ' + this.score);

    this.soundbutton = this.sound.add("soundbutton");
    
    // fonction sur les buttons

    // PointerEvents:
    // pointerover - hovering
    // pointerout - not hovering
    // pointerup - click and release
    // pointerdown - just click

    retryButton.setInteractive();

    retryButton.on("pointerover", ()=>{
        hoverSprite.setVisible(true);
        hoverSprite.play("walk");
        hoverSprite.x = retryButton.x - retryButton.width;
        hoverSprite.y = retryButton.y;
    })
    retryButton.on("pointerout", ()=>{
        hoverSprite.setVisible(false);
    })
    retryButton.on("pointerup", ()=>{
        music.stop();
        this.scene.stop();
        this.scene.start(CST.SCENES.PRELOAD);
        
    })

    backMenuButton.setInteractive();
    backMenuButton.on("pointerover", ()=>{
        hoverSprite.setVisible(true);
        hoverSprite.play("walk");
        hoverSprite.x = backMenuButton.x - backMenuButton.width;
        hoverSprite.y = backMenuButton.y;
        
    })
    backMenuButton.on("pointerout", ()=>{
        hoverSprite.setVisible(false);
    })
    backMenuButton.on("pointerup", ()=>{
        music.stop();
        this.soundbutton.play();
        this.scene.stop();
        this.scene.start(CST.SCENES.LOAD);
        
    })
    
}

    };
    