import type { Metadata } from "next";
import { site } from "@/data/site";

/** Absolute base URL for canonicals, OG, sitemap. Override with NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://veloracareers.com"
).replace(/\/$/, "");

export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Strip the <br>/<em> markup and decode entities from a rich copy string. */
export function plainText(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

type PageMetaInput = {
  title: string;
  description: string;
  /** Route path, e.g. "/roles/software-engineer". */
  path: string;
  /** Extra keywords appended to the site defaults. */
  keywords?: string[];
  /** Override the OG image (defaults to the route's generated opengraph-image). */
  ogImage?: string;
  /** Use the title verbatim, bypassing the "· Velora Careers" template. */
  absoluteTitle?: boolean;
};

/**
 * Build a complete, self-consistent Metadata object for a page:
 * title, description, canonical, OpenGraph + Twitter cards.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...site.keywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title,
      description,
      locale: "en_US",
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}
