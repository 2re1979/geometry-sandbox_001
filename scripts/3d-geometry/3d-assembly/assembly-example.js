import { Group } from "three";
import { profileXXXXX } from "../3d-parts/extruded-profile-example";

//This is file where all parts are being assembled into one group
export function createAssembly (opt) {
  const { scene, camera, controls } = opt;

  //create assembly of all elements
  const assemblyGroup = new Group();

  const profileLength = 10;
  
  //create geometry
  const extrudedProfile = profileXXXXX(profileLength);

  //possible to add multiple geometries to assembly group
  assemblyGroup.add(
    extrudedProfile,
  )

  scene.add(assemblyGroup);

  return assemblyGroup;
}
