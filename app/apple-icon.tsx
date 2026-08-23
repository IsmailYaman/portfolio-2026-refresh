import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const dot = 92;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ width: dot, height: dot, borderRadius: "50%", background: "#050505" }} />
          <div style={{ width: dot, height: dot, borderRadius: "50%", background: "#050505", marginLeft: -dot * 0.28 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
