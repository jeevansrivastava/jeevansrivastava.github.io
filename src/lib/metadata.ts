import type { Metadata } from "next";
import { profile, type Study } from "@/content/portfolio";
import { absoluteUrl } from "@/lib/site";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  type: "website" | "article" = "website",
): Metadata {
  const fullTitle = path === "/" ? `${profile.name} | ${title}` : `${title} | ${profile.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type,
      siteName: profile.name,
      locale: "en_US",
      ...(type === "article" ? { authors: [absoluteUrl("/about")] } : {}),
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${profile.name} — ${profile.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.png"],
    },
  };
}

export function studyMetadata(study: Study): Metadata {
  return pageMetadata(
    study.seo.title,
    study.seo.description,
    `/case-studies/${study.slug}`,
    "article",
  );
}
