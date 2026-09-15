import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

export const alt =
  "Elkana Maina — Software Engineer building web apps, mobile software, backends, and ML models";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Google serves woff2 to modern UAs and ttf to older ones; satori needs
// ttf/otf, so we spoof an old Safari UA to force the ttf variant.
async function loadGoogleFont(family: string, weight: number) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family,
  )}:wght@${weight}&display=swap`;

  const css = await (
    await fetch(cssUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2",
      },
    })
  ).text();

  const match = css.match(
    /src: url\(([^)]+)\) format\('(?:truetype|opentype)'\)/,
  );
  if (!match) throw new Error(`Could not resolve font source for ${family}`);

  const fontRes = await fetch(match[1]);
  return fontRes.arrayBuffer();
}

export default async function Image() {
  const profileData = await readFile(
    join(process.cwd(), "assets/images/profile.jpg"),
  );
  const profileSrc = `data:image/jpeg;base64,${profileData.toString("base64")}`;

  let fonts: {
    name: string;
    data: ArrayBuffer;
    weight: 400 | 600 | 700;
    style: "normal";
  }[] = [];
  try {
    const [regular, bold] = await Promise.all([
      loadGoogleFont("Space Grotesk", 400),
      loadGoogleFont("Space Grotesk", 700),
    ]);
    fonts = [
      { name: "Space Grotesk", data: regular, weight: 400, style: "normal" },
      { name: "Space Grotesk", data: bold, weight: 700, style: "normal" },
    ];
  } catch {
    // Falls back to satori's default sans if Google Fonts is unreachable
    // at build/request time — image still renders, just untitled font.
  }

  const skills = ["React", "Next.js", "Django", "PyTorch", "TensorFlow"];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background:
          "linear-gradient(135deg, #07090e 0%, #0f172a 55%, #07090e 100%)",
        fontFamily: "Space Grotesk",
        position: "relative",
      }}
    >
      {/* Soft ambient glows, standing in for the site's mesh-gradient atmosphere */}
      <div
        style={{
          position: "absolute",
          top: -160,
          right: -120,
          width: 560,
          height: 560,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.30), rgba(56,189,248,0) 70%)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: -140,
          width: 620,
          height: 620,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.22), rgba(168,85,247,0) 70%)",
          display: "flex",
        }}
      />

      {/* Availability pill, matching the hero section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          alignSelf: "flex-start",
          padding: "10px 20px",
          borderRadius: 999,
          border: "1px solid rgba(255,255,255,0.14)",
          background: "rgba(255,255,255,0.04)",
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#10b981",
            display: "flex",
          }}
        />
        <span style={{ fontSize: 20, color: "#94a3b8" }}>
          Available for Engineering Roles &amp; Contracts
        </span>
      </div>

      {/* Main content: photo + name/title/tagline */}
      <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
        <img
          src={profileSrc}
          alt=""
          width={220}
          height={220}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid rgba(56,189,248,0.55)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            maxWidth: 720,
          }}
        >
          <span style={{ fontSize: 26, color: "#38bdf8", fontWeight: 600 }}>
            Hi, I&apos;m
          </span>
          <span
            style={{
              fontSize: 66,
              color: "#f8fafc",
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            Elkana Maina
          </span>
          <span style={{ fontSize: 30, color: "#e2e8f0", fontWeight: 400 }}>
            Software Engineer
          </span>
          <span style={{ fontSize: 22, color: "#94a3b8", lineHeight: 1.5 }}>
            Building web apps, mobile software, backends, and practical ML
            models that turn messy operations into scalable systems.
          </span>
        </div>
      </div>

      {/* Footer: skill chips + site URL */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", gap: 12 }}>
          {skills.map((skill) => (
            <div
              key={skill}
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.04)",
                color: "#e2e8f0",
                fontSize: 18,
              }}
            >
              {skill}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span style={{ fontSize: 20, color: "#64748b" }}>
            elkana.ellypad.com
          </span>
          <span style={{ fontSize: 20, color: "#64748b" }}>
            Falcosend · Ellypad Tech
          </span>
        </div>
      </div>
    </div>,
    fonts.length ? { ...size, fonts } : { ...size },
  );
}
