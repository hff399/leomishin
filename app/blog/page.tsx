import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogClient from "./BlogClient";
import PageLayout from "@/app/components/PageLayout";
import {
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
  COLOR_TEXT_MUTED,
  FONT_SERIF,
  FONT_MONO,
} from "@/app/lib/tokens";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Writing — Leo Mishin",
  description: "What I'm thinking about, building, and learning. Published when it's worth saying.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const postsData = posts.map(({ content: _content, ...rest }) => rest);

  return (
    <PageLayout showFooter={false}>
      {/* Header */}
      <div style={{ paddingTop: 80 }}>
        <div
          style={{
            fontFamily: FONT_MONO,
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.24px",
            color: COLOR_TEXT_MUTED,
            marginBottom: 12,
          }}
        >
          WRITING
        </div>
        <h1
          style={{
            fontFamily: FONT_SERIF,
            fontSize: 36,
            lineHeight: "44px",
            color: COLOR_TEXT_PRIMARY,
            margin: 0,
            fontWeight: 400,
          }}
        >
          Essays &amp; Notes
        </h1>
        <p
          style={{
            color: COLOR_TEXT_SECONDARY,
            marginTop: 16,
            marginBottom: 0,
          }}
        >
          What I&apos;m thinking about, building, and learning. Published when it&apos;s worth saying.
        </p>
      </div>

      <div style={{ margin: "40px 0", display: "flex", gap: "6px" }}>
        <div style={{ width: 2, height: 2, borderRadius: 999, background: COLOR_TEXT_MUTED }} />
        <div style={{ width: 2, height: 2, borderRadius: 999, background: COLOR_TEXT_MUTED }} />
        <div style={{ width: 2, height: 2, borderRadius: 999, background: COLOR_TEXT_MUTED }} />
      </div>

      <BlogClient posts={postsData} />
    </PageLayout>
  );
}
