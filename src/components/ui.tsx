import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowRight, Check } from "@/components/icons";
import { LogoMark } from "@/components/logo";

/* ---------------------------------------------------------------- Container */

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-8", className)}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ Eyebrow */

export function Eyebrow({
  children,
  tone = "gold-dark",
  className,
}: {
  children: ReactNode;
  tone?: "gold-dark" | "gold" | "faint";
  className?: string;
}) {
  const color =
    tone === "gold" ? "text-gold" : tone === "faint" ? "text-faint" : "text-gold-dark";
  return (
    <span
      className={cn(
        "font-mono text-[11px] font-semibold uppercase tracking-[0.16em]",
        color,
        className,
      )}
    >
      {children}
    </span>
  );
}

/* --------------------------------------------------------------------- Rich */

/**
 * Renders trusted HTML copy (contains <br> and an <em> accent word).
 * The <em> is styled via `.rich em` using the `--accent` custom property.
 */
export function Rich({
  html,
  as: Tag = "span",
  tone = "light",
  className,
  style,
}: {
  html: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div" | "p";
  tone?: "light" | "dark";
  className?: string;
  style?: CSSProperties;
}) {
  const accent = tone === "dark" ? "#e3c06b" : "#b48a2c";
  return (
    <Tag
      className={cn("rich", className)}
      style={{ ["--accent" as string]: accent, ...style } as CSSProperties}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/* ------------------------------------------------------------------- Button */

type ButtonVariant = "solidLight" | "outlineLight" | "solidNavy" | "outlineNavy";

const buttonVariants: Record<ButtonVariant, string> = {
  solidLight: "bg-white text-navy hover:bg-gold px-7 py-[15px] font-bold",
  outlineLight:
    "border border-white/35 text-white hover:border-white hover:bg-white/[0.06] px-[26px] py-[14px] font-semibold",
  solidNavy: "bg-navy text-white hover:bg-navy-hover px-7 py-[15px] font-bold",
  outlineNavy:
    "border border-navy text-navy hover:bg-navy hover:text-white px-[26px] py-[14px] font-semibold",
};

export function Button({
  href,
  variant = "solidNavy",
  arrow = false,
  children,
  className,
}: {
  href: string;
  variant?: ButtonVariant;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-[10px] rounded-full text-[14px] no-underline transition-colors duration-200",
    buttonVariants[variant],
    className,
  );
  const external = !href.startsWith("/");
  const inner = (
    <>
      {children}
      {arrow ? <ArrowRight className="flex-none" /> : null}
    </>
  );
  if (external) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

/* --------------------------------------------------------------------- Card */

export function Card({
  children,
  className,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line-card bg-white shadow-card",
        hover && "transition-colors hover:border-gold-dark",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- CheckList */

export function CheckList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div className={cn("border-t border-line-soft", className)}>
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 border-b border-line-soft py-[13px] text-[14.5px] leading-[1.55] text-body"
        >
          <span className="mt-1 flex-none text-gold-dark">
            <Check />
          </span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------ SectionHeader */

export function SectionHeader({
  eyebrow,
  heading,
  description,
  size = "md",
  tone = "light",
  className,
}: {
  eyebrow: string;
  heading: string;
  description?: string;
  size?: "md" | "lg";
  tone?: "light" | "dark";
  className?: string;
}) {
  const headingStyle: CSSProperties =
    size === "lg"
      ? { fontSize: "clamp(34px,3.6vw,52px)", lineHeight: 1.1 }
      : { fontSize: "clamp(32px,3.4vw,48px)", lineHeight: 1.12 };
  return (
    <div
      className={cn(
        "mb-[52px] flex flex-wrap items-end justify-between gap-x-[60px] gap-y-6",
        className,
      )}
    >
      <div>
        <Eyebrow tone={tone === "dark" ? "gold" : "gold-dark"}>{eyebrow}</Eyebrow>
        <Rich
          as="h2"
          html={heading}
          tone={tone}
          className={cn(
            "mt-4 font-bold tracking-[-0.02em]",
            tone === "dark" ? "text-white" : "text-ink",
          )}
          style={headingStyle}
        />
      </div>
      {description ? (
        <p className="m-0 max-w-[420px] text-[15.5px] leading-[1.7] text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}

/* ---------------------------------------------------------------- Watermark */

/** Faint oversized logo mark used as a decorative background on navy panels. */
export function Watermark({
  size = 680,
  className,
  opacity = 0.05,
}: {
  size?: number;
  className?: string;
  opacity?: number;
}) {
  return (
    <LogoMark
      size={size}
      title={undefined}
      className={cn("pointer-events-none absolute text-white", className)}
      style={{ opacity }}
    />
  );
}

/* --------------------------------------------------------------- CodeCard */

/** The "terminal" card: traffic lights, filename, badge, code body. */
export function CodeCard({
  file,
  lang,
  code,
  footer,
  minHeight = 120,
}: {
  file: string;
  lang: string;
  code: string;
  footer?: ReactNode;
  minHeight?: number;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/12 bg-navy-deep font-mono">
      <div className="flex items-center justify-between gap-[14px] border-b border-white/10 px-5 py-[14px]">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/[0.18]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/[0.18]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/[0.18]" />
        </div>
        <div className="text-[12px] text-white/85">{file}</div>
        <div className="whitespace-nowrap rounded-full border border-gold px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-gold">
          {lang}
        </div>
      </div>
      <pre
        className="m-0 overflow-auto whitespace-pre-wrap px-5 py-[22px] font-mono text-[12.5px] leading-[1.65] text-[#d8dfec]"
        style={{ minHeight }}
      >
        {code}
      </pre>
      {footer ? (
        <div className="border-t border-white/10">{footer}</div>
      ) : null}
    </div>
  );
}
