"use client";

import dynamic from "next/dynamic";
import { useWebGLCapability, useSceneVisibility } from "@/webgl/hooks";
import { tierMeetsMinimum } from "@/webgl/config";
import { getSceneDefinition } from "@/webgl/core/scene-registry";
import type { LazyWebGLProps, WebGLTier } from "@/webgl/types";

const SceneCanvas = dynamic(
  () => import("./scene-canvas").then((m) => m.SceneCanvas),
  { ssr: false, loading: () => null },
);

/**
 * Lazy-loaded WebGL scene — intersection-gated mount + device tier.
 */
export function LazyWebGL<T extends Record<string, unknown>>({
  sceneId,
  sceneProps,
  className,
  rootMargin = "120px",
  /** Hero / above-fold — mount immediately, skip intersection gate */
  eager = false,
}: LazyWebGLProps<T>) {
  const { tier, shouldRender, settings } = useWebGLCapability();
  const scene = getSceneDefinition(sceneId);
  const { ref, isActive } = useSceneVisibility<HTMLDivElement>({
    rootMargin,
    initialVisible: eager,
  });

  const tierOk =
    shouldRender &&
    settings &&
    tier !== "static" &&
    tierMeetsMinimum(tier, scene.minTier);

  const mountCanvas = tierOk && (eager || isActive);

  return (
    <div ref={ref} className={className ?? "absolute inset-0"}>
      {mountCanvas ? (
        <SceneCanvas
          sceneId={sceneId}
          sceneProps={sceneProps}
          tier={tier as Exclude<WebGLTier, "static">}
          visible={isActive}
        />
      ) : null}
    </div>
  );
}
