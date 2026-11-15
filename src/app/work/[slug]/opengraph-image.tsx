import { OG_SIZE, ogCard } from "@/components/og-card";
import { caseStudies, getCaseStudy } from "@/content/case-studies";

export const dynamic = "force-static";
export const alt = "Case study";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return ogCard({
    eyebrow: `Case study · ${study?.company ?? ""}`,
    title: study?.title ?? "Case study",
    footer: study?.outcomes[0] ? `${study.outcomes[0].value} ${study.outcomes[0].label}` : undefined,
  });
}
