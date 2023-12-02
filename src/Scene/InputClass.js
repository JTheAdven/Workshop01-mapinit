import Phaser, { Utils } from "phaser";
import * as Initialize from '../utils/Initialize'; 

class InputClass extends Phaser.Scene {
  constructor() {
    super("InputClass");
  }

  preload() {
    Initialize.preload.call(this); //! ignore initialize preload
    //* start coding here

  }

  create() {
    Initialize.create.call(this, false); //! ignore initialize create
    //* start coding here

    //* ufo = this.player
    //* ufo on pointer
    // this.input.on("pointermove", () => {
    //   this.player.x = this.input.x;
    //   this.player.y = this.input.y;
    // });

    //*ufo on click
    // this.input.on("pointerdown", () => {
    //   this.player.setVelocityY(-100);
    // });

    //*ufo on hover
    // this.input.on("pointerover", () => {
    //   this.player.setVelocityY(-100);
    // });

    this.cursor = this.input.keyboard.createCursorKeys();
    this.w = this.input.keyboard.addKey("W");
    this.a = this.input.keyboard.addKey("A");
    this.s = this.input.keyboard.addKey("S");
    this.d = this.input.keyboard.addKey("D");

    this.button.setInteractive();

    this.button.on("pointerdown", () => {
      this.player.setVelocityY(-100);
    });
  }

  update() {
    Initialize.update.call(this); //! ignore initialize update
    //* start coding here

    //* ufo on hold
    if(this.input.activePointer.isDown || this.button.isDown) {
      this.player.setVelocityY(-100);
    }

    //* up,down,left,right
    if(this.cursor.up.isDown || this.w.isDown) {
      this.player.setVelocityY(-100);
    }
    else if(this.cursor.down.isDown || this.s.isDown) {
      this.player.setVelocityY(100);
      if(this.cursor.up.isDown || this.w.isDown) {
        this.player.setVelocityY(-100);
      }
    }
    else if(this.cursor.left.isDown || this.a.isDown) {
      this.player.setVelocityX(-100);
    }
    else if(this.cursor.right.isDown || this.d.isDown) {
      this.player.setVelocityX(100);
    }
    else {
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);
    }
  }
}

export default InputClass;