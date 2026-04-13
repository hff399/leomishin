import { Metadata } from "next";
import {
  FONT_HEADING,
  FONT_SANS,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_MUTED,
  COLOR_FAINT,
  COLOR_BORDER,
} from "@/app/lib/tokens";

export const metadata: Metadata = {
  title: "History — Leo Mishin",
  description:
    "How I went from zero to building multiple companies — and what I learned along the way.",
};

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
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "128px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 650,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        {/* ── Heading ── */}
        <p
          style={{
            fontFamily: FONT_HEADING,
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: "1.6em",
            color: COLOR_PRIMARY,
            margin: 0,
          }}
        >
          My story.
        </p>

        <p
          style={{
            fontFamily: FONT_SANS,
            fontSize: 18,
            letterSpacing: "-0.02em",
            lineHeight: "1.6em",
            color: COLOR_FAINT,
            margin: 0,
          }}
        >
          How I went from zero to building multiple companies — and what I
          learned along the way.
        </p>

        {/* ── Timeline ── */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop: 30,
            fontFamily: FONT_SANS,
            fontSize: 15,
            letterSpacing: "-0.02em",
            lineHeight: "1.6em",
          }}
        >
          {timeline.map((entry, i) => (
            <div
              key={entry.year}
              style={{
                display: "flex",
                gap: 32,
                paddingBottom: i < timeline.length - 1 ? 40 : 0,
                position: "relative",
              }}
            >
              {/* Year + line */}
              <div style={{ width: 48, flexShrink: 0, position: "relative" }}>
                <div
                  style={{
                    color: COLOR_MUTED,
                    fontSize: 13,
                    fontWeight: 500,
                    paddingTop: 1,
                  }}
                >
                  {entry.year}
                </div>
                {i < timeline.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 24,
                      left: 0,
                      width: 1,
                      bottom: 0,
                      background: `linear-gradient(${COLOR_BORDER} 0%, transparent 100%)`,
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    color: COLOR_PRIMARY,
                    fontSize: 15,
                    fontWeight: 500,
                    marginBottom: 6,
                  }}
                >
                  {entry.title}
                </div>
                <div style={{ color: COLOR_SECONDARY }}>{entry.body}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer ── */}
        <p
          style={{
            fontFamily: FONT_HEADING,
            fontSize: 18,
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: "1.6em",
            textAlign: "center",
            color: COLOR_FAINT,
            width: "100%",
            margin: "60px 0 0",
          }}
        >
          &copy; Leonid Mishin 2026
        </p>
      </div>
    </div>
  );
}
