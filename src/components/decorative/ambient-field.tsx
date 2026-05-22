import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type AmbientVariant = "default" | "warm" | "cool" | "grid";

type AmbientFieldProps = {
  children: ReactNode;
  variant?: AmbientVariant;
  className?: string;
  showGrid?: boolean;
};

const orbSets: Record<AmbientVariant, string[]> = {
  default: [
    "ambient-orb ambient-orb-a -left-[10%] top-[15%] h-[420px] w-[420px]",
    "ambient-orb ambient-orb-b right-[5%] top-[40%] h-[320px] w-[320px]",
  ],
  warm: [
    "ambient-orb ambient-orb-warm -right-[5%] top-[10%] h-[380px] w-[380px]",
    "ambient-orb ambient-orb-a left-[10%] bottom-[5%] h-[280px] w-[280px]",
  ],
  cool: [
    "ambient-orb ambient-orb-cool left-[20%] top-[20%] h-[360px] w-[360px]",
    "ambient-orb ambient-orb-b right-[15%] bottom-[10%] h-[300px] w-[300px]",
  ],
  grid: [
    "ambient-orb ambient-orb-a left-[50%] top-[30%] h-[500px] w-[500px] -translate-x-1/2",
  ],
};

export function AmbientField({
  children,
  variant = "default",
  className,
  showGrid,
}: AmbientFieldProps) {
  const orbs = orbSets[variant];
  const gridOn = showGrid ?? variant === "grid";

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {orbs.map((cls) => (
          <div key={cls} className={cn("absolute rounded-full blur-3xl", cls)} />
        ))}
        {gridOn ? <div className="ambient-grid absolute inset-0" /> : null}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-60" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
