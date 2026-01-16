import type { MetadataRoute } from "next";

// IMPORTANT: Set NEXT_PUBLIC_SITE_URL in production to EXACTLY match your Search Console property
// For example: https://topacoperis.ro  (no trailing slash, no www if property is non-www)
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://topacoperis.ro"
).replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/montaj-acoperisuri", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/reparatii-acoperisuri", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/dulgherie", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/hidroizolatii", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/portofoliu", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/servicii/montaj-tigla-metalica", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/politica-cookie", priority: 0.6, changeFreq: "yearly" as const },
    { path: "/gdpr", priority: 0.6, changeFreq: "yearly" as const },
    { path: "/anpc", priority: 0.6, changeFreq: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}
