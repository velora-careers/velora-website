import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const NAVY = "#0a1f44";
const GOLD = "#e3c06b";

/** Velora mark as a data-URI (Satori renders it reliably via <img>). */
function markDataUri(color: string) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120' width='120' height='120'><path d='M91.2 88.1 A42 42 0 1 1 91.2 31.9 L62 84 L51.7 55.8' fill='none' stroke='${color}' stroke-width='12' stroke-linecap='round' stroke-linejoin='round'/><circle cx='45.8' cy='39.5' r='6.5' fill='${color}'/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/**
 * Shared Open Graph / Twitter image. Brand-navy panel with the mark,
 * a gold eyebrow, the page title, and the domain.
 */
export function renderOgImage({
  eyebrow = site.name,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: NAVY,
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* faint watermark */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={markDataUri("#ffffff")}
          width={620}
          height={620}
          alt=""
          style={{ position: "absolute", right: -150, top: -150, opacity: 0.06 }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markDataUri("#ffffff")} width={64} height={64} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#ffffff",
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: 3,
                lineHeight: 1,
              }}
            >
              VELORA
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 8,
                marginTop: 6,
              }}
            >
              CAREERS
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: GOLD,
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {eyebrow}
          </span>
          <span
            style={{
              color: "#ffffff",
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 900,
            }}
          >
            {title}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 24 }}>
            {site.domain}
          </span>
          <span
            style={{
              display: "flex",
              color: NAVY,
              background: GOLD,
              fontSize: 22,
              fontWeight: 700,
              padding: "12px 26px",
              borderRadius: 999,
            }}
          >
            Get matched →
          </span>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
