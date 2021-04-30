import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

import testcard from './assets/testcard.jpg';

/*

  Main Three.js code

	A rotating cube with orbit controls and stats. This is a vanilla JS ES6 module, 
  as used in the threejs examples. threejs loaded via NPM.

  Assets can be loaded via imports (see testcard above), or directly from 
  public folder by using something like: process.env.PUBLIC_URL + '/assets/testcard.jpg'
  https://create-react-app.dev/docs/using-the-public-folder/
  
*/

console.log('THREE version', THREE.REVISION);

let scene, camera, renderer, cube, controls, stats, domElement, raf;

export function init() {
  console.log('threejs init');
  domElement = document.querySelector('.webgl');
  stats = new Stats();
  domElement.appendChild(stats.dom);
  stats.dom.style.position = 'absolute';

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 3;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  domElement.appendChild(renderer.domElement);

  let geometry = new THREE.BoxGeometry(1, 1, 1);
  let material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(testcard),
  });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  controls = new OrbitControls(camera, domElement);

  //resize
  window.addEventListener('resize', onResize);
  onResize();
  update();
}

function update() {
  //console.log('threejs update');
  raf = requestAnimationFrame(update);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
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
  window.removeEventListener('resize', onResize, false);
  cancelAnimationFrame(raf);
  controls.dispose();

  //canvas dom element is automatically removed during umnmount, however
  //this is required to prevent hot-reloads from spawning multiple renderers
  domElement.removeChild(renderer.domElement);

  scene = null;
  camera = null;
  controls = null;
  renderer = null;
  stats = null;
}
