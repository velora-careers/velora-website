"use client";

import { useEffect, useState } from "react";

/** Live ET clock for the hero ticker. Renders a placeholder until mounted
 *  to avoid a hydration mismatch. */
export function LiveClock({ className }: { className?: string }) {
  const [time, setTime] = useState("--:--:-- EST");

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "America/New_York",
      });
      setTime(`${t} EST`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {time}
    </span>
  );
}
