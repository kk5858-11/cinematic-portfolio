import * as THREE from "three";

/** Dispose material and its textures */
export function disposeMaterial(material: THREE.Material | THREE.Material[]) {
  const materials = Array.isArray(material) ? material : [material];
  for (const mat of materials) {
    for (const key of Object.keys(mat)) {
      const value = (mat as unknown as Record<string, unknown>)[key];
      if (value instanceof THREE.Texture) {
        value.dispose();
      }
    }
    mat.dispose();
  }
}

/** Dispose geometry */
export function disposeGeometry(geometry: THREE.BufferGeometry) {
  geometry.dispose();
}

/** Recursively dispose Object3D subtree */
export function disposeObject3D(root: THREE.Object3D) {
  root.traverse((obj) => {
    if (obj instanceof THREE.Mesh) {
      if (obj.geometry) disposeGeometry(obj.geometry);
      if (obj.material) disposeMaterial(obj.material);
    }
    if (obj instanceof THREE.Points) {
      if (obj.geometry) disposeGeometry(obj.geometry);
      if (obj.material) disposeMaterial(obj.material);
    }
  });
}

/** Dispose ShaderMaterial uniforms that hold GPU resources */
export function disposeShaderMaterial(material: THREE.ShaderMaterial) {
  material.dispose();
}
