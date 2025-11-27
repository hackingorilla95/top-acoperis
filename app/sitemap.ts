import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://topacoperis.ro";

  // List priority URLs so Google can crawl key landing pages first
  const routes = [
    "",
    "/montaj-acoperisuri",
    "/reparatii-acoperisuri",
    "/dulgherie",
    "/hidroizolatii",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}

