import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsap } from "./register";

export type LenisInstance = Lenis;

export type LenisSetup = {
  lenis: Lenis;
  cleanup: () => void;
};

/** Setup Lenis + GSAP — returns instance for programmatic scroll. */
export function setupLenisScroll(): LenisSetup {
  registerGsap();

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.15,
  });

  lenis.on("scroll", ScrollTrigger.update);

  const tick = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  const cleanup = () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };

  return { lenis, cleanup };
}
