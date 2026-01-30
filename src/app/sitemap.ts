import type { MetadataRoute } from "next";
import { siteContent } from "@/content/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const normalizedBase = (() => {
    const trimmed = siteContent.domain.trim();
    const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    const url = new URL(withProtocol);
    url.protocol = "https:";
    url.hostname = "www.hwksanierung.de";
    url.port = "";
    url.pathname = url.pathname.replace(/\/+$/, "");
    return url.toString().replace(/\/$/, "");
  })();
  const lastModified = new Date("2026-01-30");
  const joinUrl = (path: string) =>
    path === "/" ? normalizedBase : `${normalizedBase}${path.startsWith("/") ? path : `/${path}`}`;

  return [
    {
      url: joinUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: joinUrl("/impressum"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: joinUrl("/datenschutz"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
