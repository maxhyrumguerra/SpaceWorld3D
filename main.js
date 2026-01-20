// Three.js setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5,10,7);
scene.add(light);

// Floor
const floorGeometry = new THREE.BoxGeometry(20, 0.5, 20);
const floorMaterial = new THREE.MeshStandardMaterial({color: 0x333333});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.y = -0.25;
scene.add(floor);

// Player cube
const playerGeometry = new THREE.BoxGeometry(0.5,1,0.5);
const playerMaterial = new THREE.MeshStandardMaterial({color: 0x00ff00});
const player = new THREE.Mesh(playerGeometry, playerMaterial);
player.position.y = 0.5;
scene.add(player);

// Movement controls
const keys = {};
document.addEventListener('keydown', e => keys[e.key.toLowerCase()] = true);
document.addEventListener('keyup', e => keys[e.key.toLowerCase()] = false);

function movePlayer() {
    if(keys['w']) player.position.z -= 0.1;
    if(keys['s']) player.position.z += 0.1;
    if(keys['a']) player.position.x -= 0.1;
    if(keys['d']) player.position.x += 0.1;
}

function animate() {
    requestAnimationFrame(animate);
    movePlayer();
    renderer.render(scene, camera);
}

animate();
