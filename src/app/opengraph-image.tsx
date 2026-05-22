import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/constants/site";

export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0a0a0b",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            opacity: 0.5,
            marginBottom: 24,
          }}
        >
          Creative Developer
        </div>
        <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.05 }}>
          {SITE_NAME}
        </div>
        <div style={{ fontSize: 28, marginTop: 32, opacity: 0.55, maxWidth: 720 }}>
          Cinematic digital experiences — spatial, minimal, future-forward.
        </div>
      </div>
    ),
    { ...size },
  );
}
