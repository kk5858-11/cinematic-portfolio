"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnchorLink } from "@/components/navigation/anchor-link";
import { TransitionLink } from "@/components/navigation/transition-link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { NAV_ITEMS, ROUTES } from "@/constants/navigation";
import { getTransition } from "@/animations/presets/timing";
import { zIndexClass } from "@/tokens/z-index";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-3 lg:hidden">
      <ThemeToggle />
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-button border border-border-subtle text-foreground"
      >
        {open ? <X className="h-4 w-4" strokeWidth={1.5} /> : <Menu className="h-4 w-4" strokeWidth={1.5} />}
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close overlay"
              className={cn("fixed inset-0 bg-background/60 backdrop-blur-sm", zIndexClass.overlay)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={getTransition("micro")}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className={cn(
                "fixed inset-x-4 top-20 rounded-panel border border-border-subtle bg-surface p-6 shadow-md",
                zIndexClass.drawer,
              )}
              initial={{ opacity: 0, y: -12, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
              transition={getTransition("section")}
            >
              <ul className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    {item.href === "#writing" ? (
                      <TransitionLink
                        href={ROUTES.blog}
                        className="text-base text-foreground"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </TransitionLink>
                    ) : (
                      <AnchorLink
                        href={item.href}
                        className="text-base text-foreground"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </AnchorLink>
                    )}
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
