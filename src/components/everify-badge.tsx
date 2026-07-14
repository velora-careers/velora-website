import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Official E-Verify participation badge. The logo sits on a white chip so it
 * stays legible on any background and keeps the mark's required clear space.
 * Links to the official program site.
 */
export function EVerifyBadge({
  className,
  caption,
}: {
  className?: string;
  /** Optional supporting line (use only on light backgrounds). */
  caption?: string;
}) {
  return (
    <a
      href="https://www.e-verify.gov"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="This employer participates in E-Verify"
      className={cn("group inline-flex items-center gap-3.5 no-underline", className)}
    >
      <span className="inline-flex flex-none items-center rounded-xl bg-white px-4 py-2.5 shadow-[0_2px_10px_rgba(10,31,68,0.12)] ring-1 ring-black/5 transition-shadow duration-200 group-hover:shadow-[0_6px_18px_rgba(10,31,68,0.16)]">
        <Image
          src="/everify/e-verify-logo.png"
          alt="E-Verify"
          width={248}
          height={60}
          className="h-[26px] w-auto"
        />
      </span>
      {caption ? (
        <span className="max-w-[220px] text-[12px] leading-[1.55] text-muted">
          {caption}
        </span>
      ) : null}
    </a>
  );
}
