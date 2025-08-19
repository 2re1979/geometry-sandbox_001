import { Shape, ExtrudeGeometry, Mesh } from "three";
import { profileTestMaterial } from "../materials";

// parameters
const extrusionDepthExample = 10;

function createProfileP1749() {
  const shape = new Shape();
  shape.moveTo(0, 0);
  shape.lineTo(3, 0);
  shape.lineTo(3, 14);
  shape.lineTo(17, 14);
  shape.lineTo(17, 0);
  shape.lineTo(20, 0);
  shape.lineTo(20, 30);
  shape.lineTo(18, 30);
  shape.lineTo(18, 17);
  shape.lineTo(2, 17);
  shape.lineTo(2, 30);
  shape.lineTo(0, 30);
  shape.lineTo(0, 0);

  return shape;
}

function createProfileP1609() {
  const shape = new Shape();
  shape.moveTo(0, 0);
  shape.lineTo(3, 0);
  shape.lineTo(3, 14);
  shape.lineTo(17, 14);
  shape.lineTo(17, 0);
  shape.lineTo(20, 0);
  shape.lineTo(20, 50);
  shape.lineTo(18, 50);
  shape.lineTo(18, 17);
  shape.lineTo(2, 17);
  shape.lineTo(2, 50);
  shape.lineTo(0, 50);
  shape.lineTo(0, 0);

  return shape;
}

export function createExtrudedProfile() {
  //const shape = createProfileP1749();
  const shape = createProfileP1609();

  const extrudeSettings = {
    depth: extrusionDepthExample,
    bevelEnabled: false,
  };

  const geometry = new ExtrudeGeometry(shape, extrudeSettings);
  const material = profileTestMaterial;

  const mesh = new Mesh(geometry, material);

  return mesh;
}
