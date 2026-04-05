import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, formatDate, extractHeadings } from "@/lib/blog";
import NewsletterSignup from "@/app/components/NewsletterSignup";
import TableOfContents from "@/app/components/TableOfContents";
import PageLayout from "@/app/components/PageLayout";
import BarChart from "@/app/components/mdx/BarChart";
import LineChart from "@/app/components/mdx/LineChart";
import Callout from "@/app/components/mdx/Callout";
import PostImage from "@/app/components/mdx/PostImage";
import YouTubeEmbed from "@/app/components/mdx/YouTubeEmbed";
import {
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
  COLOR_TEXT_MUTED,
  COLOR_BORDER,
  FONT_SERIF,
  FONT_MONO,
} from "@/app/lib/tokens";

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

  return (
    <PageLayout maxWidth={960} showFooter={false}>
      {/* Back link */}
      <div style={{ paddingTop: 80, marginBottom: 40 }}>
        <Link
          href="/blog"
          style={{
            fontFamily: FONT_MONO,
            fontSize: 12,
            color: COLOR_TEXT_MUTED,
            textDecoration: "none",
            transition: "color 200ms",
          }}
          onMouseEnter={undefined}
        >
          ← Writing
        </Link>
      </div>

      {/* Post header */}
      <div style={{ maxWidth: 660 }}>
        <div
          style={{
            fontFamily: FONT_MONO,
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.24px",
            color: COLOR_TEXT_MUTED,
            lineHeight: "20px",
          }}
        >
          {post.category} &middot; {post.readingTime} min read &middot; {formatDate(post.date)}
        </div>
        <h1
          style={{
            fontFamily: FONT_SERIF,
            fontSize: 40,
            lineHeight: 1.15,
            color: COLOR_TEXT_PRIMARY,
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
            color: COLOR_TEXT_SECONDARY,
            marginTop: 16,
            marginBottom: 0,
          }}
        >
          {post.excerpt}
        </p>
      </div>

      {/* Separator */}
      <div style={{ height: 1, background: COLOR_BORDER, margin: "36px 0", maxWidth: 660 }} />

      {/* Content row: article + TOC */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div className="blog-prose" style={{ flex: 1, maxWidth: 660, minWidth: 0 }}>
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
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
            fontFamily: FONT_MONO,
            fontSize: 12,
            color: COLOR_TEXT_MUTED,
            textDecoration: "none",
          }}
        >
          ← Back to Writing
        </Link>
      </div>
    </PageLayout>
  );
}
