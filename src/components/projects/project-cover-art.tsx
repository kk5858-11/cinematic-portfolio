"use client";

import { cn } from "@/lib/utils";
import type { ProjectCoverArtId } from "@/types";

type ProjectCoverArtProps = {
  id: ProjectCoverArtId;
  className?: string;
};

/** Per-project bespoke cover illustrations — monochrome cinematic */
export function ProjectCoverArt({ id, className }: ProjectCoverArtProps) {
  return (
    <div
      className={cn(
        "project-cover-art absolute inset-0 h-full w-full",
        className,
      )}
    >
      {id === "spatial" ? <SpatialCover /> : <MotionCover />}
    </div>
  );
}

/** Cosmic observer + formula field + spiral galaxy */
function SpatialCover() {
  const formulas = [
    "∇·E = ρ/ε₀",
    "E = mc²",
    "∫ f(x)dx",
    "λ = h/p",
    "ψ(x,t)",
    "F = ma",
    "∂u/∂t",
    "Ω · Λ",
  ];

  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="spatial-galaxy" cx="50%" cy="42%" r="45%">
          <stop offset="0%" stopColor="#fafafa" stopOpacity="0.55" />
          <stop offset="35%" stopColor="#e4e4e7" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0a0a0b" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="spatial-core" cx="50%" cy="42%" r="12%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id="spatial-glow">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="800" height="500" fill="#08080a" />

      {/* Star field */}
      {Array.from({ length: 80 }).map((_, i) => {
        const x = (i * 97 + 13) % 800;
        const y = (i * 53 + 31) % 500;
        const r = i % 3 === 0 ? 1.2 : 0.6;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={r}
            fill="#fafafa"
            opacity={0.15 + (i % 5) * 0.06}
          />
        );
      })}

      {/* Galaxy arms */}
      <ellipse
        className="project-cover-art-spin-slow"
        cx="400"
        cy="210"
        rx="220"
        ry="90"
        fill="url(#spatial-galaxy)"
        opacity="0.85"
      />
      <ellipse
        className="project-cover-art-spin-reverse"
        cx="400"
        cy="210"
        rx="160"
        ry="55"
        fill="none"
        stroke="#fafafa"
        strokeOpacity="0.06"
        strokeWidth="1"
      />
      <circle cx="400" cy="210" r="28" fill="url(#spatial-core)" filter="url(#spatial-glow)" />

      {/* Formula overlay */}
      {formulas.map((f, i) => (
        <text
          key={f}
          x={60 + (i % 4) * 180}
          y={40 + Math.floor(i / 4) * 90}
          fill="#fafafa"
          fillOpacity={0.06 + (i % 3) * 0.03}
          fontSize="13"
          fontFamily="ui-monospace, monospace"
          transform={`rotate(${-12 + i * 7} ${60 + (i % 4) * 180} ${40 + Math.floor(i / 4) * 90})`}
        >
          {f}
        </text>
      ))}

      {/* Mountain + silhouette */}
      <path
        d="M0 420 L180 280 L320 340 L480 220 L620 300 L800 380 L800 500 L0 500 Z"
        fill="#0e0e10"
        opacity="0.95"
      />
      <path
        d="M0 420 L180 280 L320 340 L480 220 L620 300 L800 380"
        fill="none"
        stroke="#fafafa"
        strokeOpacity="0.08"
        strokeWidth="1"
      />
      <ellipse cx="400" cy="365" rx="6" ry="14" fill="#0a0a0b" />
      <ellipse cx="400" cy="358" rx="4" ry="5" fill="#fafafa" opacity="0.85" />

      <text
        x="48"
        y="72"
        fill="#fafafa"
        fillOpacity="0.35"
        fontSize="11"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.04em"
      >
        Consciousness reflects on existence
      </text>
    </svg>
  );
}

/** Neural motion lines + transition curves */
function MotionCover() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="motion-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fafafa" stopOpacity="0" />
          <stop offset="50%" stopColor="#e4e4e7" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#fafafa" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="800" height="500" fill="#0a0a0b" />

      {/* Route transition arcs */}
      <path
        className="project-cover-art-flow"
        d="M80 400 C200 200, 320 120, 400 180 S600 80, 720 200"
        fill="none"
        stroke="url(#motion-glow)"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
      <path
        className="project-cover-art-flow-delayed"
        d="M100 420 C240 300, 360 80, 500 160 S680 240, 750 120"
        fill="none"
        stroke="#fafafa"
        strokeOpacity="0.12"
        strokeWidth="1"
        strokeDasharray="6 10"
      />

      {/* Two energy silhouettes — tangled lines */}
      <g className="project-cover-art-pulse" opacity="0.9">
        <MotionSilhouette cx={280} />
        <MotionSilhouette cx={520} mirror />
      </g>

      {/* Timeline scrub markers */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <line
            x1={120 + i * 140}
            y1="440"
            x2={120 + i * 140}
            y2={460}
            stroke="#fafafa"
            strokeOpacity="0.15"
          />
          <text
            x={120 + i * 140}
            y="478"
            textAnchor="middle"
            fill="#fafafa"
            fillOpacity="0.2"
            fontSize="9"
            fontFamily="ui-monospace, monospace"
          >
            {`0.${i}s`}
          </text>
        </g>
      ))}

      <text
        x="400"
        y="48"
        textAnchor="middle"
        fill="#fafafa"
        fillOpacity="0.25"
        fontSize="10"
        fontFamily="ui-monospace, monospace"
        letterSpacing="0.35em"
      >
        FRAMER · GSAP · LENIS
      </text>
    </svg>
  );
}

function MotionSilhouette({ cx, mirror }: { cx: number; mirror?: boolean }) {
  const scale = mirror ? -1 : 1;
  const tx = mirror ? cx * 2 : 0;
  const paths = [
    `M${cx} 380 Q${cx - 20} 320 ${cx} 260 Q${cx + 30} 200 ${cx} 140`,
    `M${cx - 40} 380 Q${cx - 60} 300 ${cx - 30} 220`,
    `M${cx + 40} 380 Q${cx + 70} 290 ${cx + 35} 210`,
    `M${cx} 140 Q${cx - 50} 100 ${cx - 20} 80`,
    `M${cx} 140 Q${cx + 50} 95 ${cx + 25} 75`,
  ];

  return (
    <g transform={`translate(${tx}, 0) scale(${scale}, 1)`}>
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="#fafafa"
          strokeOpacity={0.15 + i * 0.04}
          strokeWidth={i === 0 ? 1.5 : 1}
          className={i % 2 === 0 ? "project-cover-art-flow" : "project-cover-art-flow-delayed"}
        />
      ))}
      <ellipse cx={cx} cy={395} rx="55" ry="12" fill="#fafafa" opacity="0.04" />
    </g>
  );
}
