"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { disposeGeometry, disposeMaterial } from "@/webgl/core/dispose";
import type { QualitySettings } from "@/webgl/types";

type ParticleFieldProps = {
  scrollRef: React.RefObject<number>;
  qualitySettings: QualitySettings;
};

export function ParticleField({
  scrollRef,
  qualitySettings,
}: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = qualitySettings.particleCount;

  const { geometry, speeds, depths } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const depths = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const z = -2 - Math.random() * 8;
      depths[i] = z;
      positions[i3] = (Math.random() - 0.5) * 14;
      positions[i3 + 1] = (Math.random() - 0.5) * 8;
      positions[i3 + 2] = z;
      speeds[i] = 0.1 + Math.random() * 0.3;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    return { geometry, speeds, depths };
  }, [count]);

  useEffect(() => {
    return () => {
      disposeGeometry(geometry);
      if (pointsRef.current?.material) {
        disposeMaterial(pointsRef.current.material);
      }
    };
  }, [geometry]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;
    const scroll = scrollRef.current ?? 0;
    const pos = pointsRef.current.geometry.attributes
      .position as THREE.BufferAttribute;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos.array[i3 + 1] +=
        Math.sin(t * speeds[i] + i) * 0.0004 * (1 - scroll * 0.5);
      pos.array[i3 + 2] = depths[i] + scroll * 1.2;
    }
    pos.needsUpdate = true;
    pointsRef.current.rotation.y = t * 0.015;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={qualitySettings.particleSize}
        color="#e4e4e7"
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
