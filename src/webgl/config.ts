import type { FrameloopMode, QualitySettings, WebGLTier } from "./types";

/** Void black — matches Design System */
export const WEBGL_BACKGROUND = "#0a0a0b";

export const qualityPresets: Record<Exclude<WebGLTier, "static">, QualitySettings> = {
  high: {
    tier: "high",
    dpr: [1, 1.5],
    antialias: true,
    particleCount: 420,
    particleSize: 0.035,
    frameloop: "always",
    powerPreference: "high-performance",
    enableFog: true,
    enableMouseLight: true,
  },
  medium: {
    tier: "medium",
    dpr: [1, 1.25],
    antialias: false,
    particleCount: 220,
    particleSize: 0.04,
    frameloop: "demand",
    powerPreference: "high-performance",
    enableFog: true,
    enableMouseLight: true,
  },
  low: {
    tier: "low",
    dpr: [1, 1.25],
    antialias: false,
    particleCount: 160,
    particleSize: 0.04,
    frameloop: "always",
    powerPreference: "default",
    enableFog: true,
    enableMouseLight: true,
  },
};

const tierRank: Record<WebGLTier, number> = {
  high: 3,
  medium: 2,
  low: 1,
  static: 0,
};

/** Aggregated config object */
export const WEBGL = {
  background: WEBGL_BACKGROUND,
  quality: qualityPresets,
  getQualitySettings,
  tierMeetsMinimum,
  resolveFrameloop,
} as const;

export function getQualitySettings(tier: WebGLTier): QualitySettings | null {
  if (tier === "static") return null;
  return qualityPresets[tier];
}

export function tierMeetsMinimum(
  current: WebGLTier,
  required: WebGLTier,
): boolean {
  return tierRank[current] >= tierRank[required];
}

export function resolveFrameloop(
  visible: boolean,
  preferred: FrameloopMode,
): FrameloopMode {
  if (!visible) return "never";
  return preferred;
}
