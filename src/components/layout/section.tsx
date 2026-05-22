import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  /** default | lg — vertical breathing room */
  size?: "default" | "lg" | "hero";
};

export function Section({
  className,
  children,
  size = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        size === "hero" && "hero-padding",
        size === "lg" && "section-padding-lg",
        size === "default" && "section-padding",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
