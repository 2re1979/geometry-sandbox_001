import { PerspectiveCamera } from "three";

export function setupMainCamera(aspect){
  const camera = new PerspectiveCamera(50, aspect, 1, 100000);
  const cameraDist = 2000;
  camera.position.set(
    cameraDist / 2,
    cameraDist / 4,
    cameraDist / 2
  )

  // camera.position.z = 3500;
  // camera.position.z = 6000;
  // camera.position.x = 0;

  return camera;
}