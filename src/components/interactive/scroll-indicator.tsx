"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { getTransition } from "@/animations";
import { heroRhythm } from "@/animations/rhythm";

export function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ...getTransition("enter"), delay: heroRhythm.scrollIndicatorDelay }}
      aria-hidden
    >
      <span className="text-caption text-subtle">Scroll</span>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <ChevronDown className="h-4 w-4 text-muted" strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  );
}
