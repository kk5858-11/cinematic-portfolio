import * as THREE from "three";
import type { ShaderDefinition, ShaderId } from "@/webgl/types";
import {
  auroraFragmentShader,
  auroraVertexShader,
} from "@/webgl/shaders/aurora";

export const shaderRegistry: Record<ShaderId, ShaderDefinition> = {
  aurora: {
    id: "aurora",
    vertex: auroraVertexShader,
    fragment: auroraFragmentShader,
    defaultUniforms: {
      uTime: 0,
      uMouse: new THREE.Vector2(0.5, 0.5),
      uResolution: new THREE.Vector2(1, 1),
      uIntensity: 0,
      uScroll: 0,
    },
    materialOptions: {
      depthWrite: false,
      depthTest: false,
    },
  },
};

export function getShaderDefinition(id: ShaderId): ShaderDefinition {
  return shaderRegistry[id];
}
