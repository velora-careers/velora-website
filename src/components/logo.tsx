import Link from "next/link";
import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/** The Velora "check-in-circle" mark. Inherits `color` via currentColor. */
export function LogoMark({
  size = 38,
  className,
  style,
  title,
}: {
  size?: number;
  className?: string;
  style?: CSSProperties;
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      style={style}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M91.2 88.1 A42 42 0 1 1 91.2 31.9 L62 84 L51.7 55.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="45.8" cy="39.5" r="6.5" fill="currentColor" />
    </svg>
  );
}

/** Full lockup: mark + VELORA / CAREERS wordmark. */
export function Logo({
  tone = "navy",
  markSize = 38,
  className,
}: {
  tone?: "navy" | "white";
  markSize?: number;
  className?: string;
}) {
  const color = tone === "white" ? "#ffffff" : "#0A1F44";
  return (
    <Link
      href="/"
      aria-label="Velora Careers — home"
      className={cn("flex flex-none items-center gap-[11px] no-underline", className)}
    >
      <LogoMark size={markSize} className="block" style={{ color }} />
      <span className="flex flex-col gap-[3px]">
        <span
          className="text-[16px] font-bold leading-none tracking-[0.05em]"
          style={{ color }}
        >
          VELORA
        </span>
        <span
          className="text-[7.5px] font-semibold leading-none tracking-[0.42em] opacity-[0.72]"
          style={{ color }}
        >
          CAREERS
        </span>
      </span>
    </Link>
  );
}
