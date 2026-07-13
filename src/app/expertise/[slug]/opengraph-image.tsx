import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getExpertise, expertiseSlugs } from "@/data/expertise";
import { plainText } from "@/lib/seo";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Velora Careers — career service";

export function generateStaticParams() {
  return expertiseSlugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getExpertise(slug);
  return renderOgImage({
    eyebrow: item ? item.title : "Velora Careers",
    title: item ? plainText(item.h1) : "Premium career services.",
  });
}
