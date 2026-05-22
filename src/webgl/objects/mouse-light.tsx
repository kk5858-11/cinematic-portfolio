"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import type { NormalizedPointer } from "@/hooks/use-mouse-position";

type MouseLightProps = {
  pointerRef: React.RefObject<NormalizedPointer>;
};

export function MouseLight({ pointerRef }: MouseLightProps) {
  const lightRef = useRef<THREE.PointLight>(null);
  const target = useRef(new THREE.Vector3(0, 0, 2));

  useFrame(() => {
    if (!lightRef.current || !pointerRef.current) return;
    const { nx, ny } = pointerRef.current;
    target.current.set((nx - 0.5) * 6, (ny - 0.5) * 4, 3);
    lightRef.current.position.lerp(target.current, 0.04);
  });

  return (
    <pointLight
      ref={lightRef}
      color="#fafafa"
      intensity={0.35}
      distance={12}
      decay={2}
    />
  );
}
