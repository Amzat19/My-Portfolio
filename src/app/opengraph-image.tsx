import { OG_SIZE, ogCard } from "@/components/og-card";
import { site } from "@/content/site";

export const dynamic = "force-static";
export const alt = `${site.name}, ${site.role}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ eyebrow: site.availability, title: site.heroLine });
}
