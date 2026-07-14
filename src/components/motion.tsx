"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  MotionConfig,
  type Variants,
} from "motion/react";
import { useRef, type CSSProperties, type ReactNode } from "react";
import { LogoMark } from "@/components/logo";
import { cn } from "@/lib/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

/** App-wide motion config: honors the OS "reduce motion" setting. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/* --------------------------------------------------------------- Reveal */

/** Fade + rise a block into view once. Falls back to static for reduced motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------- Stagger + Item */

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/**
 * Container that reveals its <Item> children in sequence. Render it with the
 * same className you'd give the grid/flex wrapper it replaces.
 */
export function Stagger({
  children,
  className,
  amount = 0.15,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Item({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

/* --------------------------------------------------- ScrollProgress bar */

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });
  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[100] h-[3px] w-full origin-left bg-gold"
      style={{ scaleX: reduce ? scrollYProgress : scaleX }}
    />
  );
}

/* ------------------------------------------------- ParallaxWatermark */

/** Decorative logo watermark that drifts slightly slower than scroll. */
export function ParallaxWatermark({
  size = 680,
  className,
  opacity = 0.05,
  distance = 90,
}: {
  size?: number;
  className?: string;
  opacity?: number;
  distance?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
    >
      <motion.div style={{ y: reduce ? 0 : y }}>
        <LogoMark
          size={size}
          className="block text-white"
          style={{ opacity } as CSSProperties}
        />
      </motion.div>
    </div>
  );
}
