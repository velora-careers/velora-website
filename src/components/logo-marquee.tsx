/* eslint-disable @next/next/no-img-element -- bundled brand SVGs; next/image adds no value for tiny inline vectors and would need SVG opt-in */
import { companyLogos } from "@/data/company-logos";

/**
 * Full-width, edge-to-edge marquee of full-color company logos.
 * The track holds two copies of the set so the CSS `velora-marquee`
 * animation (translateX 0 → -50%) loops seamlessly. Edges fade via a mask.
 */
export function LogoMarquee({ label }: { label?: string }) {
  const items = [...companyLogos, ...companyLogos];
  return (
    <div className="overflow-hidden border-b border-line-nav bg-cream py-9">
      {label ? (
        <div className="mb-7 text-center">
          <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-faint">
            {label}
          </span>
        </div>
      ) : null}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max items-center gap-[64px] px-8">
          {items.map((c, i) => (
            <img
              key={`${c.name}-${i}`}
              src={c.src}
              alt={i < companyLogos.length ? c.name : ""}
              aria-hidden={i >= companyLogos.length || undefined}
              width={40}
              height={40}
              loading="lazy"
              decoding="async"
              className="h-9 w-auto flex-none select-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
