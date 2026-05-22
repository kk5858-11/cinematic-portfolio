import type { SceneDefinition, SceneId } from "@/webgl/types";
import { HeroScene } from "@/webgl/scenes/hero-scene";
import { WEBGL_BACKGROUND } from "@/webgl/config";

export const sceneRegistry: Record<SceneId, SceneDefinition> = {
  hero: {
    id: "hero",
    minTier: "low",
    component: HeroScene as SceneDefinition["component"],
    camera: {
      position: [0, 0, 5],
      fov: 50,
      near: 0.1,
      far: 30,
    },
    background: WEBGL_BACKGROUND,
  },
};

export function getSceneDefinition(id: SceneId): SceneDefinition {
  return sceneRegistry[id];
}
