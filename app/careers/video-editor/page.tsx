"use client";

export default function VideoEditorPage() {
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
        {/* Back link */}
        <div style={{ paddingTop: 80, marginBottom: 48 }}>
          <a
            href="/careers"
            style={{
              color: "#737373",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              transition: "color 200ms",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#171717"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#737373"; }}
          >
            <svg width={14} height={14} viewBox="0 0 20 20" fill="none">
              <path d="M12.5 7.5L6.5 13.5M6.5 13.5V8.5M6.5 13.5H11.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to careers
          </a>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              fontSize: 12,
              color: "#737373",
              background: "#ebebeb",
              borderRadius: 999,
              padding: "2px 10px",
              display: "inline-block",
              marginBottom: 16,
            }}
          >
            Project-based · Remote
          </div>
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
            Video Editor
          </h1>
        </div>

        {/* Description */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ color: "#52525b", marginBottom: 24 }}>About the role</div>
          <p style={{ color: "#52525b", marginTop: 0, marginBottom: 16 }}>
            YouTube-first editing — long-form interview-style videos with clean cuts, captions, and visual pacing that keeps people watching. You know how to make a 20-minute video feel like 8.
          </p>
          <p style={{ color: "#52525b", marginTop: 0, marginBottom: 16 }}>
            You&apos;ll be editing videos for B2B founders — think thought leadership content, founder stories, and educational breakdowns. The tone is calm, professional, and polished. No flashy jump cuts — just tight editing that respects the viewer&apos;s time.
          </p>
          <p style={{ color: "#52525b", marginTop: 0, marginBottom: 0 }}>
            This is a project-based, fully remote role. Each project comes with a clear brief, raw footage, and brand guidelines. We value fast turnarounds and low back-and-forth.
          </p>
        </div>

        {/* Spacer dots */}
        <div style={{ margin: "48px 0", display: "flex", gap: 6 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: 2, height: 2, borderRadius: 999, background: "#a1a1aa" }} />
          ))}
        </div>

        {/* Requirements */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ color: "#52525b", marginBottom: 24 }}>Requirements</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "Portfolio of YouTube-style edits — long-form preferred",
              "Proficient in Premiere Pro or DaVinci Resolve",
              "Consistent turnaround under 3 business days per video",
              "Ability to add captions, lower thirds, and basic motion graphics",
              "Strong sense of pacing — you know when to cut and when to let a moment breathe",
              "Bonus: experience editing B2B, SaaS, or founder content",
            ].map((req) => (
              <li key={req} style={{ color: "#52525b", display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ marginTop: 9, width: 3, height: 3, borderRadius: 999, background: "#a1a1aa", flexShrink: 0, display: "inline-block" }} />
                {req}
              </li>
            ))}
          </ul>
        </div>

        {/* Spacer dots */}
        <div style={{ margin: "48px 0", display: "flex", gap: 6 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: 2, height: 2, borderRadius: 999, background: "#a1a1aa" }} />
          ))}
        </div>

        {/* How to apply */}
        <div style={{ padding: 24, border: "1px solid #e5e5e5", borderRadius: 16, textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
              fontSize: 24,
              color: "#171717",
              marginBottom: 12,
            }}
          >
            How to apply
          </div>
          <p style={{ color: "#52525b", marginBottom: 20, marginTop: 0 }}>
            Send a short note and a link to your portfolio or two to three YouTube-style edits you&apos;re proud of.
          </p>
          <a
            href="mailto:hello@scalewithcontent.com?subject=Application%3A%20Video%20Editor"
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
          <div style={{ width: 144, textAlign: "right", color: "#a1a1aa" }}>&copy; 2025 Leo Mishin</div>
          <a href="https://scalewithcontent.com" target="_blank" rel="noopener noreferrer" style={{ color: "#a1a1aa", textDecoration: "none" }}>ScaleWithContent</a>
          <div style={{ marginLeft: "auto", color: "#a1a1aa" }}>Made with ❤️</div>
        </div>
      </div>
    </div>
  );
}
