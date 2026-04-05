"use client";

import PageLayout from "@/app/components/PageLayout";
import Dots from "@/app/components/Dots";
import {
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
  COLOR_TEXT_MUTED,
  COLOR_TEXT_SUBTLE,
  COLOR_BORDER,
  COLOR_BG_BADGE,
  FONT_SERIF,
} from "@/app/lib/tokens";

const roleHrefs: Record<string, string> = {
  "Content Researcher": "/careers/content-researcher",
  "Video Editor": "/careers/video-editor",
};

const roles = [
  {
    title: "Content Researcher",
    type: "Part-time \u00b7 Remote",
    description:
      "You find the angles others miss. Ideas, data, and narratives that make content worth stopping for \u2014 not because it\u2019s trending, but because it\u2019s true and timely.",
    requirements: ["Strong written English", "Experience with B2B or tech topics", "Fast, async communicator"],
  },
  {
    title: "Video Editor",
    type: "Project-based \u00b7 Remote",
    description:
      "Long-form YouTube editing with the pacing instincts of a filmmaker. You know how to hold attention for 20 minutes in a world designed to steal it.",
    requirements: ["Portfolio of YouTube-style edits", "Premiere Pro or DaVinci Resolve", "Turnaround under 3 business days"],
  },
];

const values = [
  { label: "Async first", text: "No status meetings. Results are the only status update that matters." },
  { label: "Ownership, not execution", text: "You get the brief and the context. What you do with it is yours. We don\u2019t manage \u2014 we trust." },
  { label: "Quality is the moat", text: "Every piece represents a brand someone spent years building. Good isn\u2019t enough. It has to be excellent." },
  { label: "Think in systems", text: "We build infrastructure, not one-offs. If it can\u2019t scale, we don\u2019t build it." },
];

export default function CareersPage() {
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
          Build with us.
        </h1>
        <p style={{ color: COLOR_TEXT_SECONDARY, marginTop: 16, marginBottom: 0 }}>
          Small team. High leverage. We don&apos;t hire for roles — we hire for ownership.
        </p>
      </div>

      {/* Open roles */}
      <div style={{ color: COLOR_TEXT_SECONDARY, marginBottom: 32 }}>Open roles</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {roles.map((role) => (
          <a
            key={role.title}
            href={roleHrefs[role.title]}
            style={{
              display: "block",
              border: `1px solid ${COLOR_BORDER}`,
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
              <div style={{ color: COLOR_TEXT_PRIMARY, fontWeight: 500 }}>{role.title}</div>
              <div
                style={{
                  fontSize: 12,
                  color: COLOR_TEXT_SUBTLE,
                  background: COLOR_BG_BADGE,
                  borderRadius: 999,
                  padding: "2px 10px",
                  whiteSpace: "nowrap",
                }}
              >
                {role.type}
              </div>
            </div>
            <p style={{ color: COLOR_TEXT_SECONDARY, marginBottom: 16, marginTop: 0 }}>{role.description}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
              {role.requirements.map((req) => (
                <li key={req} style={{ color: COLOR_TEXT_SUBTLE, display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ marginTop: 4, width: 3, height: 3, borderRadius: 999, background: COLOR_TEXT_MUTED, flexShrink: 0, display: "inline-block" }} />
                  {req}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>

      <Dots />

      {/* Values */}
      <div style={{ color: COLOR_TEXT_SECONDARY, marginBottom: 32 }}>How we work</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {values.map((v) => (
          <div key={v.label} style={{ display: "flex", gap: 40 }}>
            <div style={{ width: 120, flexShrink: 0, color: COLOR_TEXT_PRIMARY, fontWeight: 500 }}>{v.label}</div>
            <div style={{ color: COLOR_TEXT_SECONDARY }}>{v.text}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ margin: "80px 0 0", padding: 24, border: `1px solid ${COLOR_BORDER}`, borderRadius: 16, textAlign: "center" }}>
        <div
          style={{
            fontFamily: FONT_SERIF,
            fontSize: 24,
            color: COLOR_TEXT_PRIMARY,
            marginBottom: 12,
          }}
        >
          Think you belong here?
        </div>
        <p style={{ color: COLOR_TEXT_SECONDARY, marginBottom: 20, marginTop: 0 }}>
          Send a short note: what you do, what you&apos;ve built, and why this matters to you.
        </p>
        <a
          href="mailto:hello@scalewithcontent.com?subject=Careers%20Inquiry"
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
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
        >
          hello@scalewithcontent.com
        </a>
      </div>
    </PageLayout>
  );
}
