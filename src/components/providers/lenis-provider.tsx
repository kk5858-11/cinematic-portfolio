"use client";

import { setupLenisScroll, type LenisInstance } from "@/lib/gsap";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const LenisContext = createContext<LenisInstance | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  const [lenis, setLenis] = useState<LenisInstance | null>(null);

  useEffect(() => {
    const { lenis: instance, cleanup } = setupLenisScroll();
    setLenis(instance);
    return () => {
      cleanup();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
