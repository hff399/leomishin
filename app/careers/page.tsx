import { Metadata } from "next";
import {
  FONT_HEADING,
  FONT_BODY,
  FONT_SANS,
  COLOR_PRIMARY,
  COLOR_FAINT,
  COLOR_MUTED,
  COLOR_BORDER,
} from "@/app/lib/tokens";

export const metadata: Metadata = {
  title: "Careers — Leo Mishin",
  description:
    "Work with me. We're looking for generalists — A-players who learn fast, own outcomes, and operate across disciplines.",
};

const TEXT_COLOR = "rgba(0, 0, 0, 0.72)";

const para: React.CSSProperties = { margin: "0 0 18px" };
const paraLast: React.CSSProperties = { margin: 0 };

const sectionLabel: React.CSSProperties = {
  fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  color: "rgba(0, 0, 0, 0.35)",
  margin: "0 0 16px",
};

const bodyWrap: React.CSSProperties = {
  fontFamily: "'Ancizar Serif', ui-serif, Georgia, serif",
  fontSize: 16,
  letterSpacing: "-0.01em",
  lineHeight: "1.75em",
  color: TEXT_COLOR,
  width: "100%",
};

const values = [
  { label: "Generalists", text: "Good at many things, exceptional at one. You learn across disciplines because the best work happens at the intersections." },
  { label: "Ownership", text: "You get context, not instructions. What you do with it defines the role." },
  { label: "Speed", text: "Opportunities have a half-life. We move before the window closes." },
  { label: "Craft", text: "The difference between good and great is the extra pass. We take it." },
  { label: "Integrity", text: "Say what you mean, do what you say. No politics, no games." },
];

