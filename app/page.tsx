import { Metadata } from "next";
import {
  FONT_HEADING,
  FONT_BODY,
  FONT_SANS,
  COLOR_PRIMARY,
  COLOR_FAINT,
  COLOR_LINK,
} from "@/app/lib/tokens";

export const metadata: Metadata = {
  title: "Leo Mishin",
  description:
    "Building an ecosystem of new-money digital businesses — rich on cashflow, high in enterprise value, and built to scale without breaking.",
};

const bodyStyle: React.CSSProperties = {
  margin: "0 0 20px",
};

export default function HomePage() {
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
        }}
      >
        {/* ── Name ── */}
        <p
          style={{
            fontFamily: FONT_HEADING,
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: "1.6em",
            color: COLOR_PRIMARY,
            margin: "0 0 16px",
          }}
        >
          Leo Mishin
        </p>

        {/* ── Body text ── */}
        <div
          style={{
            fontFamily: FONT_BODY,
            fontSize: 17,
            letterSpacing: "-0.01em",
            lineHeight: "1.7em",
            color: "rgba(0, 0, 0, 0.72)",
            width: "100%",
          }}
        >
          <p style={bodyStyle}>
            I&apos;m Leo Mishin, and I&apos;m on a vision to build an ecosystem
            of new-money digital businesses — rich on cashflow, high in
            enterprise value, and built to scale without breaking.
          </p>

          <p style={bodyStyle}>
            Over the past 3+ years, I&apos;ve been in the trenches building
            exactly that. I launched a cold email agency from scratch that
            generated $240K in client revenue.
          </p>

          <p style={bodyStyle}>
            24.08.2025 I became CMO and equite holder at Iolipay — a legal tech
            startup where we&apos;re reshaping how businesses handle payments and
            compliance, solving real problems that directly impact bottom lines.
          </p>

          <p style={bodyStyle}>
            Right now, I&apos;m scaling:
            <br />
            ScaleWContent (B2B YouTube agency)
            <br />
            Medved VPN (the most robust VPN service)
            <br />
            Sando AI (helpdesk + AI agent that works perfect with georgian
            language)
            <br />
            <a
              href="https://mlndev.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: COLOR_LINK,
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              MLN dev
            </a>
          </p>

          <p style={bodyStyle}>
            Here&apos;s what drives everything I build: cashflow first,
            enterprise value second, and systems that work without you having to
            babysit them.
          </p>

          <p style={bodyStyle}>
            I operate on two principles: be unique and move with speed. You
            can&apos;t win playing the same game as everyone else, and you
            can&apos;t capitalize on opportunities if you&apos;re moving slow.
          </p>

          <p style={{ margin: 0 }}>
            Outside of work, you&apos;ll find me in the gym, snowboarding, in
            nature, or exploring the world.
          </p>
        </div>

        {/* ── Careers link ── */}
        <div style={{ padding: "28px 0" }}>
          <a
            href="/careers"
            style={{
              fontFamily: FONT_SANS,
              fontWeight: 500,
              fontSize: 15,
              letterSpacing: "-0.02em",
              color: COLOR_LINK,
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            Careers
          </a>
        </div>

        {/* ── Video ── */}
        <div
          style={{
            width: "100%",
            aspectRatio: "651 / 501",
            overflow: "hidden",
            borderRadius: 2,
          }}
        >
          <video
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />
        </div>

        {/* ── Footer ── */}
        <p
          style={{
            fontFamily: FONT_HEADING,
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: "1.6em",
            textAlign: "center",
            color: COLOR_FAINT,
            width: "100%",
            margin: "32px 0 0",
          }}
        >
          &copy; Leonid Mishin 2026
        </p>
      </div>
    </div>
  );
}
