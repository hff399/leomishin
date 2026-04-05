import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Writing — Leo Mishin",
  description: "What I'm thinking about, building, and learning. Published when it's worth saying.",
};

function Dots() {
  return (
    <div style={{ margin: "40px 0", display: "flex", gap: "6px" }}>
      <div style={{ width: 2, height: 2, borderRadius: 999, background: "#a1a1aa" }} />
      <div style={{ width: 2, height: 2, borderRadius: 999, background: "#a1a1aa" }} />
      <div style={{ width: 2, height: 2, borderRadius: 999, background: "#a1a1aa" }} />
    </div>
  );
}

export default function BlogPage() {
  const posts = getAllPosts();

  // Serialize posts for the client component (strip content)
  const postsData = posts.map(({ content: _content, ...rest }) => rest);

  const blurLayers = [1, 2, 3, 6, 8];

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
        <div style={{ paddingTop: 80 }}>
          <div
            style={{
              fontFamily: "var(--font-ibm-plex-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.24px",
              color: "#a1a1aa",
              marginBottom: 12,
            }}
          >
            WRITING
          </div>
          <h1
            style={{
              fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
              fontSize: 36,
              lineHeight: "44px",
              color: "#171717",
              margin: 0,
              fontWeight: 400,
            }}
          >
            Essays &amp; Notes
          </h1>
          <p
            style={{
              color: "#52525b",
              marginTop: 16,
              marginBottom: 0,
            }}
          >
            What I&apos;m thinking about, building, and learning. Published when it&apos;s worth saying.
          </p>
        </div>

        <Dots />

        <BlogClient posts={postsData} />
      </div>
    </div>
  );
}
