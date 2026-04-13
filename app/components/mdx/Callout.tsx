interface CalloutProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "tip";
}

const config = {
  info:    { label: "Note",      color: "#a1a1aa" },
  warning: { label: "Important", color: "#d97706" },
  tip:     { label: "Tip",       color: "#171717" },
};

export default function Callout({ children, type = "info" }: CalloutProps) {
  const { label, color } = config[type];

  return (
    <div style={{ margin: "36px 0" }}>
      {/* Top rule */}
      <div style={{ height: 1, background: "#e5e5e5", marginBottom: 16 }} />

      {/* Label */}
      <div
        style={{
          fontFamily: "var(--font-ibm-plex-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.24px",
          color,
          marginBottom: 10,
        }}
      >
        {label}
      </div>

      {/* Body */}
      <div
        style={{
          fontFamily: "var(--font-eb-garamond), ui-serif, Georgia, serif",
          fontSize: 18,
          lineHeight: "28px",
          color: "#52525b",
          fontStyle: "italic",
        }}
      >
        {children}
      </div>

      {/* Bottom rule */}
      <div style={{ height: 1, background: "#e5e5e5", marginTop: 16 }} />
    </div>
  );
}
