import type { MetadataRoute } from "next";
import { serviceAreas } from "@/lib/site-data";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/service-areas`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const cityRoutes: MetadataRoute.Sitemap = serviceAreas.map((area) => ({
    url: `${siteUrl}/service-areas/${area.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...cityRoutes];
}
