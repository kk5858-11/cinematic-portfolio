import { Container } from "@/components/layout/container";

type SectionDividerProps = {
  label?: string;
};

export function SectionDivider({ label }: SectionDividerProps) {
  return (
    <Container className="py-6">
      <div className="flex items-center gap-6" aria-hidden>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border-subtle" />
        {label ? (
          <span className="shrink-0 font-mono text-[10px] tracking-[0.25em] text-subtle uppercase">
            {label}
          </span>
        ) : (
          <span className="flex shrink-0 gap-1">
            <span className="h-1 w-1 rounded-full bg-muted" />
            <span className="h-1 w-1 rounded-full bg-subtle" />
            <span className="h-1 w-1 rounded-full bg-border" />
          </span>
        )}
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border-subtle" />
      </div>
    </Container>
  );
}
