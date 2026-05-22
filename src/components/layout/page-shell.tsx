import { SiteHeader } from "@/components/layout/site-header";
import { cn } from "@/lib/utils";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
  /** Hide header (e.g. home uses Hero header) */
  withHeader?: boolean;
};

export function PageShell({
  children,
  className,
  withHeader = true,
}: PageShellProps) {
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      {withHeader ? <SiteHeader /> : null}
      <main>{children}</main>
    </div>
  );
}
