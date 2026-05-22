import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  /** e.g. "01" — cinematic section index */
  index?: string;
  /** Small label above title */
  eyebrow?: string;
};

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  className,
  index,
  eyebrow,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {(index || eyebrow) && (
        <div
          className={cn(
            "mb-6 flex items-center gap-4",
            align === "center" && "justify-center",
          )}
        >
          {index ? (
            <span className="font-mono text-xs tracking-[0.2em] text-subtle">
              {index}
            </span>
          ) : null}
          {index && eyebrow ? (
            <span className="h-px w-8 bg-border-subtle" aria-hidden />
          ) : null}
          {eyebrow ? (
            <span className="text-caption text-muted">{eyebrow}</span>
          ) : null}
        </div>
      )}

      <div className={cn("relative", align === "center" && "inline-block")}>
        <h2 className="text-display text-foreground">{title}</h2>
        <span
          className="section-title-glow absolute -bottom-2 left-0 h-px w-24 bg-gradient-to-r from-foreground/40 to-transparent"
          aria-hidden
        />
      </div>

      {subtitle ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
      ) : null}
    </header>
  );
}
