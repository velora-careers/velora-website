"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up from 0 to `value` on mount (once, when scrolled into view).
 * SSR-safe: the final value is rendered on the server so it's present for
 * crawlers and no-JS users; the animation only replaces it on the client.
 */
export function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  durationMs = 1500,
  className,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  className?: string;
}) {
  const format = (n: number) =>
    `${prefix}${n.toFixed(decimals)}${suffix}`;

  const [display, setDisplay] = useState(() => format(value));
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const ease = (t: number) => 1 - Math.pow(1 - t, 3);
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        setDisplay(format(value * ease(t)));
        if (t < 1) requestAnimationFrame(tick);
      };
      setDisplay(format(0));
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, decimals, prefix, suffix, durationMs]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
