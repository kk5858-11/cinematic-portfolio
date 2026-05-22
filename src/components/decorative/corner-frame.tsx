import { cn } from "@/lib/utils";

type CornerFrameProps = {
  className?: string;
};

/** Decorative corner brackets — portrait / cards */
export function CornerFrame({ className }: CornerFrameProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-3 md:inset-4", className)}
      aria-hidden
    >
      <span className="corner-bracket absolute left-0 top-0 h-8 w-8 border-l border-t border-foreground/25" />
      <span className="corner-bracket absolute right-0 top-0 h-8 w-8 border-r border-t border-foreground/25" />
      <span className="corner-bracket absolute bottom-0 left-0 h-8 w-8 border-b border-l border-foreground/25" />
      <span className="corner-bracket absolute bottom-0 right-0 h-8 w-8 border-b border-r border-foreground/25" />
    </div>
  );
}
