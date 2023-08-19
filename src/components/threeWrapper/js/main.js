import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';

/*
  Main Three.js code. A rotating cube with orbit controls and stats. 
  This is a vanilla JS ES6 module, as used in the threejs examples. 
  Assets can be loaded via imports (see testcard.jpg above).
*/

console.log('THREE version', THREE.REVISION);

let scene, camera, renderer, cube, controls, stats, domElement, raf, resizeObs;

let props = { speedX: 0, speedY: 0 };

export function init(canvas) {
  console.log('threejs init');
  domElement = document.querySelector('#canvas-container');
  stats = new Stats();
  domElement.appendChild(stats.dom);
  stats.dom.style.position = 'absolute';

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 3;

  renderer = new THREE.WebGLRenderer({ canvas: canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

  let geometry = new THREE.BoxGeometry(1, 1, 1);
  let material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('/testcard.jpg'),
  });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  controls = new OrbitControls(camera, domElement);

  //watch for size change of domElement
  resizeObs = new ResizeObserver(onResize);
  resizeObs.observe(domElement);

  onResize();
  update();
}

function update() {
  raf = requestAnimationFrame(update);
  cube.rotation.x += Number(props.speedX) / 20;
  cube.rotation.y += Number(props.speedY) / 20;
  renderer.render(scene, camera);
  stats.update();
  controls.update();
}

function onResize() {
  console.log('threejs onResize');
  let w = domElement.offsetWidth;
  let h = domElement.offsetHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  renderer.setPixelRatio(window.devicePixelRatio);
}

export function dispose() {
  console.log('threejs dispose');

  //clean up any event listeners etc
  cancelAnimationFrame(raf);
  controls.dispose();
  resizeObs.disconnect();
  resizeObs = null;
  scene = null;
  camera = null;
  controls = null;
  renderer = null;
  stats = null;
}

export function setProps(_props) {
  //console.log('setProps', _props);
  props = _props;
  cube.scale.setScalar(props.scale);
}
