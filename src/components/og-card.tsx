import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const OG_SIZE = { width: 1200, height: 630 };

/** Shared Open Graph card used by the home page and each case study. */
export function ogCard({ eyebrow, title, footer }: { eyebrow: string; title: string; footer?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0e13",
          color: "#eef0f4",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#b3b8c3" }}>
          <div style={{ width: 16, height: 16, borderRadius: 8, background: "#4bb543" }} />
          {eyebrow}
        </div>
        <div style={{ display: "flex", fontSize: 70, fontWeight: 700, lineHeight: 1.06, letterSpacing: -2, maxWidth: 1040 }}>
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 28 }}>
          <span style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <span style={{ background: "#cdf25a", color: "#0c0e13", padding: "4px 12px", fontWeight: 700 }}>AS</span>
            {site.name} · {site.role}
          </span>
          <span style={{ color: "#cdf25a" }}>{footer ?? `${site.location} · Remote`}</span>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
