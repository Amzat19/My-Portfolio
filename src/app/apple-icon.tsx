import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Same mark as icon.svg: initials over a lime highlighter stroke. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0e13",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: -4,
            color: "#0c0e13",
            background: "#cdf25a",
            padding: "0 14px",
            lineHeight: 1.05,
          }}
        >
          AS
        </div>
      </div>
    ),
    size,
  );
}
