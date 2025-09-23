import { Shape, ExtrudeGeometry, Mesh, Group } from "three";
import { profileTestMaterial } from "../materials";

// parameters
const defaultProfileMaterial = profileTestMaterial

function createProfileP1827_1829_1830() {
  const shape = new Shape()
   .moveTo(0, 0)
    .lineTo(56, 0)
    .lineTo(56, -16.5)
    .lineTo(42, -16.5)
    .lineTo(42, -14.5)
    .lineTo(53.5, -14.5)
    .lineTo(53.5, -3)
    .lineTo(19, -3)
    .lineTo(19, -37.8)
    .lineTo(56, -37.8)
    .lineTo(56, -40)
    .lineTo(16, -40)
    .lineTo(16, -4)
    .lineTo(0, -4)
    .lineTo(0, 0);

  return shape;
}

export function profileXXXXX(profileLength) {
  const shape = createProfileP1827_1829_1830();

  const extrudeSettings = {
    depth: profileLength,
    bevelEnabled: false,
  };

  const geometry = new ExtrudeGeometry(shape, extrudeSettings);
  const material = defaultProfileMaterial;

  const mesh = new Mesh(geometry, material);
  mesh.position.set(61, 0, 0);
  mesh.rotateX(Math.PI / 2);
  mesh.rotateZ(Math.PI);
  
  const meshgroup = new Group
  meshgroup.add(mesh)

  return meshgroup;
}
