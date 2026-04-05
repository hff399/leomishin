import {
  COLOR_TEXT_MUTED,
  COLOR_BG_PAGE,
  FONT_SANS,
} from "@/app/lib/tokens";

const blurLayers = [1, 2, 3, 6, 8];

interface PageLayoutProps {
  children: React.ReactNode;
  maxWidth?: number;
  showFooter?: boolean;
  footerTrailing?: string;
}

export default function PageLayout({
  children,
  maxWidth = 580,
  showFooter = true,
  footerTrailing = "Tbilisi, GE",
}: PageLayoutProps) {
  return (
    <div
      style={{
        fontFamily: FONT_SANS,
        fontSize: 14,
        lineHeight: "24px",
        letterSpacing: "-0.14px",
        WebkitFontSmoothing: "antialiased",
        background: COLOR_BG_PAGE,
        color: COLOR_TEXT_MUTED,
        minHeight: "100vh",
        position: "relative",
        overflowX: "clip",
      }}
    >
      {/* Top blur overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 48,
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        {blurLayers.map((blur) => (
          <div
            key={`top-${blur}`}
            style={{
              position: "absolute",
              inset: 0,
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: "linear-gradient(#000 0%, #0000 100%)",
              WebkitMaskImage: "linear-gradient(#000 0%, #0000 100%)",
            }}
          />
        ))}
      </div>

      {/* Bottom blur overlay */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: 96,
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        {blurLayers.map((blur) => (
          <div
            key={`btm-${blur}`}
            style={{
              position: "absolute",
              inset: 0,
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: "linear-gradient(#0000 0%, #000 100%)",
              WebkitMaskImage: "linear-gradient(#0000 0%, #000 100%)",
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div style={{ maxWidth, margin: "0 auto", padding: "0 24px 288px" }}>
        {children}

        {showFooter && (
          <div
            style={{
              marginTop: 80,
              display: "flex",
              alignItems: "center",
              gap: "0 32px",
              fontSize: 14,
              letterSpacing: "-0.14px",
            }}
          >
            <div style={{ width: 144, textAlign: "right", color: COLOR_TEXT_MUTED }}>
              &copy; 2026 Leo Mishin
            </div>
            <a
              href="https://scalewithcontent.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: COLOR_TEXT_MUTED, textDecoration: "none" }}
            >
              Scale with Content
            </a>
            <div style={{ marginLeft: "auto", color: COLOR_TEXT_MUTED }}>
              {footerTrailing}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
