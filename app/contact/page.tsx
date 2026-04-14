"use client";

import { useState } from "react";
import {
  FONT_HEADING,
  FONT_SANS,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_MUTED,
  COLOR_FAINT,
  COLOR_BORDER,
} from "@/app/lib/tokens";

const channels = [
  {
    label: "Email",
    value: "leo@leomishin.com",
    href: "mailto:leo@leomishin.com?subject=Hey%20Leo",
  },
  {
    label: "Twitter",
    value: "@leomishin",
    href: "https://twitter.com/leomishin",
  },
  {
    label: "LinkedIn",
    value: "leomishin",
    href: "https://linkedin.com/in/leomishin",
  },
  {
    label: "YouTube",
    value: "@leomishin",
    href: "https://youtube.com/@leomishin",
  },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("leo@leomishin.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

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
          Say hello.
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
          Building something interesting, or just want to think out loud
          together — I read everything.
        </p>

        {/* ── Copy email ── */}
        <button
          onClick={copyEmail}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            border: `1px solid ${COLOR_BORDER}`,
            borderRadius: 12,
            padding: "18px 20px",
            background: "transparent",
            cursor: "pointer",
            textAlign: "left",
            transition: "background 200ms",
            marginTop: 20,
            fontFamily: FONT_SANS,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          <div>
            <div
              style={{
                color: COLOR_PRIMARY,
                fontWeight: 500,
                fontSize: 15,
                marginBottom: 2,
              }}
            >
              leo@leomishin.com
            </div>
            <div style={{ color: COLOR_MUTED, fontSize: 13 }}>
              Click to copy
            </div>
          </div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 500,
              background: copied ? "#d1fae5" : "rgba(0,0,0,0.04)",
              borderRadius: 999,
              padding: "4px 12px",
              transition: "background 200ms, color 200ms",
              color: copied ? "#065f46" : COLOR_MUTED,
            }}
          >
            {copied ? "Copied!" : "Copy"}
          </div>
        </button>

        {/* ── Channels ── */}
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
          {channels.map((ch, i) => (
            <a
              key={ch.label}
              href={ch.href}
              target={ch.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 0",
                borderBottom:
                  i < channels.length - 1
                    ? `1px solid ${COLOR_BORDER}`
                    : "none",
                textDecoration: "none",
                transition: "opacity 200ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              <div style={{ color: COLOR_MUTED }}>{ch.label}</div>
              <div
                style={{
                  color: COLOR_PRIMARY,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {ch.value}
                <svg width={12} height={12} viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.5 12.5L13.5 6.5M13.5 6.5V11.5M13.5 6.5H8.5"
                    stroke={COLOR_MUTED}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* ── Note ── */}
        <p
          style={{
            fontFamily: FONT_SANS,
            fontSize: 15,
            letterSpacing: "-0.02em",
            lineHeight: "1.6em",
            color: COLOR_SECONDARY,
            margin: "30px 0 0",
          }}
        >
          If it&apos;s a project inquiry, give me enough context to say yes or
          no fast. I respond to everyone — usually within a day.
        </p>

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
