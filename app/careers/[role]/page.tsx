import { notFound } from "next/navigation";
import { Metadata } from "next";
import PageLayout from "@/app/components/PageLayout";
import {
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
  COLOR_TEXT_SUBTLE,
  COLOR_TEXT_MUTED,
  COLOR_BG_BADGE,
  COLOR_BORDER,
  FONT_SERIF,
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
    description: `Apply for the ${data.title} role at Scale with Content.`,
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
    <PageLayout footerTrailing="Tbilisi, GE">
      {/* Back link */}
      <div style={{ paddingTop: 80, marginBottom: 48 }}>
        <a
          href="/careers"
          style={{
            color: COLOR_TEXT_SUBTLE,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <svg width={14} height={14} viewBox="0 0 20 20" fill="none">
            <path
              d="M12.5 7.5L6.5 13.5M6.5 13.5V8.5M6.5 13.5H11.5"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to careers
        </a>
      </div>

      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div
          style={{
            fontSize: 12,
            color: COLOR_TEXT_SUBTLE,
            background: COLOR_BG_BADGE,
            borderRadius: 999,
            padding: "2px 10px",
            display: "inline-block",
            marginBottom: 16,
          }}
        >
          {data.type}
        </div>
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
          {data.title}
        </h1>
      </div>

      {/* Description */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ color: COLOR_TEXT_SECONDARY, marginBottom: 24 }}>
          {data.descriptionHeading}
        </div>
        {data.paragraphs.map((p, i) => (
          <p
            key={i}
            style={{
              color: COLOR_TEXT_SECONDARY,
              marginTop: 0,
              marginBottom: i < data.paragraphs.length - 1 ? 16 : 0,
            }}
          >
            {p}
          </p>
        ))}
      </div>

      {/* Spacer dots */}
      <div style={{ margin: "48px 0", display: "flex", gap: 6 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 2,
              height: 2,
              borderRadius: 999,
              background: COLOR_TEXT_MUTED,
            }}
          />
        ))}
      </div>

      {/* Requirements */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ color: COLOR_TEXT_SECONDARY, marginBottom: 24 }}>
          Requirements
        </div>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {data.requirements.map((req) => (
            <li
              key={req}
              style={{
                color: COLOR_TEXT_SECONDARY,
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
                  background: COLOR_TEXT_MUTED,
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              {req}
            </li>
          ))}
        </ul>
      </div>

      {/* Spacer dots */}
      <div style={{ margin: "48px 0", display: "flex", gap: 6 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 2,
              height: 2,
              borderRadius: 999,
              background: COLOR_TEXT_MUTED,
            }}
          />
        ))}
      </div>

      {/* How to apply */}
      <div
        style={{
          padding: 24,
          border: `1px solid ${COLOR_BORDER}`,
          borderRadius: 16,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: FONT_SERIF,
            fontSize: 24,
            color: COLOR_TEXT_PRIMARY,
            marginBottom: 12,
          }}
        >
          How to apply
        </div>
        <p style={{ color: COLOR_TEXT_SECONDARY, marginBottom: 20, marginTop: 0 }}>
          {data.applyText}
        </p>
        <a
          href={`mailto:hello@scalewithcontent.com?subject=${data.emailSubject}`}
          style={{
            display: "inline-block",
            background: COLOR_TEXT_PRIMARY,
            color: "white",
            borderRadius: 999,
            padding: "8px 20px",
            textDecoration: "none",
            fontSize: 14,
            transition: "opacity 200ms",
          }}
        >
          hello@scalewithcontent.com
        </a>
      </div>
    </PageLayout>
  );
}
