import { PageShell } from "@/components/layout/page-shell";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageShell>{children}</PageShell>;
}
