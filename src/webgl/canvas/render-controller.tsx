"use client";

import { useFrame, useThree } from "@react-three/fiber";
import type { FrameloopMode } from "@/webgl/types";

type RenderControllerProps = {
  active: boolean;
  mode: FrameloopMode;
};

/**
 * Demand-mode invalidation — keeps GPU active only while scene is visible.
 */
export function RenderController({ active, mode }: RenderControllerProps) {
  const invalidate = useThree((s) => s.invalidate);

  useFrame(() => {
    if (!active) return;
    if (mode === "demand" || mode === "always") {
      invalidate();
    }
  });

  return null;
}
