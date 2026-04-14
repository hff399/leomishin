import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
  FONT_HEADING,
  FONT_SANS,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_MUTED,
  COLOR_FAINT,
  COLOR_BORDER,
} from "@/app/lib/tokens";

interface RoleData {
  title: string;
  type: string;
  emailSubject: string;
  descriptionHeading: string;
  paragraphs: string[];
  requirements: string[];
  applyText: string;
}

const roles: Record<string, RoleData> = {
  "video-editor": {
    title: "Video Editor",
    type: "Project-based \u00b7 Remote",
    emailSubject: "Application%3A%20Video%20Editor",
    descriptionHeading: "About the role",
    paragraphs: [
      "YouTube-first editing \u2014 long-form interview-style videos with clean cuts, captions, and visual pacing that keeps people watching. You know how to make a 20-minute video feel like 8.",
      "You\u2019ll be editing videos for B2B founders \u2014 think thought leadership content, founder stories, and educational breakdowns. The tone is calm, professional, and polished. No flashy jump cuts \u2014 just tight editing that respects the viewer\u2019s time.",
      "This is a project-based, fully remote role. Each project comes with a clear brief, raw footage, and brand guidelines. We value fast turnarounds and low back-and-forth.",
    ],
    requirements: [
      "Portfolio of YouTube-style edits \u2014 long-form preferred",
      "Proficient in Premiere Pro or DaVinci Resolve",
      "Consistent turnaround under 3 business days per video",
      "Ability to add captions, lower thirds, and basic motion graphics",
      "Strong sense of pacing \u2014 you know when to cut and when to let a moment breathe",
      "Bonus: experience editing B2B, SaaS, or founder content",
    ],
    applyText:
      "Send a short note and a link to your portfolio or two to three YouTube-style edits you\u2019re proud of.",
  },
  "content-researcher": {
    title: "Content Researcher",
    type: "Part-time \u00b7 Remote",
    emailSubject: "Application%3A%20Content%20Researcher",
    descriptionHeading: "About the role",
    paragraphs: [
      "You\u2019ll dig for ideas, angles, and data that make content worth watching. The content we produce for B2B founders lives or dies by the quality of the research behind it \u2014 so this role matters.",
      "Your job is to find what\u2019s actually interesting \u2014 not just what\u2019s trending. You\u2019ll work closely with our content strategists to identify compelling angles, source credible data, and build research briefs that writers and editors can execute against.",
      "This is an async, part-time role. You\u2019ll get clear briefs, context on each client, and full ownership over the research phase.",
    ],
    requirements: [
      "Strong written English \u2014 you communicate clearly and concisely",
      "Experience researching B2B, SaaS, or tech topics",
      "Ability to identify compelling angles, not just surface-level summaries",
      "Fast, async communicator \u2014 you don\u2019t need hand-holding",
      "Comfortable working with Google Docs, Notion, or similar tools",
      "Bonus: experience supporting content creators or agencies",
    ],
    applyText:
      "Send a short note about your research background and include two or three examples of topics you\u2019d research well.",
  },
};

export function generateStaticParams() {
  return Object.keys(roles).map((role) => ({ role }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ role: string }>;
}): Promise<Metadata> {
  const { role } = await params;
  const data = roles[role];
  if (!data) return {};
  return {
    title: `${data.title} — Careers — Leo Mishin`,
    description: `Apply for the ${data.title} role.`,
  };
}

export default async function CareerRolePage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await params;
  const data = roles[role];
  if (!data) notFound();

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
          maxWidth: 650,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        {/* ── Back ── */}
        <Link
          href="/careers"
          style={{
            fontFamily: FONT_SANS,
            fontSize: 13,
            fontWeight: 500,
            color: COLOR_MUTED,
            textDecoration: "none",
            marginBottom: 20,
          }}
        >
          &larr; Careers
        </Link>

        {/* ── Badge ── */}
        <div
          style={{
            fontFamily: FONT_SANS,
            fontSize: 12,
            fontWeight: 500,
            color: COLOR_MUTED,
            background: "rgba(0,0,0,0.04)",
            borderRadius: 999,
            padding: "3px 12px",
          }}
        >
          {data.type}
        </div>

        {/* ── Title ── */}
        <h1
          style={{
            fontFamily: FONT_HEADING,
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: "1.4em",
            color: COLOR_PRIMARY,
            margin: 0,
          }}
        >
          {data.title}
        </h1>

        {/* ── Description ── */}
        <div
          style={{
            width: "100%",
            marginTop: 20,
            fontFamily: FONT_SANS,
            fontSize: 15,
            letterSpacing: "-0.02em",
            lineHeight: "1.6em",
          }}
        >
          <div
            style={{
              color: COLOR_MUTED,
              fontSize: 13,
              fontWeight: 500,
              marginBottom: 16,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
          >
            {data.descriptionHeading}
          </div>
          {data.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                color: COLOR_SECONDARY,
                marginTop: 0,
                marginBottom: i < data.paragraphs.length - 1 ? 16 : 0,
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* ── Separator ── */}
        <div
          style={{
            width: "100%",
            height: 1,
            background: COLOR_BORDER,
            margin: "30px 0",
          }}
        />

        {/* ── Requirements ── */}
        <div
          style={{
            width: "100%",
            fontFamily: FONT_SANS,
            fontSize: 15,
            letterSpacing: "-0.02em",
            lineHeight: "1.6em",
          }}
        >
          <div
            style={{
              color: COLOR_MUTED,
              fontSize: 13,
              fontWeight: 500,
              marginBottom: 16,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
          >
            Requirements
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {data.requirements.map((req) => (
              <li
                key={req}
                style={{
                  color: COLOR_SECONDARY,
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    marginTop: 9,
                    width: 3,
                    height: 3,
                    borderRadius: 999,
                    background: COLOR_MUTED,
                    flexShrink: 0,
                  }}
                />
                {req}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Separator ── */}
        <div
          style={{
            width: "100%",
            height: 1,
            background: COLOR_BORDER,
            margin: "30px 0",
          }}
        />

        {/* ── How to apply ── */}
        <div style={{ width: "100%", textAlign: "center" }}>
          <p
            style={{
              fontFamily: FONT_HEADING,
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: COLOR_PRIMARY,
              margin: "0 0 10px",
            }}
          >
            How to apply
          </p>
          <p
            style={{
              fontFamily: FONT_SANS,
              fontSize: 15,
              letterSpacing: "-0.02em",
              lineHeight: "1.6em",
              color: COLOR_SECONDARY,
              margin: "0 0 20px",
            }}
          >
            {data.applyText}
          </p>
          <a
            href={`mailto:leo@leomishin.com?subject=${data.emailSubject}`}
            style={{
              display: "inline-flex",
              height: 40,
              alignItems: "center",
              borderRadius: 9999,
              background: COLOR_PRIMARY,
              padding: "0 20px",
              fontSize: 14,
              fontWeight: 500,
              color: "white",
              textDecoration: "none",
              fontFamily: FONT_SANS,
              transition: "opacity 200ms",
            }}
          >
            leo@leomishin.com
          </a>
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