export default function CareersPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "128px 24px 80px",
      }}
    >
      <div
        style={{
          maxWidth: 620,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* ── Header ── */}
        <h1
          style={{
            fontFamily: FONT_HEADING,
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: "1.5em",
            color: COLOR_PRIMARY,
            margin: "0 0 24px",
          }}
        >
          Work with us
        </h1>

        <div style={bodyWrap}>
          <p style={para}>
            We run three companies across legal tech, content, and software.
            Small teams, high leverage. Every person shapes the outcome.
          </p>
          <p style={paraLast}>
            We&apos;re looking for generalists — A-players who don&apos;t fit
            into one box. People who learn across disciplines, connect ideas
            that don&apos;t usually sit together, and care more about solving
            the problem than protecting their job title.
          </p>
        </div>

        {/* ── Who we're looking for ── */}
        <div style={{ width: "100%", marginTop: 56 }}>
          <p style={sectionLabel}>Who we&apos;re looking for</p>
          <div style={bodyWrap}>
            <p style={para}>
              The best people we&apos;ve worked with aren&apos;t defined by one
              skill. They&apos;re good at many things and exceptional at one.
              They pick up new tools in days, not months. They see the whole
              system, not just their corner of it.
            </p>
            <p style={para}>
              You don&apos;t wait to be told what to do. You see what needs
              doing, you figure out how, and you ship it. You treat every piece
              of work like it has your name on it — because it does.
            </p>
            <p style={paraLast}>
              Character matters as much as competence. We operate on trust,
              transparency, and direct feedback. No politics. No hierarchy for
              the sake of hierarchy.
            </p>
          </div>
        </div>

        {/* ── What we're building ── */}
        <div style={{ width: "100%", marginTop: 56 }}>
          <p style={sectionLabel}>What we&apos;re building</p>
          <div style={bodyWrap}>
            <p style={para}>
              <span style={{ color: COLOR_PRIMARY, fontWeight: 500, fontFamily: FONT_SANS, fontSize: 14 }}>mono.ge</span>
              {" "}— Legal platform for Georgia. Company registration, tax,
              compliance, residence permits. Software replacing paperwork.
            </p>
            <p style={para}>
              <span style={{ color: COLOR_PRIMARY, fontWeight: 500, fontFamily: FONT_SANS, fontSize: 14 }}>Scale with Content</span>
              {" "}— YouTube agency for B2B founders. Strategy, production,
              growth. Turning founder expertise into organic revenue.
            </p>
            <p style={paraLast}>
              <span style={{ color: COLOR_PRIMARY, fontWeight: 500, fontFamily: FONT_SANS, fontSize: 14 }}>MLNxDev</span>
              {" "}— AI integration and full-stack development for small
              businesses. Web apps, automation, tooling.
            </p>
          </div>
        </div>

        {/* ── What we value ── */}
        <div style={{ width: "100%", marginTop: 56 }}>
          <p style={sectionLabel}>What we value</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {values.map((v, i) => (
              <div
                key={v.label}
                style={{
                  display: "flex",
                  gap: 24,
                  padding: "16px 0",
                  borderTop: `1px solid ${COLOR_BORDER}`,
                  borderBottom:
                    i === values.length - 1
                      ? `1px solid ${COLOR_BORDER}`
                      : "none",
                  fontFamily: FONT_SANS,
                  fontSize: 14,
                  lineHeight: "1.6em",
                  letterSpacing: "-0.01em",
                }}
              >
                <span
                  style={{
                    width: 88,
                    flexShrink: 0,
                    fontWeight: 500,
                    color: COLOR_PRIMARY,
                  }}
                >
                  {v.label}
                </span>
                <span style={{ color: TEXT_COLOR }}>{v.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── How we work ── */}
        <div style={{ width: "100%", marginTop: 56 }}>
          <p style={sectionLabel}>How we work</p>
          <div style={bodyWrap}>
            <p style={para}>
              We&apos;re a family and a sports team. We look out for each other,
              we push each other, and we hold each other to a high standard.
              When someone wins, we all win.
            </p>
            <p style={paraLast}>
              You&apos;ll have direct access to decision-making. Context on the
              full business, not just your task list. The people who build these
              companies grow with them — real equity, real opportunity, real
              skin in the game.
            </p>
          </div>
        </div>

        {/* ── Apply ── */}
        <div style={{ width: "100%", marginTop: 56 }}>
          <p style={sectionLabel}>Interested?</p>
          <div style={bodyWrap}>
            <p style={{ margin: "0 0 20px" }}>
              Send a short note: what you do, what you&apos;ve built, and which
              venture interests you. We read everything.
            </p>
          </div>
          <a
            href="mailto:leo@leomishin.com?subject=Careers"
            style={{
              display: "inline-flex",
              height: 36,
              alignItems: "center",
              borderRadius: 9999,
              background: COLOR_PRIMARY,
              padding: "0 18px",
              fontSize: 13,
              fontWeight: 500,
              color: "white",
              textDecoration: "none",
              fontFamily: FONT_SANS,
            }}
          >
            leo@leomishin.com
          </a>
        </div>

        {/* ── Video ── */}
        <div
          style={{
            width: "100%",
            aspectRatio: "651 / 501",
            overflow: "hidden",
            borderRadius: 2,
            marginTop: 48,
          }}
        >
          <video
            src="/videos/careers.mp4"
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 32,
          }}
        >
          <p style={{ fontFamily: FONT_SANS, fontSize: 12, color: COLOR_FAINT, margin: 0 }}>
            &copy; 2026 Leo Mishin
          </p>
          <a
            href="https://mlnx.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "relative",
              display: "inline-flex",
              overflow: "hidden",
              borderRadius: 9999,
              padding: 3,
              textDecoration: "none",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gradient-banking.png"
              alt=""
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <span
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                borderRadius: 9999,
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                padding: "4px 12px",
                fontFamily: FONT_SANS,
                fontSize: 12,
                fontWeight: 500,
                color: COLOR_PRIMARY,
              }}
            >
              Developed by MLNx dev
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
