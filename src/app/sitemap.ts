import type { MetadataRoute } from "next";
import { guides } from "@/data/guides";
import { absoluteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap { return [{ url: absoluteUrl(), lastModified: "2026-07-15", changeFrequency: "weekly", priority: 1 }, ...guides.map((guide) => ({ url: absoluteUrl(`/${guide.slug}/`), lastModified: "2026-07-15", changeFrequency: "weekly" as const, priority: guide.priority === "P0" ? 0.9 : guide.priority === "P1" ? 0.8 : 0.7 }))]; }
