import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import testcard from '../assets/testcard.jpg';

/*
  Main Three.js code. A rotating cube with orbit controls and stats. 
  This is a vanilla JS ES6 module, as used in the threejs examples. 
  Handles resizing to containerElement, init and disposal.
  Assets can be loaded via imports (see testcard.jpg above).
*/

console.log('THREE version', THREE.REVISION);

let scene,
  camera,
  renderer,
  cube,
  controls,
  stats,
  containerEl,
  raf,
  resizeObs,
  material;

let speed = 0;

export function init(canvas, _containerEl) {
  console.log('threejs init');
  containerEl = _containerEl;
  stats = new Stats();
  containerEl.appendChild(stats.dom);
  stats.dom.style.position = 'absolute';

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 3;

  renderer = new THREE.WebGLRenderer({ canvas: canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(testcard),
  });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  controls = new OrbitControls(camera, containerEl);

  //watch for size change of container element
  resizeObs = new ResizeObserver(onResize);
  resizeObs.observe(containerEl);

  update();
}

function update() {
  raf = requestAnimationFrame(update);
  cube.rotation.x += speed / 40;
  cube.rotation.y += speed / 40;
  renderer.render(scene, camera);
  stats.update();
  controls.update();
}

function onResize() {
  console.log('threejs onResize');
  let w = containerEl.offsetWidth;
  let h = containerEl.offsetHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.render(scene, camera);
}

export function dispose() {
  console.log('threejs dispose');
  //clean up
  cancelAnimationFrame(raf);
  resizeObs.disconnect();
  controls.dispose();
  material.dispose();
  cube.geometry.dispose();
  resizeObs = null;
  scene = null;
  camera = null;
  controls = null;
  renderer = null;
  stats = null;
  material = null;
}

export function setProps(props) {
  speed = props.speed;
  cube.scale.setScalar(props.scale);
}
