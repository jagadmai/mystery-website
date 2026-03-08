// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

// Renderer
const renderer = new THREE.WebGLRenderer({antialias:true})

renderer.setSize(window.innerWidth,window.innerHeight)

document.body.appendChild(renderer.domElement)


// FLOOR

const floorGeometry = new THREE.PlaneGeometry(40,40)

const floorMaterial = new THREE.MeshStandardMaterial({
color:0x222222
})

const floor = new THREE.Mesh(floorGeometry,floorMaterial)

floor.rotation.x = -Math.PI/2

scene.add(floor)


// WALLS

const wallMaterial = new THREE.MeshStandardMaterial({
color:0x444444
})

function createWall(x,z,rotation){

const wallGeometry = new THREE.BoxGeometry(40,10,1)

const wall = new THREE.Mesh(wallGeometry,wallMaterial)

wall.position.set(x,5,z)

wall.rotation.y = rotation

scene.add(wall)

}

createWall(0,-20,0)
createWall(0,20,0)
createWall(-20,0,Math.PI/2)
createWall(20,0,Math.PI/2)


// LIGHTING

const light = new THREE.PointLight(0xffffff,2)

light.position.set(0,8,0)

scene.add(light)

const ambient = new THREE.AmbientLight(0x404040)

scene.add(ambient)


// CAMERA START POSITION

camera.position.y = 2
camera.position.z = 5


// MOVEMENT SYSTEM

const keys = {}

document.addEventListener("keydown",(e)=>{
keys[e.key] = true
})

document.addEventListener("keyup",(e)=>{
keys[e.key] = false
})


// GAME LOOP

function animate(){

requestAnimationFrame(animate)

const speed = 0.1

// Arrow keys movement

if(keys["ArrowUp"]){

camera.position.z -= speed

}

if(keys["ArrowDown"]){

camera.position.z += speed

}

if(keys["ArrowLeft"]){

camera.position.x -= speed

}

if(keys["ArrowRight"]){

camera.position.x += speed

}

renderer.render(scene,camera)

}

animate()


// RESIZE FIX

window.addEventListener("resize",()=>{

camera.aspect = window.innerWidth/window.innerHeight

camera.updateProjectionMatrix()

renderer.setSize(window.innerWidth,window.innerHeight)

})