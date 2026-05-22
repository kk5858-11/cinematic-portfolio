"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { NormalizedPointer } from "@/hooks/use-mouse-position";
import { SceneRoot } from "@/webgl/scenes/scene-root";
import { createAuroraMaterial } from "@/webgl/materials/aurora-material";
import { disposeShaderMaterial } from "@/webgl/core/dispose";
import { MouseLight } from "@/webgl/objects/mouse-light";
import { ParticleField } from "@/webgl/objects/particle-field";
import { WEBGL_BACKGROUND } from "@/webgl/config";
import type { QualitySettings } from "@/webgl/types";

export type HeroSceneProps = {
  intensityRef: React.RefObject<number>;
  scrollRef: React.RefObject<number>;
  pointerRef: React.RefObject<NormalizedPointer>;
  quality: "high" | "low";
  qualitySettings: QualitySettings;
  visible?: boolean;
};

export function HeroScene({
  intensityRef,
  scrollRef,
  pointerRef,
  qualitySettings,
  visible = true,
}: HeroSceneProps) {
  const material = useMemo(() => createAuroraMaterial(), []);
  const meshRef = useRef<THREE.Mesh>(null);
  const { size, camera } = useThree();

  useEffect(() => {
    camera.position.z = 5;
  }, [camera]);

  useEffect(() => {
    material.uniforms.uResolution.value.set(size.width, size.height);
  }, [material, size.width, size.height]);

  useEffect(() => {
    return () => disposeShaderMaterial(material);
  }, [material]);

  useFrame(() => {
    if (!visible) return;

    material.uniforms.uTime.value = performance.now() * 0.001;
    material.uniforms.uIntensity.value = intensityRef.current ?? 0;
    material.uniforms.uScroll.value = scrollRef.current ?? 0;

    if (pointerRef.current) {
      material.uniforms.uMouse.value.set(
        pointerRef.current.nx,
        pointerRef.current.ny,
      );
    }

    if (meshRef.current) {
      const scroll = scrollRef.current ?? 0;
      meshRef.current.position.z = -6 - scroll * 2;
      meshRef.current.scale.setScalar(1 + scroll * 0.08);
    }
  });

  const planeScale = useMemo(() => {
    const dist = 6;
    const cam = camera as THREE.PerspectiveCamera;
    const fov = (cam.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * dist;
    const width = height * (size.width / size.height);
    return [width * 1.2, height * 1.2, 1] as [number, number, number];
  }, [camera, size.width, size.height]);

  return (
    <SceneRoot
      active={visible}
      frameloop={qualitySettings.frameloop}
      background={WEBGL_BACKGROUND}
    >
      {qualitySettings.enableFog ? (
        <fog attach="fog" args={[WEBGL_BACKGROUND, 4, 18]} />
      ) : null}
      {qualitySettings.enableMouseLight ? (
        <MouseLight pointerRef={pointerRef} />
      ) : null}
      <mesh ref={meshRef} position={[0, 0, -6]} scale={planeScale}>
        <planeGeometry args={[1, 1]} />
        <primitive object={material} attach="material" />
      </mesh>
      <ParticleField
        scrollRef={scrollRef}
        qualitySettings={qualitySettings}
      />
    </SceneRoot>
  );
}
