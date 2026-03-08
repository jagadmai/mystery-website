class PreloadScene extends Phaser.Scene{

constructor(){

super("preload")

}

preload(){

this.load.image("room","assets/images/room.jpg")

this.load.image("detective","assets/images/detective.png")

}

create(){

this.scene.start("menu")

}

}