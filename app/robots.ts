import type { MetadataRoute } from "next";

// Must match the exact property domain used in Google Search Console
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://topacoperis.ro"
).replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

