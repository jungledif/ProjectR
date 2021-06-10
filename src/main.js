/** @type {import("../typings/phaser")}  */

import {LoadScene} from './Scenes/LoadScene';
import {MenuScene} from './Scenes/MenuScene';
import {PreloadScene} from './Scenes/PreloadScene';
import {PlayScene} from './Scenes/PlayScene';
import { EndScene } from './Scenes/EndScene';

const config= {
    type: Phaser.AUTO,
            width: 1280,
            height: 720,
            scale: {
                parent:"gameDiv",
                mode: Phaser.Scale.parent ,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                width:1280,
                height:720
            },     
            transparent: true,
   
    scene: [
        LoadScene, MenuScene, PreloadScene, PlayScene, EndScene       
    ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
   
};

new Phaser.Game(config);
