import { Shape, ExtrudeGeometry, Mesh } from "three";
import { profileTestMaterial } from "../materials";

// parameters
const extrusionDepthExample = 600;

function createBottomFrameProfile() {
  const shape = new Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0, 34);
  shape.lineTo(67, 40.4);
  shape.lineTo(67, 0);
  shape.lineTo(92.8, 0);
  shape.lineTo(92.8, -14.8);
  shape.lineTo(87.8, -15.6);
  shape.lineTo(87.8, -73.3);
  shape.lineTo(77, -73.3);
  shape.lineTo(68, -29);
  shape.lineTo(23.8, -17.2);
  shape.lineTo(23.8, -11.4);
  shape.lineTo(0, 0);

  return shape;
}

function createSideFrameProfile() {
  const shape = new Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0, 28.9);
  shape.lineTo(62.7, 35.5);
  shape.lineTo(62.7, 18.5);
  shape.lineTo(92.8, 18.5);
  shape.lineTo(92.8, 0);
  shape.lineTo(0, 0);

  return shape;
}


export function createExtrudedProfile() {

  const shape = createBottomFrameProfile();
  // const shape = createSideFrameProfile();

  const extrudeSettings = {
    depth: extrusionDepthExample,
    bevelEnabled: false
  };

  const geometry = new ExtrudeGeometry(shape, extrudeSettings);
  const material = profileTestMaterial;
  
  const mesh = new Mesh(geometry, material);

  return mesh;
}