class MenuScene extends Phaser.Scene{

constructor(){

super("menu")

}

create(){

this.add.text(400,200,"MysteryLab",{fontSize:"40px",fill:"#fff"})

const start = this.add.text(430,300,"Start Case",{fontSize:"24px",fill:"#0ff"})
.setInteractive()

start.on("pointerdown",()=>{

this.scene.start("case1")

})

}

}