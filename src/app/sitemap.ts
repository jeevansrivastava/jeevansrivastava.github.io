import { studies } from "@/content/portfolio";
import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until significant content-update dates are maintained.
  return [
    "/",
    "/about",
    "/case-studies",
    ...studies.map((study) => `/case-studies/${study.slug}`),
    "/articles",
    "/work-with-me",
    "/resume",
    "/contact",
  ].map((path) => ({ url: absoluteUrl(path) }));
}
