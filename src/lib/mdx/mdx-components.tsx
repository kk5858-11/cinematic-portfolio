import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  p: ({ children }) => (
    <p className="text-base leading-relaxed text-foreground-secondary">{children}</p>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 text-h2 text-foreground">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 text-h3 text-foreground">{children}</h3>
  ),
  ul: ({ children }) => (
    <ul className="list-disc space-y-2 pl-6 text-foreground-secondary">{children}</ul>
  ),
  li: ({ children }) => <li className="text-base leading-relaxed">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-muted"
    >
      {children}
    </a>
  ),
};
