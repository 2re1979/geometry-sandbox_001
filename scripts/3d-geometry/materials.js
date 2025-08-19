import {
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  DoubleSide,
  Color,
  MeshBasicMaterial,
} from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { EquirectangularReflectionMapping } from 'three';

const envInt = 0.1;
const colors = {
  windowFrameColorAluminiumGrey:   '#4f5250',
  windowFrameColorAluminiumBlack:   '#000000',
  windowFrameColorCooper:   '#bb502e',
  windowFrameColorTitaniumzinc:   '#c0c0c0',
  interiorColorPineClear: '#e0890d',
  interiorColorPineWhite: '#ffffff',
  interiorColorPoly:'#ffffff',
  moduleWindowMColor:  `#C0C0C0`,
  apronMaterialColor: `#000000`,
  roofMaterialColor: '#57554b',
}

// Individual HDRI for Glass
const loader = new RGBELoader();
loader.load('/threejs/hdri/pngtree-degree-panoramic-hdri-sky-with-seamless-zenith-and-clouds-perfect-for-picture-image_5590325 e3.hdr', (texture) => {
  texture.mapping = EquirectangularReflectionMapping;

  glassDoorMaterial.envMap = texture;
  glassDoorMaterial.needsUpdate = true;
});

//-------------------------------Exterior Material---------------------------

const aluminiumBlackMaterial = new MeshStandardMaterial({
  color: colors.windowFrameColorAluminiumBlack,
  side: DoubleSide,
  //metalness: 0.2,
  //roughness: .3,
  envMapIntensity: envInt,
});
const aluminiumGreyMaterial = new MeshStandardMaterial({
  color: colors.windowFrameColorAluminiumGrey,
  side: DoubleSide,
  //metalness: 0.2,
  //roughness: .3,
  envMapIntensity: envInt,
});
const cooperMaterial = new MeshStandardMaterial({
  color: colors.windowFrameColorCooper,
  side: DoubleSide,
  //metalness: 0.2,
  //roughness: .3,
  envMapIntensity: envInt,
});
const titaniumzincMaterial = new MeshStandardMaterial({
  color: colors.windowFrameColorTitaniumzinc,
  side: DoubleSide,
  //metalness: 0.2,
  //roughness: .3,
  envMapIntensity: envInt,
});

//---------------------InteriorMaterial---------------------

const pineWoodClearMaterial = new MeshStandardMaterial({
  color: colors.interiorColorPineClear,
  side: DoubleSide,
  envMapIntensity: envInt,
  // wireframe: true
});

const pineWoodWhiteMaterial = new MeshStandardMaterial({
  color: colors.interiorColorPineWhite,
  side: DoubleSide,
  envMapIntensity: envInt,
  // wireframe: true
});

const poly = new MeshStandardMaterial({
  color: colors.interiorColorPoly,
  side: DoubleSide,
  envMapIntensity: envInt,
  // wireframe: true
});

const chainMaterial = new MeshStandardMaterial({
  color: colors.windowFrameColorAluminiumGrey,
  side: DoubleSide,
  // wireframe: true,
  metalness: 0.2,
  roughness: 0.3,
  envMapIntensity: envInt,
});

const glassMaterial = new MeshPhysicalMaterial({
  color: colors.moduleWindowMColor,
  transmission: 1,
  opacity: 1,
  metalness: 0.2,
  roughness: 0,
  ior: 1.5,
  thickness: 0.5,
  specularIntensity: 1,
  envMapIntensity: envInt,
  // side: DoubleSide,
  // wireframe: true
});

const apronMaterial = new MeshStandardMaterial({
  color: colors.apronMaterialColor,
  side: DoubleSide,
  envMapIntensity: envInt,
});

//----------------------Doors---------------------------------------

const glassDoorMaterial = new MeshPhysicalMaterial({
  color: new Color(1, 1, 1),
  transmission: 1,
  roughness: 0.0,
  opacity: 0.8,
  metalness: 0.2,
  roughness: 0,
  ior: 1.5,
  thickness: 0.5,
  specularIntensity: 1,
  envMapIntensity: 0.67,
  // envMapIntensity: 10.87,
  // side: DoubleSide,
  // wireframe: true
});

const frostedGlassDoorMaterial = new MeshPhysicalMaterial({
  color: new Color(1, 1, 1),
  // transparent: true,
  transmission: 1.0,
  roughness: 0.2,
  opacity: 0.7,
  metalness: 0.2,
  ior: 1.5,
  thickness: 0.5,
  specularIntensity: 1,
  envMapIntensity: envInt,
  // side: DoubleSide,
  // wireframe: true
});

const wallMaterial = new MeshStandardMaterial({
  color: new Color(245 / 255, 245 / 255, 245 / 255),
  side: DoubleSide,
  // wireframe: true,
  // metalness: 0.1,
  roughness: 1.0,
  envMapIntensity: envInt,
});

//----------------------Overhead Light---------------------------------------
const skylightMaterial = new MeshStandardMaterial({
  color: new Color(4, 1, 1),
  side: DoubleSide,
  // wireframe: true,
  // metalness: 0.1,
  roughness: 0.75,
  envMapIntensity: envInt,
});

const tempMaterial = new MeshStandardMaterial({
  color: new Color(5, 3, 1),
  side: DoubleSide,
  // wireframe: true,
  // metalness: 0.1,
  roughness: 0.75,
  envMapIntensity: envInt,
});

//----------------------Roof---------------------------------------
const roofMaterial = new MeshStandardMaterial({
  color: colors.roofMaterialColor,
  side: DoubleSide,
  envMapIntensity: envInt,
});

//----------------------Person 3d---------------------------------------
// const personMaterial = new MeshStandardMaterial({
//   color: new Color(5.95, 5.95, 5.95),
//   // transparent: true,
//   // opacity: 0.5,
//   roughness: 10.1,
//   metalness: 0.0,
//   specularIntensity: 0.0,
//   envMapInten
//   envMapIntensity: 0.0,
// })
const personMaterial = new MeshBasicMaterial({
  color: new Color(0.9, 0.9, 0.92),
});

const profileTestMaterial = new MeshStandardMaterial({
color: colors.windowFrameColorTitaniumzinc,
  side: DoubleSide,
  // metalness: 0.1,
  roughness: 0.75,
  envMapIntensity: envInt,
});

export {
  pineWoodClearMaterial,
  pineWoodWhiteMaterial,
  poly,
  chainMaterial,
  glassMaterial,
  apronMaterial,
  aluminiumBlackMaterial,
  aluminiumGreyMaterial,
  cooperMaterial,
  titaniumzincMaterial,
  roofMaterial,
  glassDoorMaterial,
  frostedGlassDoorMaterial,
  wallMaterial,
  skylightMaterial,
  personMaterial,
  tempMaterial,
  profileTestMaterial
};
