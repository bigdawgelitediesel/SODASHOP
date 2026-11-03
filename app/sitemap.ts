import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/data";

const routes: { path: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/menu", changeFrequency: "monthly", priority: 0.9 },
  { path: "/tour", changeFrequency: "weekly", priority: 0.9 },
  { path: "/events", changeFrequency: "monthly", priority: 0.8 },
  { path: "/hidden-hits", changeFrequency: "weekly", priority: 0.7 },
  { path: "/store", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
