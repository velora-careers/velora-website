import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Velora Careers — your trusted partner in IT staffing excellence";

export default function Image() {
  return renderOgImage({
    eyebrow: "Velora Careers",
    title: "Get hired by the teams you actually want to work for.",
  });
}
