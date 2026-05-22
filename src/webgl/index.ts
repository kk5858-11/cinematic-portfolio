/**
 * WebGL / R3F System — unified public API
 */

export { WEBGL, WEBGL_BACKGROUND, qualityPresets, getQualitySettings, tierMeetsMinimum, resolveFrameloop } from "./config";
export type * from "./types";

/* Core */
export { sceneRegistry, getSceneDefinition } from "./core/scene-registry";
export { shaderRegistry, getShaderDefinition } from "./core/shader-registry";
export {
  disposeMaterial,
  disposeGeometry,
  disposeObject3D,
  disposeShaderMaterial,
} from "./core/dispose";

/* Shaders & materials */
export { createShaderMaterial } from "./materials/create-shader-material";
export { createAuroraMaterial } from "./materials/aurora-material";

/* Canvas */
export { SceneCanvas } from "./canvas/scene-canvas";
export { LazyWebGL } from "./canvas/lazy-webgl";
export { HeroCanvas } from "./hero-canvas";

/* Scenes */
export { HeroScene } from "./scenes/hero-scene";

/* Hooks */
export {
  useWebGLCapability,
  useSceneVisibility,
  type WebGLCapability,
} from "./hooks";
