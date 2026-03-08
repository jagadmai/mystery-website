class MenuScene extends Phaser.Scene{

constructor(){
super("menu")
}

create(){

this.add.text(350,200,"MysteryLab",{fontSize:"40px",color:"#ffffff"})

const start = this.add.text(420,300,"Start Case",{fontSize:"28px",color:"#00ffff"})
.setInteractive()

start.on("pointerdown",()=>{

this.scene.start("case1")

})

}

}