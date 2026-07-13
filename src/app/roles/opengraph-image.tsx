import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Top IT roles — 13 career tracks at Velora Careers";

export default function Image() {
  return renderOgImage({
    eyebrow: "Top IT Roles",
    title: "Thirteen tracks. One career studio.",
  });
}
