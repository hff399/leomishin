import { Metadata } from "next";
import {
  FONT_HEADING,
  FONT_BODY,
  FONT_SANS,
  COLOR_PRIMARY,
  COLOR_FAINT,
  COLOR_MUTED,
  COLOR_BORDER,
  COLOR_LINK,
} from "@/app/lib/tokens";

export const metadata: Metadata = {
  title: "Leo Mishin",
  description:
    "18-year-old entrepreneur. Co-founder of mono.ge, founder of Scale with Content and MLNxDev.",
};

const TEXT_COLOR = "rgba(0, 0, 0, 0.72)";

const para: React.CSSProperties = { margin: "0 0 20px" };
const paraLast: React.CSSProperties = { margin: 0 };

const ventures = [
  {
    name: "mono.ge",
    role: "Co-founder · CTO / CPO / CMO",
    description:
      "Full-stack legal platform for Georgia. Company registration, tax, accounting, residence permits, compliance — rebuilt from the ground up with software.",
    href: "https://mono.ge",
  },
  {
    name: "Scale with Content",
    role: "Founder",
    description:
      "YouTube-first agency for B2B founders. Helped Denis Shatalin generate $52K in YouTube-attributed revenue and grow his personal brand 2.6x in a few months.",
    href: "http://swc-landing-production.up.railway.app/",
  },
  {
    name: "MLNxDev",
    role: "Founder",
    description:
      "AI integration and full-stack development for small businesses. Web apps, automation, and AI tooling — built fast, built to last.",
    href: "https://mlnx.dev",
  },
];

const socials = [
  { label: "Twitter", href: "https://twitter.com/leomishin" },
  { label: "YouTube", href: "https://youtube.com/@leomishin" },
  { label: "LinkedIn", href: "https://linkedin.com/in/leomishin" },
  { label: "Email", href: "mailto:leo@leomishin.com" },
];

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
        {/* ── Name ── */}
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
          Leo Mishin
        </h1>

        {/* ── Bio ── */}
        <div
          style={{
            fontFamily: FONT_BODY,
            fontSize: 17,
            letterSpacing: "-0.01em",
            lineHeight: "1.75em",
            color: TEXT_COLOR,
            width: "100%",
          }}
        >
          <p style={para}>
            I&apos;m 18. I&apos;m an entrepreneur.
          </p>

          <p style={para}>
            At mono.ge, I&apos;m co-founder and CTO/CPO/CMO — we&apos;re
            rebuilding how legal services work in Georgia. Company registration,
            tax, compliance, residence permits — one platform replacing twenty
            middlemen. I joined as CMO in August 2025 and moved to co-founder
            within months.
          </p>

          <p style={para}>
            At Scale with Content, I built a YouTube agency that generated $52K
            in attributed revenue for Denis Shatalin and grew his brand 2.6x in
            a few months. We turn founder expertise into organic distribution
            that compounds.
          </p>

          <p style={para}>
            At MLNxDev, I run an AI integration and full-stack development
            agency for small businesses — web apps, automation, and tooling
            that actually ships.
          </p>

          <p style={para}>
            Before all of this: I wrote my first code at seven, shipped SaaS
            products by fifteen, then built a cold email agency that generated
            $240K in pipeline for B2B SaaS companies. Every failure taught me
            the same lesson — distribution beats product. Systems beat hustle.
          </p>

          <p style={paraLast}>
            I don&apos;t pick one lane. I build across disciplines because
            the best solutions come from connecting ideas that don&apos;t
            usually sit together.
          </p>
        </div>

        {/* ── Ventures ── */}
        <div style={{ width: "100%", marginTop: 56 }}>
          <p
            style={{
              fontFamily: FONT_SANS,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: COLOR_MUTED,
              margin: "0 0 20px",
            }}
          >
            Current ventures
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {ventures.map((v, i) => (
              <a
                key={v.name}
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "20px 0",
                  borderTop: `1px solid ${COLOR_BORDER}`,
                  borderBottom:
                    i === ventures.length - 1
                      ? `1px solid ${COLOR_BORDER}`
                      : "none",
                  textDecoration: "none",
                  transition: "opacity 150ms",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 15,
                      fontWeight: 500,
                      color: COLOR_PRIMARY,
                    }}
                  >
                    {v.name}
                  </span>
                  <span
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 12,
                      color: COLOR_MUTED,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {v.role}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: 14,
                    lineHeight: "1.6em",
                    letterSpacing: "-0.01em",
                    color: TEXT_COLOR,
                    margin: "6px 0 0",
                  }}
                >
                  {v.description}
                </p>
              </a>
            ))}
          </div>
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

        {/* ── Socials ── */}
        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 48,
            fontFamily: FONT_SANS,
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="social-link"
              style={{
                color: COLOR_MUTED,
                textDecoration: "none",
                transition: "color 200ms",
              }}
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* ── Footer ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 48,
          }}
        >
          <p
            style={{
              fontFamily: FONT_SANS,
              fontSize: 12,
              color: COLOR_FAINT,
              margin: 0,
            }}
          >
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
              transition: "opacity 200ms",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gradient-banking.png"
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
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
