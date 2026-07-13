import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { roleSlugs } from "@/data/roles";
import { serviceSlugs } from "@/data/services";
import { expertiseSlugs } from "@/data/expertise";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/roles"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  for (const slug of serviceSlugs) {
    entries.push({
      url: absoluteUrl(`/services/${slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }
  for (const slug of expertiseSlugs) {
    entries.push({
      url: absoluteUrl(`/expertise/${slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }
  for (const slug of roleSlugs) {
    entries.push({
      url: absoluteUrl(`/roles/${slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}
