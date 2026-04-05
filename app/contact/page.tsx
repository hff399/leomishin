"use client";

import { useState } from "react";

const channels = [
  { label: "Email", value: "hello@scalewithcontent.com", href: "mailto:hello@scalewithcontent.com?subject=Hey%20Leo" },
  { label: "Twitter", value: "@leomishin", href: "https://twitter.com/leomishin" },
  { label: "LinkedIn", value: "leomishin", href: "https://linkedin.com/in/leomishin" },
  { label: "YouTube", value: "@leomishin", href: "https://youtube.com/@leomishin" },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const blurLayers = [1, 2, 3, 6, 8];

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@scalewithcontent.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

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
            Say hello.
          </h1>
          <p style={{ color: "#52525b", marginTop: 16, marginBottom: 0 }}>
            Building something interesting, or just want to think out loud together — I read everything.
          </p>
        </div>

        {/* Primary CTA */}
        <button
          onClick={copyEmail}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid #e5e5e5",
            borderRadius: 16,
            padding: "20px 24px",
            background: "transparent",
            cursor: "pointer",
            textAlign: "left",
            transition: "background 300ms",
            marginBottom: 40,
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.02)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
        >
          <div>
            <div style={{ color: "#171717", fontWeight: 500, marginBottom: 4, fontFamily: "inherit", fontSize: 14 }}>
              hello@scalewithcontent.com
            </div>
            <div style={{ color: "#737373", fontFamily: "inherit", fontSize: 14 }}>Click to copy</div>
          </div>
          <div
            style={{
              fontSize: 12,
              background: copied ? "#d1fae5" : "#ebebeb",
              borderRadius: 999,
              padding: "4px 12px",
              transition: "background 200ms, color 200ms",
              color: copied ? "#065f46" : "#737373",
              flexShrink: 0,
            }}
          >
            {copied ? "Copied!" : "Copy"}
          </div>
        </button>

        {/* Channels */}
        <div style={{ color: "#52525b", marginBottom: 24 }}>Find me here</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
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
                padding: "16px 0",
                borderBottom: i < channels.length - 1 ? "1px solid #f0f0f0" : "none",
                textDecoration: "none",
                transition: "opacity 200ms",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              <div style={{ color: "#737373" }}>{ch.label}</div>
              <div style={{ color: "#171717", display: "flex", alignItems: "center", gap: 8 }}>
                {ch.value}
                <svg width={14} height={14} viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 12.5L13.5 6.5M13.5 6.5V11.5M13.5 6.5H8.5" stroke="#a1a1aa" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Spacer */}
        <div style={{ margin: "80px 0", display: "flex", gap: 6 }}>
          {[0,1,2].map(i => <div key={i} style={{ width: 2, height: 2, borderRadius: 999, background: "#a1a1aa" }} />)}
        </div>

        {/* Note */}
        <p style={{ color: "#52525b" }}>
          If it&apos;s a project inquiry, give me enough context to say yes or no fast. I respond to everyone — usually within a day.
        </p>

        {/* Footer */}
        <div style={{ marginTop: 80, display: "flex", alignItems: "center", gap: "0 32px", fontSize: 14 }}>
          <div style={{ width: 144, textAlign: "right", color: "#a1a1aa" }}>&copy; 2026 Leo Mishin</div>
          <a href="https://scalewithcontent.com" target="_blank" rel="noopener noreferrer" style={{ color: "#a1a1aa", textDecoration: "none" }}>Scale with Content</a>
          <div style={{ marginLeft: "auto", color: "#a1a1aa" }}>Made with ❤️</div>
        </div>
      </div>

    </div>
  );
}
