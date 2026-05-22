"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useMousePositionRef } from "@/hooks/use-mouse-position";

function OrbMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointerRef = useMousePositionRef();

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    mesh.rotation.y += delta * 0.35;
    mesh.rotation.x += delta * 0.12;

    if (pointerRef.current) {
      mesh.rotation.y += pointerRef.current.nx * 0.008;
      mesh.rotation.x += pointerRef.current.ny * 0.006;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.1, 1]} />
      <meshBasicMaterial
        color="#e4e4e7"
        wireframe
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

/** Lightweight wireframe orb — About section accent only */
export function AboutOrbCanvas() {
  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 0, 3.2], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      frameloop="always"
    >
      <OrbMesh />
    </Canvas>
  );
}
