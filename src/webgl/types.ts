import type { ComponentType } from "react";
import type * as THREE from "three";

/** Device / capability tier */
export type WebGLTier = "high" | "medium" | "low" | "static";

/** Registered scene identifiers */
export type SceneId = "hero";

export type FrameloopMode = "always" | "demand" | "never";

export type ShaderId = "aurora";

export type QualitySettings = {
  tier: WebGLTier;
  dpr: [number, number];
  antialias: boolean;
  particleCount: number;
  particleSize: number;
  frameloop: FrameloopMode;
  powerPreference: WebGLPowerPreference;
  enableFog: boolean;
  enableMouseLight: boolean;
};

export type ShaderUniformSchema = Record<
  string,
  number | THREE.Vector2 | THREE.Vector3 | THREE.Color
>;

export type ShaderDefinition = {
  id: ShaderId;
  vertex: string;
  fragment: string;
  defaultUniforms: ShaderUniformSchema;
  materialOptions?: Partial<THREE.ShaderMaterialParameters>;
};

export type SceneDefinition<TProps = Record<string, unknown>> = {
  id: SceneId;
  /** Minimum tier required (inclusive down to low) */
  minTier: WebGLTier;
  component: ComponentType<TProps>;
  camera: {
    position: [number, number, number];
    fov: number;
    near?: number;
    far?: number;
  };
  background?: string;
};

export type SceneCanvasProps<T extends Record<string, unknown> = Record<string, unknown>> = {
  sceneId: SceneId;
  sceneProps: T;
  tier: WebGLTier;
  visible?: boolean;
  className?: string;
};

export type LazyWebGLProps<T extends Record<string, unknown> = Record<string, unknown>> = {
  sceneId: SceneId;
  sceneProps: T;
  className?: string;
  /** Root element for intersection observer */
  rootMargin?: string;
  /** Mount canvas immediately (hero / above-fold) */
  eager?: boolean;
};
