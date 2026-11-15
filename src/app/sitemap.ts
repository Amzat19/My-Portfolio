import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, priority: 1 },
    ...caseStudies.map((study) => ({ url: `${site.url}/work/${study.slug}/`, priority: 0.8 })),
  ];
}
