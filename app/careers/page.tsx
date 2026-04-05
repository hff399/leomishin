"use client";

const roleHrefs: Record<string, string> = {
  "Content Researcher": "/careers/content-researcher",
  "Video Editor": "/careers/video-editor",
};

const roles = [
  {
    title: "Content Researcher",
    type: "Part-time · Remote",
    description:
      "You find the angles others miss. Ideas, data, and narratives that make content worth stopping for — not because it's trending, but because it's true and timely.",
    requirements: ["Strong written English", "Experience with B2B or tech topics", "Fast, async communicator"],
  },
  {
    title: "Video Editor",
    type: "Project-based · Remote",
    description:
      "Long-form YouTube editing with the pacing instincts of a filmmaker. You know how to hold attention for 20 minutes in a world designed to steal it.",
    requirements: ["Portfolio of YouTube-style edits", "Premiere Pro or DaVinci Resolve", "Turnaround under 3 business days"],
  },
];

const values = [
  { label: "Async first", text: "No status meetings. Results are the only status update that matters." },
  { label: "Ownership, not execution", text: "You get the brief and the context. What you do with it is yours. We don't manage — we trust." },
  { label: "Quality is the moat", text: "Every piece represents a brand someone spent years building. Good isn't enough. It has to be excellent." },
  { label: "Think in systems", text: "We build infrastructure, not one-offs. If it can't scale, we don't build it." },
];

export default function CareersPage() {
  const blurLayers = [1, 2, 3, 6, 8];

  return (
    <div
      style={{
        fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
        fontSize: 14,
        lineHeight: "24px",
        letterSpacing: "-0.14px",
        WebkitFontSmoothing: "antialiased",
        background: "#f5f5f5",
        color: "#a1a1aa",
        minHeight: "100vh",
      }}
    >
      {/* Top blur */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 48, zIndex: 10, pointerEvents: "none" }}>
        {blurLayers.map((blur) => (
          <div key={blur} style={{ position: "absolute", inset: 0, backdropFilter: `blur(${blur}px)`, WebkitBackdropFilter: `blur(${blur}px)`, maskImage: "linear-gradient(#000 0%, #0000 100%)", WebkitMaskImage: "linear-gradient(#000 0%, #0000 100%)" }} />
        ))}
      </div>
      {/* Bottom blur */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 96, zIndex: 10, pointerEvents: "none" }}>
        {blurLayers.map((blur) => (
          <div key={blur} style={{ position: "absolute", inset: 0, backdropFilter: `blur(${blur}px)`, WebkitBackdropFilter: `blur(${blur}px)`, maskImage: "linear-gradient(#0000 0%, #000 100%)", WebkitMaskImage: "linear-gradient(#0000 0%, #000 100%)" }} />
        ))}
      </div>

      <div style={{ maxWidth: 580, margin: "0 auto", padding: "0 24px 288px" }}>
        {/* Header */}
        <div style={{ paddingTop: 80, marginBottom: 80 }}>
          <h1
            style={{
              fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
              fontSize: 36,
              lineHeight: "52px",
              color: "#171717",
              margin: 0,
              fontWeight: 400,
            }}
          >
            Build with us.
          </h1>
          <p style={{ color: "#52525b", marginTop: 16, marginBottom: 0 }}>
            Small team. High leverage. We don&apos;t hire for roles — we hire for ownership.
          </p>
        </div>

        {/* Open roles */}
        <div style={{ color: "#52525b", marginBottom: 32 }}>Open roles</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {roles.map((role) => (
            <a
              key={role.title}
              href={roleHrefs[role.title]}
              style={{
                display: "block",
                border: "1px solid #e5e5e5",
                borderRadius: 16,
                padding: 24,
                background: "transparent",
                transition: "background 300ms",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,0,0,0.02)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div style={{ color: "#171717", fontWeight: 500 }}>{role.title}</div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#737373",
                    background: "#ebebeb",
                    borderRadius: 999,
                    padding: "2px 10px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {role.type}
                </div>
              </div>
              <p style={{ color: "#52525b", marginBottom: 16, marginTop: 0 }}>{role.description}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                {role.requirements.map((req) => (
                  <li key={req} style={{ color: "#737373", display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ marginTop: 4, width: 3, height: 3, borderRadius: 999, background: "#a1a1aa", flexShrink: 0, display: "inline-block" }} />
                    {req}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>

        {/* Spacer dots */}
        <div style={{ margin: "80px 0", display: "flex", gap: 6 }}>
          {[0,1,2].map(i => <div key={i} style={{ width: 2, height: 2, borderRadius: 999, background: "#a1a1aa" }} />)}
        </div>

        {/* Values */}
        <div style={{ color: "#52525b", marginBottom: 32 }}>How we work</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {values.map((v) => (
            <div key={v.label} style={{ display: "flex", gap: 40 }}>
              <div style={{ width: 120, flexShrink: 0, color: "#171717", fontWeight: 500 }}>{v.label}</div>
              <div style={{ color: "#52525b" }}>{v.text}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ margin: "80px 0 0", padding: 24, border: "1px solid #e5e5e5", borderRadius: 16, textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
              fontSize: 24,
              color: "#171717",
              marginBottom: 12,
            }}
          >
            Think you belong here?
          </div>
          <p style={{ color: "#52525b", marginBottom: 20, marginTop: 0 }}>
            Send a short note: what you do, what you&apos;ve built, and why this matters to you.
          </p>
          <a
            href="mailto:hello@scalewithcontent.com?subject=Careers%20Inquiry"
            style={{
              display: "inline-block",
              background: "#171717",
              color: "white",
              borderRadius: 999,
              padding: "8px 20px",
              textDecoration: "none",
              fontSize: 14,
              transition: "opacity 200ms",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            hello@scalewithcontent.com
          </a>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 80, display: "flex", alignItems: "center", gap: "0 32px", fontSize: 14 }}>
          <div style={{ width: 144, textAlign: "right", color: "#a1a1aa" }}>&copy; 2026 Leo Mishin</div>
          <a href="https://scalewithcontent.com" target="_blank" rel="noopener noreferrer" style={{ color: "#a1a1aa", textDecoration: "none" }}>Scale with Content</a>
          <div style={{ marginLeft: "auto", color: "#a1a1aa" }}>Tbilisi, GE</div>
        </div>
      </div>

    </div>
  );
}
