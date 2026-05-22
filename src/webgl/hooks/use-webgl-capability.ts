"use client";

import { useEffect, useMemo, useState } from "react";
import { BREAKPOINTS } from "@/constants/breakpoints";
import { getQualitySettings } from "@/webgl/config";
import type { QualitySettings, WebGLTier } from "@/webgl/types";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

function detectWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

function detectTier(
  supported: boolean,
  reducedMotion: boolean,
  isMobile: boolean,
  isTablet: boolean,
): WebGLTier {
  if (!supported || reducedMotion) return "static";
  if (isMobile) return "low";
  if (isTablet) return "medium";
  return "high";
}

export type WebGLCapability = {
  tier: WebGLTier;
  shouldRender: boolean;
  settings: QualitySettings | null;
  supported: boolean;
  reducedMotion: boolean;
};

/**
 * Unified device adaptation — tier, quality settings, render gate.
 */
export function useWebGLCapability(): WebGLCapability {
  const reducedMotion = useReducedMotion();
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.md - 1}px)`);
  const isTablet = useMediaQuery(
    `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`,
  );

  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(detectWebGLSupport());
  }, []);

  return useMemo(() => {
    const tier = detectTier(supported, reducedMotion, isMobile, isTablet);
    const settings = getQualitySettings(tier);
    const shouldRender = tier !== "static" && settings !== null;

    return {
      tier,
      shouldRender,
      settings,
      supported,
      reducedMotion,
    };
  }, [supported, reducedMotion, isMobile, isTablet]);
}
