import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getRole, roleSlugs } from "@/data/roles";
import { plainText } from "@/lib/seo";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Velora Careers — IT role track";

export function generateStaticParams() {
  return roleSlugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = getRole(slug);
  return renderOgImage({
    eyebrow: role ? role.title : "Velora Careers",
    title: role ? plainText(role.h1) : "IT Role Tracks",
  });
}
