import '../styles/styles.scss';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {
  PMREMGenerator,
  Scene,
} from 'three';
import { setupLights } from './scene/lights';
import { loadAssets } from './scene/load-assets';
import { setupWebGLRenderer } from './scene/renderer';
import { setupMainCamera } from './scene/cameras';
import { addAxesHelper } from './scene/scene-helpers';
import { createAssembly } from './3d-geometry/3d-assembly/assembly-example';
import { downloadOBJ } from './scene/download-obj';

let renderer, scene, camera;

function initialize(assets) {

  const container3d = document.querySelector('.container3d');
  const width = container3d.clientWidth;
  const height = container3d.clientHeight;
  const aspect = width / height;
  
  // -------------------- Renderer
  renderer = setupWebGLRenderer(width, height);
  container3d.appendChild(renderer.domElement);

  // -------------------- Scene
  scene = new Scene();
  // Optional: HDRI lighting
  // scene.environment = new PMREMGenerator(renderer).fromCubemap(assets.get('hdr')).texture;

  // -------------------- Camera & controls
  camera = setupMainCamera(aspect);
  scene.add(camera);
  const controls = new OrbitControls(camera, renderer.domElement);

  // -------------------- Lights & helpers
  setupLights(scene);
  const axesHelper = addAxesHelper(scene);

  // -------------------- Create geometry
  function generateSolution() {
    const options3d = {
      scene: scene,
      camera: camera,
      controls: controls,
      axesHelper: axesHelper,
      frameWidth: 2500,
      frameHeight: 2200,
      profileSize: 60,
    };

    createAssembly(options3d);
  }

  generateSolution();

  // -------------------- Download button
  const downloadButton = document.querySelector('#download-obj-button');
  downloadButton.addEventListener('click', () => downloadOBJ(scene));

  // -------------------- Resize window listener
  window.addEventListener('resize', (function () {
    let id = 0

    function handleResize() {
      const width = container3d.clientWidth;
      const height = container3d.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      id = 0
    }

    return function onResize(event) {
      if (id === 0) {
        id = setTimeout(handleResize, 66, event);
      }
    }
  })());

  // -------------------- Live camera
  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
  render();
}

loadAssets().then(initialize).catch(console.error);