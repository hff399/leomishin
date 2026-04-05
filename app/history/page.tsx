import PageLayout from "@/app/components/PageLayout";
import {
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
  COLOR_TEXT_SUBTLE,
  COLOR_BORDER,
  FONT_SERIF,
} from "@/app/lib/tokens";

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
    body: "Left everything else. One thesis: B2B founders can outgrow their market without ever paying for an ad \u2014 if they build the right content system. First clients within 30 days. The idea worked.",
  },
  {
    year: "2022",
    title: "Discovered the pattern",
    body: "The founders growing fastest weren\u2019t the ones with the biggest budgets. They were the ones who showed up. Consistently. On video. I reverse-engineered why it worked and started building around it.",
  },
  {
    year: "2021",
    title: "First content experiments",
    body: "Started publishing for my own projects and a handful of early-stage founders. No strategy \u2014 just volume and observation. Slowly learned what moved the needle. Most things don\u2019t. A few things compound.",
  },
  {
    year: "2019",
    title: "First steps",
    body: "Built small online projects while still in school. Made every beginner mistake there is. The most important lesson came early: distribution is everything. The best product with no audience is invisible.",
  },
];

export default function HistoryPage() {
  return (
    <PageLayout>
      {/* Header */}
      <div style={{ paddingTop: 80, marginBottom: 80 }}>
        <h1
          style={{
            fontFamily: FONT_SERIF,
            fontSize: 36,
            lineHeight: "52px",
            color: COLOR_TEXT_PRIMARY,
            margin: 0,
            fontWeight: 400,
          }}
        >
          My story.
        </h1>
        <p style={{ color: COLOR_TEXT_SECONDARY, marginTop: 16, marginBottom: 0 }}>
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
              <div style={{ color: COLOR_TEXT_SUBTLE, paddingTop: 2 }}>{entry.year}</div>
              {i < timeline.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: 28,
                    left: 0,
                    width: 1,
                    bottom: -48,
                    background: `linear-gradient(${COLOR_BORDER} 0%, transparent 100%)`,
                  }}
                />
              )}
            </div>

            {/* Right: content */}
            <div style={{ flex: 1 }}>
              <div style={{ color: COLOR_TEXT_PRIMARY, marginBottom: 8, fontSize: 14, fontWeight: 500 }}>{entry.title}</div>
              <div style={{ color: COLOR_TEXT_SECONDARY }}>{entry.body}</div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
