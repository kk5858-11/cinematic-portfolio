"use client";

import type { NormalizedPointer } from "@/hooks/use-mouse-position";
import { LazyWebGL } from "@/webgl/canvas/lazy-webgl";
import type { WebGLTier } from "@/webgl/types";

export type HeroCanvasProps = {
  intensityRef: React.RefObject<number>;
  scrollRef: React.RefObject<number>;
  pointerRef: React.RefObject<NormalizedPointer>;
  /** @deprecated Use capability hook — kept for HeroSection compat */
  quality?: "high" | "low";
};

/**
 * Hero WebGL entry — delegates to unified LazyWebGL + scene registry.
 */
export function HeroCanvas(props: HeroCanvasProps) {
  return (
    <LazyWebGL
      sceneId="hero"
      sceneProps={props}
      eager
      className="absolute inset-0 z-webgl h-full w-full"
    />
  );
}
