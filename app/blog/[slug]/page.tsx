import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, formatDate, extractHeadings } from "@/lib/blog";
import NewsletterSignup from "@/app/components/NewsletterSignup";
import TableOfContents from "@/app/components/TableOfContents";
import BarChart from "@/app/components/mdx/BarChart";
import LineChart from "@/app/components/mdx/LineChart";
import Callout from "@/app/components/mdx/Callout";
import PostImage from "@/app/components/mdx/PostImage";
import YouTubeEmbed from "@/app/components/mdx/YouTubeEmbed";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Leo Mishin`,
    description: post.excerpt,
  };
}

// Generate IDs matching extractHeadings
function makeId(text: string): string {
  return String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const mdxComponents = {
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 id={makeId(String(children))}>{children}</h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 id={makeId(String(children))}>{children}</h3>
  ),
  BarChart,
  LineChart,
  Callout,
  PostImage,
  YouTubeEmbed,
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const headings = extractHeadings(post.content);
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

      {/* Outer wrapper — wider for reading comfort */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px 288px" }}>

        {/* Back link */}
        <div style={{ paddingTop: 80, marginBottom: 40 }}>
          <Link
            href="/blog"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: 12,
              color: "#a1a1aa",
              textDecoration: "none",
              transition: "color 200ms",
            }}
            onMouseEnter={undefined}
          >
            ← Writing
          </Link>
        </div>

        {/* Post header — constrained to comfortable width */}
        <div style={{ maxWidth: 660 }}>
          <div
            style={{
              fontFamily: "var(--font-ibm-plex-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.24px",
              color: "#a1a1aa",
              lineHeight: "20px",
            }}
          >
            {post.category} &middot; {post.readingTime} min read &middot; {formatDate(post.date)}
          </div>
          <h1
            style={{
              fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
              fontSize: 40,
              lineHeight: 1.15,
              color: "#171717",
              marginTop: 12,
              marginBottom: 0,
              fontWeight: 400,
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              fontSize: 16,
              lineHeight: "28px",
              color: "#52525b",
              marginTop: 16,
              marginBottom: 0,
            }}
          >
            {post.excerpt}
          </p>
        </div>

        {/* Separator */}
        <div style={{ height: 1, background: "#e5e5e5", margin: "36px 0", maxWidth: 660 }} />

        {/* Content row: article + TOC */}
        <div style={{ display: "flex", alignItems: "flex-start" }}>

          {/* Article body */}
          <div className="blog-prose" style={{ flex: 1, maxWidth: 660, minWidth: 0 }}>
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* Table of Contents */}
          <TableOfContents headings={headings} />
        </div>

        {/* Newsletter */}
        <div style={{ maxWidth: 660, marginTop: 0 }}>
          <NewsletterSignup />
        </div>

        {/* Back link bottom */}
        <div style={{ marginTop: 48, maxWidth: 660 }}>
          <Link
            href="/blog"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: 12,
              color: "#a1a1aa",
              textDecoration: "none",
            }}
          >
            ← Back to Writing
          </Link>
        </div>
      </div>
    </div>
  );
}
