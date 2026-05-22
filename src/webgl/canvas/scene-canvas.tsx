"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";
import { getSceneDefinition } from "@/webgl/core/scene-registry";
import {
  getQualitySettings,
  resolveFrameloop,
  WEBGL_BACKGROUND,
} from "@/webgl/config";
import type { SceneCanvasProps, WebGLTier } from "@/webgl/types";

export function SceneCanvas<T extends Record<string, unknown>>({
  sceneId,
  sceneProps,
  tier,
  visible = true,
  className,
}: SceneCanvasProps<T>) {
  const scene = getSceneDefinition(sceneId);
  const settings = getQualitySettings(tier as Exclude<WebGLTier, "static">);
  const SceneComponent = scene.component as React.ComponentType<T>;

  const frameloop = useMemo(
    () =>
      settings
        ? resolveFrameloop(visible, settings.frameloop)
        : ("never" as const),
    [visible, settings],
  );

  if (!settings || tier === "static") return null;

  return (
    <Canvas
      className={className ?? "absolute inset-0 h-full w-full"}
      dpr={settings.dpr}
      camera={{
        position: scene.camera.position,
        fov: scene.camera.fov,
        near: scene.camera.near ?? 0.1,
        far: scene.camera.far ?? 30,
      }}
      gl={{
        antialias: settings.antialias,
        alpha: false,
        powerPreference: settings.powerPreference,
        stencil: false,
      }}
      frameloop={frameloop}
      performance={{ min: 0.5, max: 1, debounce: 200 }}
    >
      <Suspense fallback={null}>
        <SceneComponent
          {...sceneProps}
          quality={settings.tier === "low" ? "low" : "high"}
          qualitySettings={settings}
          visible={visible}
        />
      </Suspense>
    </Canvas>
  );
}
