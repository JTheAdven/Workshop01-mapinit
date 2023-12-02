import 'phaser';
import Phaser from 'phaser';
import GameScene from './scene/GameScene';
import InputClass from './scene/InputClass';
import Event1 from './Scene/Event1';
import Event2 from './Scene/Event2';

const config = {
    type: Phaser.AUTO,
    pixelArt: true,
    roundPixels: true,
    width: 1280,
    height: 720,
    parent: 'content',
    backgroundColor: '#000',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        GameScene,
        // InputClass,
        Event1,
        Event2
    ]
}

let game = new Phaser.Game(config);