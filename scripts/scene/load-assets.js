import { LoadingManager } from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

export function loadAssets() {
  const assets = new Map();

  const loadingManager = new LoadingManager();

  const rgbeLoader = new RGBELoader(loadingManager);

  return new Promise((resolve, reject) => {
    loadingManager.onError = reject;
    
    loadingManager.onProgress = (item, loaded, total) => {
      if (loaded === total) {
        resolve(assets);
      }
    };

    rgbeLoader
      .load(
        '/threejs/hdri/pngtree-degree-panoramic-hdri-sky-with-seamless-zenith-and-clouds-perfect-for-picture-image_5590325 lessSatur.hdr',
        (t) => {
          assets.set('hdr', t);
        }
      );
  });
}