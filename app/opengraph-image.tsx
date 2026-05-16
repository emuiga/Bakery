import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Joyful Bakery — Custom Cakes & Pastries in Nakuru, Kenya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          gap: "24px",
        }}
      >
        {/* Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontSize: 96,
              fontWeight: 400,
              color: "rgb(228, 121, 143)",
              lineHeight: 1,
            }}
          >
            Joyful
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            Bakery
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Custom cakes, cookies &amp; pastries baked with love in Lanet, Nakuru
        </div>

        {/* Pill badges */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "12px",
          }}
        >
          {["🎂 Custom Cakes", "🍪 Cookies", "🥐 Pastries", "📍 Nakuru"].map(
            (label) => (
              <div
                key={label}
                style={{
                  background: "rgba(228,121,143,0.18)",
                  border: "1.5px solid rgba(228,121,143,0.5)",
                  borderRadius: 999,
                  padding: "8px 22px",
                  fontSize: 20,
                  color: "rgb(228, 121, 143)",
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            )
          )}
        </div>

        {/* WhatsApp CTA strip */}
        <div
          style={{
            marginTop: "20px",
            background: "rgb(228, 121, 143)",
            borderRadius: 12,
            padding: "14px 40px",
            fontSize: 22,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.05em",
          }}
        >
          ORDER VIA WHATSAPP — READY IN 48 HRS
        </div>
      </div>
    ),
    { ...size }
  );
}
