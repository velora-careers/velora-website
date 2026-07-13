import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Contact Velora Careers";

export default function Image() {
  return renderOgImage({
    eyebrow: "Contact · Always open",
    title: "Tell us about your career goals.",
  });
}
