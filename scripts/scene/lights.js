import {
  DirectionalLight,
  DirectionalLightHelper,
  SpotLight,
  AmbientLight,
  HemisphereLight
} from 'three';

export function setupLights(scene){
  // const directional = new PointLight(0xffffff, .77, 50000)
  // directional.position.set(4000, 5000, -2000);
  // directional.castShadow = true
  // directional.shadow.mapSize.width = 2048
  // directional.shadow.mapSize.height = 2048
  // directional.shadow.camera.near = 0.5
  // directional.shadow.camera.far = 5000
  // directional.shadow.bias = -0.0002
  // directional.shadow.radius = 2
  // scene.add(directional)

  // new Light Test
  // const directional = new PointLight(0xffffff, 0.32, 30000);
  const directional = new DirectionalLight(0xf0f8ff, 1.37);

  // directional.position.set(2000, 5000, 2000);
  directional.position.set(1000, 4000, 2000);

  // Optimizing shadows
  directional.castShadow = true;
  directional.shadow.mapSize.width = 4096;
  directional.shadow.mapSize.height = 4096;
  // directional.shadow.mapSize.width = 2048;
  // directional.shadow.mapSize.height = 2048;
  directional.shadow.camera.near = 0.5;
  directional.shadow.camera.far = 7000;
  directional.shadow.bias = -0.0008;
  directional.shadow.radius = 2;

  directional.shadow.camera.left = -3000;
  directional.shadow.camera.right = 3000;
  directional.shadow.camera.top = 3000;
  directional.shadow.camera.bottom = -3000;
  
  scene.add(directional);

  // const directionalLightHelper = new DirectionalLightHelper(directional, 500, 0x000000); 
  // scene.add(directionalLightHelper);

  // Point Light (sun)
  const spotLight = new SpotLight(0xffffff, .67);
  spotLight.position.set(2000, 5000, 2000);
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 2048
  spotLight.shadow.mapSize.height = 2048
  spotLight.shadow.camera.near = 0.5
  spotLight.shadow.camera.far = 5000
  spotLight.shadow.bias = -0.0008
  spotLight.shadow.radius = 2

  // scene.add(spotLight);

  // Create a helper for the PointLight
  // const directionalLightHelper = new PointLightHelper(directional, 500); // The second parameter is the size of the helper
  // directionalLightHelper.material.color.set(0xff0000);
  // scene.add(directionalLightHelper);
  const ambientLight = new AmbientLight(0xffffff, 0.75);
  scene.add(ambientLight);

  const hemiLight = new HemisphereLight(0xffeeb1, 0x080820, 0.1);
  scene.add(hemiLight);

  return {
    directional,
    // directionalLightHelper,
    spotLight,
    ambientLight,
    hemiLight
  };
}

export function applyShadows(group) {
  group.traverse(node => {
    if (node.isMesh && node.name !== 'glass') {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });
}