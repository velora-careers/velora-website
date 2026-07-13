import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getService, serviceSlugs } from "@/data/services";
import { plainText } from "@/lib/seo";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Velora Careers — staffing service";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  return renderOgImage({
    eyebrow: service ? service.name : "Velora Careers",
    title: service ? plainText(service.h1) : "Staffing built for tech.",
  });
}
