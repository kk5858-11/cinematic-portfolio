import * as THREE from "three";
import { createShaderMaterial } from "./create-shader-material";

export type AuroraUniforms = {
  uTime: { value: number };
  uMouse: { value: THREE.Vector2 };
  uResolution: { value: THREE.Vector2 };
  uIntensity: { value: number };
  uScroll: { value: number };
};

/** Aurora fullscreen shader — via shader registry */
export function createAuroraMaterial(): THREE.ShaderMaterial {
  return createShaderMaterial("aurora");
}
