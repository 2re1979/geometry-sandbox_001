import { WebGLRenderer } from "three";
import { LinearToneMapping, PCFSoftShadowMap } from "three";

export function setupWebGLRenderer(width, height){
  const renderer = new WebGLRenderer({
    antialias: true,
    // preserveDrawingBuffer: true,
    alpha: true
  });

  renderer.toneMapping = LinearToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.setSize(width, height);
  renderer.setClearColor(0xffffff);
  renderer.localClippingEnabled = true;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;

  window.innerWidth <= 1920
    ? renderer.setPixelRatio(2)
    : renderer.setPixelRatio(1);
  
  return renderer;
}