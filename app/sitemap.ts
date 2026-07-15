import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  return [
    {
      url: `${base}/de`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          de: `${base}/de`,
          en: `${base}/en`,
        },
      },
    },
    {
      url: `${base}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          de: `${base}/de`,
          en: `${base}/en`,
        },
      },
    },
  ];
}
