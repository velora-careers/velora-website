"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { LogoMark } from "@/components/logo";

const SESSION_KEY = "velora_intro_seen";
const AUTO_MS = 3400;

/**
 * One-time, full-screen brand intro shown when landing on the home page.
 * The mark draws itself, the wordmark + tagline fade in, then the panel
 * lifts away to reveal the site. Plays once per session, is skippable, and
 * is skipped entirely for reduced-motion users. Rendered only after a client
 * decision (armed) so there's no hydration mismatch.
 */
export function IntroSplash() {
  const reduce = useReducedMotion();
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // One-time, client-only arming based on sessionStorage + reduced-motion.
    /* eslint-disable react-hooks/set-state-in-effect */
    if (reduce) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) return;
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setArmed(true);
    setVisible(true);
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setVisible(false), AUTO_MS);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisible(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [reduce]);

  const unlock = useCallback(() => {
    document.body.style.overflow = "";
  }, []);

  if (!armed) return null;

  return (
    <AnimatePresence onExitComplete={unlock}>
      {visible ? (
        <motion.div
          key="intro"
          role="dialog"
          aria-label="Velora Careers"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-navy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{
            opacity: { duration: 0.2 },
            y: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* faint oversized watermark */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <LogoMark
              size={620}
              className="text-white"
              style={{ opacity: 0.04 } as CSSProperties}
            />
          </div>

          {/* animated lockup */}
          <div className="relative flex flex-col items-center px-6 text-center">
            <svg
              width="132"
              height="132"
              viewBox="0 0 120 120"
              aria-hidden
              className="drop-shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            >
              <motion.path
                d="M91.2 88.1 A42 42 0 1 1 91.2 31.9 L62 84 L51.7 55.8"
                fill="none"
                stroke="#ffffff"
                strokeWidth={12}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
              <motion.circle
                cx="45.8"
                cy="39.5"
                r="6.5"
                fill="#E3C06B"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.4, ease: "backOut" }}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
              />
            </svg>

            <motion.div
              className="mt-8 flex flex-col items-center"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.75, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="text-[36px] font-bold leading-none text-white"
                style={{ letterSpacing: "0.3em", paddingLeft: "0.3em" }}
              >
                VELORA
              </div>
              <div
                className="mt-2.5 text-[11px] font-semibold leading-none text-white/70"
                style={{ letterSpacing: "0.52em", paddingLeft: "0.52em" }}
              >
                CAREERS
              </div>
            </motion.div>

            <motion.div
              className="mt-6 font-mono text-[12px] uppercase tracking-[0.16em] text-gold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.15, duration: 0.6 }}
            >
              Your trusted partner in IT staffing
            </motion.div>
          </div>

          {/* timer line */}
          <motion.div
            aria-hidden
            className="absolute bottom-0 left-0 h-[3px] bg-gold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
          />

          <button
            type="button"
            onClick={() => setVisible(false)}
            className="absolute bottom-6 right-6 font-mono text-[11px] uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-white"
          >
            Skip →
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
