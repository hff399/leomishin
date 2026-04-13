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
import {
  FONT_HEADING,
  FONT_SANS,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_MUTED,
  COLOR_FAINT,
  COLOR_BORDER,
} from "@/app/lib/tokens";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Leo Mishin`,
    description: post.excerpt,
  };
}

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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "128px 24px 80px",
      }}
    >
      <div style={{ maxWidth: 960, width: "100%" }}>
        {/* ── Back ── */}
        <div style={{ marginBottom: 40 }}>
          <Link
            href="/blog"
            style={{
              fontFamily: FONT_SANS,
              fontSize: 13,
              fontWeight: 500,
              color: COLOR_MUTED,
              textDecoration: "none",
            }}
          >
            &larr; Blog
          </Link>
        </div>

        {/* ── Header ── */}
        <div style={{ maxWidth: 660 }}>
          <div
            style={{
              fontFamily: FONT_SANS,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: COLOR_MUTED,
              lineHeight: "20px",
            }}
          >
            {post.category} &middot; {post.readingTime} min &middot; {formatDate(post.date)}
          </div>
          <h1
            style={{
              fontFamily: FONT_HEADING,
              fontSize: 36,
              lineHeight: 1.3,
              color: COLOR_PRIMARY,
              marginTop: 12,
              marginBottom: 0,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              fontFamily: FONT_SANS,
              fontSize: 18,
              lineHeight: "1.6em",
              letterSpacing: "-0.02em",
              color: COLOR_SECONDARY,
              marginTop: 14,
              marginBottom: 0,
            }}
          >
            {post.excerpt}
          </p>
        </div>

        <div style={{ height: 1, background: COLOR_BORDER, margin: "36px 0", maxWidth: 660 }} />

        {/* ── Content + TOC ── */}
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div className="blog-prose" style={{ flex: 1, maxWidth: 660, minWidth: 0 }}>
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
          <TableOfContents headings={headings} />
        </div>

        <div style={{ maxWidth: 660 }}>
          <NewsletterSignup />
        </div>

        <div style={{ marginTop: 48, maxWidth: 660 }}>
          <Link
            href="/blog"
            style={{
              fontFamily: FONT_SANS,
              fontSize: 13,
              fontWeight: 500,
              color: COLOR_MUTED,
              textDecoration: "none",
            }}
          >
            &larr; Back to Blog
          </Link>
        </div>

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
            margin: "64px 0 0",
          }}
        >
          &copy; Leonid Mishin 2026
        </p>
      </div>
    </div>
  );
}
