import PageLayout from "@/app/components/PageLayout";
import Dots from "@/app/components/Dots";
import CopyButton from "@/app/components/CopyButton";
import {
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
  COLOR_TEXT_SUBTLE,
  COLOR_TEXT_MUTED,
  COLOR_BORDER_LIGHT,
  FONT_SERIF,
} from "@/app/lib/tokens";

const channels = [
  { label: "Email", value: "hello@scalewithcontent.com", href: "mailto:hello@scalewithcontent.com?subject=Hey%20Leo" },
  { label: "Twitter", value: "@leomishin", href: "https://twitter.com/leomishin" },
  { label: "LinkedIn", value: "leomishin", href: "https://linkedin.com/in/leomishin" },
  { label: "YouTube", value: "@leomishin", href: "https://youtube.com/@leomishin" },
];

export default function ContactPage() {
  return (
    <PageLayout footerTrailing="Made with ❤️">
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
          Say hello.
        </h1>
        <p style={{ color: COLOR_TEXT_SECONDARY, marginTop: 16, marginBottom: 0 }}>
          Building something interesting, or just want to think out loud together — I read everything.
        </p>
      </div>

      {/* Primary CTA */}
      <CopyButton />

      {/* Channels */}
      <div style={{ color: COLOR_TEXT_SECONDARY, marginBottom: 24 }}>Find me here</div>
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
              borderBottom: i < channels.length - 1 ? `1px solid ${COLOR_BORDER_LIGHT}` : "none",
              textDecoration: "none",
            }}
          >
            <div style={{ color: COLOR_TEXT_SUBTLE }}>{ch.label}</div>
            <div style={{ color: COLOR_TEXT_PRIMARY, display: "flex", alignItems: "center", gap: 8 }}>
              {ch.value}
              <svg width={14} height={14} viewBox="0 0 20 20" fill="none">
                <path d="M7.5 12.5L13.5 6.5M13.5 6.5V11.5M13.5 6.5H8.5" stroke={COLOR_TEXT_MUTED} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      <Dots />

      {/* Note */}
      <p style={{ color: COLOR_TEXT_SECONDARY }}>
        If it&apos;s a project inquiry, give me enough context to say yes or no fast. I respond to everyone — usually within a day.
      </p>
    </PageLayout>
  );
}
