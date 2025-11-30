import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Ensure baseUrl matches exactly what's configured in Google Search Console
  // If you have www in Search Console, change this to "https://www.topacoperis.ro"
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://topacoperis.ro";

  // Normalize baseUrl - remove trailing slash if present
  const normalizedBaseUrl = baseUrl.replace(/\/$/, "");

  // List all routes - priority URLs so Google can crawl key landing pages first
  const routes = [
    { path: "", priority: 1.0, changeFreq: "weekly" as const },
    {
      path: "/montaj-acoperisuri",
      priority: 0.9,
      changeFreq: "weekly" as const,
    },
    {
      path: "/reparatii-acoperisuri",
      priority: 0.9,
      changeFreq: "weekly" as const,
    },
    { path: "/dulgherie", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/hidroizolatii", priority: 0.8, changeFreq: "monthly" as const },
    {
      path: "/servicii/montaj-tigla-metalica",
      priority: 0.7,
      changeFreq: "monthly" as const,
    },
  ];

  return routes.map((route) => ({
    url: `${normalizedBaseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}
