const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)


// floor

const floorGeometry = new THREE.PlaneGeometry(20,20)

const floorMaterial = new THREE.MeshBasicMaterial({
color:0x333333,
side:THREE.DoubleSide
})

const floor = new THREE.Mesh(floorGeometry,floorMaterial)

floor.rotation.x = Math.PI/2

scene.add(floor)


// walls

const wallGeometry = new THREE.BoxGeometry(20,10,1)

const wallMaterial = new THREE.MeshBasicMaterial({color:0x555555})

const backWall = new THREE.Mesh(wallGeometry,wallMaterial)

backWall.position.z = -10
backWall.position.y = 5

scene.add(backWall)


// light

const light = new THREE.PointLight(0xffffff,1)

light.position.set(5,10,5)

scene.add(light)


// camera position

camera.position.y = 2
camera.position.z = 5


// movement

document.addEventListener("keydown",(e)=>{

if(e.key==="w") camera.position.z -=0.2
if(e.key==="s") camera.position.z +=0.2
if(e.key==="a") camera.position.x -=0.2
if(e.key==="d") camera.position.x +=0.2

})


// game loop

function animate(){

requestAnimationFrame(animate)

renderer.render(scene,camera)

}

animate()