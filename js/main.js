var scene, camera, renderer;
var player;

var walkF = false;
var walkB = false;
var walkL = false;
var walkR = false;
var jump = false;

var playerPitch = 0;
var playerYaw = 0;

var lastTick = performance.now();
var thisTick;
var deltaTime;

const EYEHEIGHT = 1.;
const MOVESPEED = 0.002;

var init = function() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.x = 0;
    camera.position.y = EYEHEIGHT;
    camera.position.z = 4;

    window.addEventListener('resize', onWindowResize, false);

    tick();
}

var tick = function () {
    requestAnimationFrame(tick);

    thisTick = performance.now();
    deltaTime = thisTick - lastTick;
    lastTick = thisTick;

    handleInputs();

    renderer.render(scene, camera);
};

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
