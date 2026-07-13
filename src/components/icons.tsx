import type { SVGProps } from "react";

/** Right arrow used inside primary CTAs. */
export function ArrowRight({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M1 6h10M7.5 2.5 11 6l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Diagonal up-right arrow used on cards / list rows. */
export function ArrowUpRight({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Checkmark used in feature lists. */
export function Check({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M1.5 6.5 4.5 9.5 10.5 2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Chevron used on nav dropdown triggers. */
export function ChevronDown({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M1 1 L5 5 L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
