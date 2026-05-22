"use client";

import { useEffect, useRef } from "react";

export type NormalizedPointer = {
  x: number;
  y: number;
  /** Smoothed 0–1 */
  nx: number;
  ny: number;
};

const defaultPointer: NormalizedPointer = {
  x: 0,
  y: 0,
  nx: 0.5,
  ny: 0.5,
};

export function useMousePositionRef() {
  const pointer = useRef<NormalizedPointer>({ ...defaultPointer });

  useEffect(() => {
    let targetNx = 0.5;
    let targetNy = 0.5;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetNx = e.clientX / window.innerWidth;
      targetNy = 1 - e.clientY / window.innerHeight;
      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
    };

    const tick = () => {
      const p = pointer.current;
      p.nx += (targetNx - p.nx) * 0.06;
      p.ny += (targetNy - p.ny) * 0.06;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return pointer;
}
