import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogClient from "./BlogClient";
import { FONT_HEADING, FONT_SANS, COLOR_PRIMARY, COLOR_FAINT } from "@/app/lib/tokens";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog — Leo Mishin",
  description:
    "What I'm thinking about, building, and learning. Published when it's worth saying.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const postsData = posts.map(({ content: _content, ...rest }) => rest);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "128px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 650,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        <p
          style={{
            fontFamily: FONT_HEADING,
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: "1.6em",
            color: COLOR_PRIMARY,
            margin: 0,
          }}
        >
          Blog
        </p>

        <p
          style={{
            fontFamily: FONT_SANS,
            fontSize: 18,
            letterSpacing: "-0.02em",
            lineHeight: "1.6em",
            color: COLOR_FAINT,
            margin: 0,
          }}
        >
          What I&apos;m thinking about, building, and learning.
        </p>

        <div style={{ width: "100%", marginTop: 24 }}>
          <BlogClient posts={postsData} />
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
            margin: "40px 0 0",
          }}
        >
          &copy; Leonid Mishin 2026
        </p>
      </div>
    </div>
  );
}
