"use client";

const timeline = [
  {
    year: "2026",
    title: "Three companies, one thesis",
    body: "Scaling mono.ge, Scale with Content, and Merchant AI simultaneously. The lesson so far: portfolio thinking beats single-bet thinking. Each company teaches the others. Compounding knowledge is the real asset.",
  },
  {
    year: "2024",
    title: "First $1M in tracked client revenue",
    body: "Scale with Content crossed $1M in tracked attributed revenue. The model held: organic content as the distribution engine, founder voice as the moat. Distribution beats product every time.",
  },
  {
    year: "2023",
    title: "Founded Scale with Content",
    body: "Left everything else. One thesis: B2B founders can outgrow their market without ever paying for an ad — if they build the right content system. First clients within 30 days. The idea worked.",
  },
  {
    year: "2022",
    title: "Discovered the pattern",
    body: "The founders growing fastest weren't the ones with the biggest budgets. They were the ones who showed up. Consistently. On video. I reverse-engineered why it worked and started building around it.",
  },
  {
    year: "2021",
    title: "First content experiments",
    body: "Started publishing for my own projects and a handful of early-stage founders. No strategy — just volume and observation. Slowly learned what moved the needle. Most things don't. A few things compound.",
  },
  {
    year: "2019",
    title: "First steps",
    body: "Built small online projects while still in school. Made every beginner mistake there is. The most important lesson came early: distribution is everything. The best product with no audience is invisible.",
  },
];

export default function HistoryPage() {
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
            My story.
          </h1>
          <p style={{ color: "#52525b", marginTop: 16, marginBottom: 0 }}>
            How I went from zero to building multiple companies — and what I learned along the way.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {timeline.map((entry, i) => (
            <div
              key={entry.year}
              style={{
                display: "flex",
                gap: 40,
                paddingBottom: i < timeline.length - 1 ? 48 : 0,
                position: "relative",
              }}
            >
              {/* Left: year + line */}
              <div style={{ width: 64, flexShrink: 0, position: "relative" }}>
                <div style={{ color: "#737373", paddingTop: 2 }}>{entry.year}</div>
                {i < timeline.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 28,
                      left: 0,
                      width: 1,
                      bottom: -48,
                      background: "linear-gradient(#e5e5e5 0%, transparent 100%)",
                    }}
                  />
                )}
              </div>

              {/* Right: content */}
              <div style={{ flex: 1 }}>
                <div style={{ color: "#171717", marginBottom: 8, fontSize: 14, fontWeight: 500 }}>{entry.title}</div>
                <div style={{ color: "#52525b" }}>{entry.body}</div>
              </div>
            </div>
          ))}
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
