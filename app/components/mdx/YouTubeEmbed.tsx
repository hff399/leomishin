"use client";

interface YouTubeEmbedProps {
  url: string;
  caption?: string;
  mode?: "embed" | "redirect";
}

function extractVideoId(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1);
    return u.searchParams.get("v") ?? url;
  } catch {
    return url; // assume raw video ID
  }
}

export default function YouTubeEmbed({ url, caption, mode = "embed" }: YouTubeEmbedProps) {
  const videoId = extractVideoId(url);
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div style={{ margin: "36px 0" }}>
      {mode === "redirect" ? (
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block", textDecoration: "none" }}
        >
          <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", border: "1px solid #e5e5e5" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={caption ?? "YouTube video"}
              style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover" }}
            />
            {/* Play button overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.25)",
                transition: "background 200ms",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.92)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg viewBox="0 0 24 24" width={20} height={20} fill="#171717">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      ) : (
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: 10,
            border: "1px solid #e5e5e5",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={caption ?? "YouTube video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      )}
      {caption && (
        <div
          style={{
            fontFamily: "var(--font-ibm-plex-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 11,
            color: "#a1a1aa",
            textAlign: "center",
            marginTop: 12,
            letterSpacing: "0.1px",
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
}
