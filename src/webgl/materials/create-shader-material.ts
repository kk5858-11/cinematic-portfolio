import * as THREE from "three";
import { getShaderDefinition } from "@/webgl/shaders/registry";
import type { ShaderId } from "@/webgl/types";

/**
 * Create a ShaderMaterial from the central registry.
 * Clones default uniforms so each instance is independent.
 */
export function createShaderMaterial(shaderId: ShaderId): THREE.ShaderMaterial {
  const def = getShaderDefinition(shaderId);
  const uniforms: Record<string, THREE.IUniform> = {};

  for (const [key, value] of Object.entries(def.defaultUniforms)) {
    if (value instanceof THREE.Vector2) {
      uniforms[key] = { value: value.clone() };
    } else if (value instanceof THREE.Vector3) {
      uniforms[key] = { value: value.clone() };
    } else if (value instanceof THREE.Color) {
      uniforms[key] = { value: value.clone() };
    } else {
      uniforms[key] = { value };
    }
  }

  return new THREE.ShaderMaterial({
    vertexShader: def.vertex,
    fragmentShader: def.fragment,
    uniforms,
    ...def.materialOptions,
  });
}
