import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const dot = 18;
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
