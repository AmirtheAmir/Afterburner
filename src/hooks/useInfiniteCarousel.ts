"use client";
import { useEffect, useRef } from "react";

export function useInfiniteCarousel(
  ref: React.RefObject<HTMLElement>,
  deps: React.DependencyList = [],
  speed = 0.6 // px per frame (0.4–1.2 feels nice)
) {
  const pausedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const setToMiddle = () => {
      const third = el.scrollWidth / 3;
      el.scrollLeft = third;
    };
    const clampInfinite = () => {
      const third = el.scrollWidth / 3;
      const x = el.scrollLeft;
      // jump without animation to keep illusion seamless
      if (x < third * 0.5) el.scrollLeft = x + third;
      else if (x > third * 1.5) el.scrollLeft = x - third;
    };
    // Start in the middle copy
    requestAnimationFrame(() => {
      setToMiddle();
      clampInfinite();
    });

    const tick = () => {
      // ✅ only move if not paused
      if (!pausedRef.current) {
        el.scrollLeft += speed;
        clampInfinite();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const start = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (rafRef.current == null) return;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };

    // Pause / resume on hover
    const onPointerEnter = () => {
      pausedRef.current = true;
    };

    const onPointerLeave = () => {
      pausedRef.current = false;
      // ✅ re-clamp once in case we paused near a boundary
      clampInfinite();
    };

    // If user scrolls manually, keep infinite clamp working
    const onScroll = () => {
      if (pausedRef.current) return;
      clampInfinite();
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    // pointer events are more reliable than mouse events
    el.addEventListener("pointerenter", onPointerEnter);
    el.addEventListener("pointerleave", onPointerLeave);

    start();

    return () => {
      stop();
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("pointerenter", onPointerEnter);
      el.removeEventListener("pointerleave", onPointerLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
