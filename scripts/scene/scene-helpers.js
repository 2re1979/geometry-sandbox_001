import { AxesHelper } from "three";

export function addAxesHelper(scene){
  let axesHelper = new AxesHelper(5000);
  axesHelper.name = 'axesHelper';
  scene.add(axesHelper);

  return axesHelper;
}