"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { disposeObject3D } from "@/webgl/core/dispose";
import { RenderController } from "@/webgl/canvas/render-controller";
import type { FrameloopMode } from "@/webgl/types";

type SceneRootProps = {
  children: React.ReactNode;
  active: boolean;
  frameloop: FrameloopMode;
  background?: string;
};

/**
 * Scene lifecycle root — background, render control, dispose on unmount.
 */
export function SceneRoot({
  children,
  active,
  frameloop,
  background = "#0a0a0b",
}: SceneRootProps) {
  const scene = useThree((s) => s.scene);

  useEffect(() => {
    return () => {
      disposeObject3D(scene);
    };
  }, [scene]);

  return (
    <>
      <color attach="background" args={[background]} />
      <RenderController active={active} mode={frameloop} />
      {children}
    </>
  );
}
