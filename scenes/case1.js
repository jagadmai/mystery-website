class Case1Scene extends Phaser.Scene{

constructor(){

super("case1")

}

create(){

this.add.image(500,300,"room")

this.player = this.add.rectangle(500,300,40,40,0x00ffff)

this.cursors = this.input.keyboard.createCursorKeys()

}

update(){

if(this.cursors.left.isDown){

this.player.x -=3

}

if(this.cursors.right.isDown){

this.player.x +=3

}

if(this.cursors.up.isDown){

this.player.y -=3

}

if(this.cursors.down.isDown){

this.player.y +=3

}

}

}