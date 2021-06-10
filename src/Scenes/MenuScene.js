import {CST} from "../CST";

export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.MENU
        })
    }
    init(){
       
    }
    create () {
        // this.add.image(this.game.renderer.width / 2.35, this.game.renderer.height * 0.20, "logo").setDepth(1);
        this.add.image(0,0, "title_bg").setOrigin(0);
        
        // Audio menu 
       let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 1.5+100, "play_button").setDepth(1);
    //    let optionButton = this.add.image(this.game.renderer.width /2, this.game.renderer.height / 1.5 + 100, "options_button").setDepth(1);
       let musicmenu = this.sound.add("title_music", {
           loop: true
       })
    musicmenu.play();

    this.soundbutton = this.sound.add("soundbutton",{
        volume: 0.1
      });

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
    
    // fonction sur les buttons

    // PointerEvents:
    // pointerover - hovering
    // pointerout - not hovering
    // pointerup - click and release
    // pointerdown - just click

    playButton.setInteractive();

    playButton.on("pointerover", ()=>{
        hoverSprite.setVisible(true);
        hoverSprite.play("walk");
        hoverSprite.x = playButton.x - playButton.width;
        hoverSprite.y = playButton.y;
    })
    playButton.on("pointerout", ()=>{
        hoverSprite.setVisible(false);
    })
    playButton.on("pointerup", ()=>{
        musicmenu.stop();
        this.soundbutton.play();
        this.scene.start(CST.SCENES.PRELOAD);
        this.scene.launch();
    })

    // optionButton.setInteractive();
    // optionButton.on("pointerover", ()=>{
    //     hoverSprite.setVisible(true);
    //     hoverSprite.play("walk");
    //     hoverSprite.x = optionButton.x - optionButton.width;
    //     hoverSprite.y = optionButton.y;
        
    // })
    // optionButton.on("pointerout", ()=>{
    //     hoverSprite.setVisible(false);
    // })
    // optionButton.on("pointerup", ()=>{
    //     this.scene.start();
    //     this.scene.launch();
       
    // })

      }

    };
    