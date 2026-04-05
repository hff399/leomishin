interface PostImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function PostImage({ src, alt, caption }: PostImageProps) {
  return (
    <figure style={{ margin: "36px 0", padding: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          borderRadius: 6,
          border: "1px solid #e5e5e5",
          display: "block",
        }}
      />
      {caption && (
        <figcaption
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
        </figcaption>
      )}
    </figure>
  );
}
