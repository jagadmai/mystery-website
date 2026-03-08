const config = {

type: Phaser.AUTO,

width: 1000,

height: 600,

backgroundColor: "#111",

scene: [PreloadScene, MenuScene, Case1Scene]

}

const game = new Phaser.Game(config)