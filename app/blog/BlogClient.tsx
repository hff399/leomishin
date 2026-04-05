"use client";

import { useState } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import NewsletterSignup from "../components/NewsletterSignup";

interface PostData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
}

function ArrowRight({ hovered }: { hovered: boolean }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      style={{
        transform: hovered ? "translateX(4px)" : "translateX(0)",
        transition: "transform 300ms cubic-bezier(.6,.6,0,1)",
        flexShrink: 0,
      }}
    >
      <path
        d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
        stroke="#a1a1aa"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PostCard({ post }: { post: PostData }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/blog/${post.slug}`}
      style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          padding: "32px 0",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        {/* Category + reading time */}
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
          {post.category} &middot; {post.readingTime} min read
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
            fontSize: 22,
            lineHeight: "30px",
            color: "#171717",
            marginTop: 8,
            fontWeight: 400,
          }}
        >
          {post.title}
        </div>

        {/* Excerpt */}
        <div
          style={{
            fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
            fontSize: 14,
            lineHeight: "24px",
            letterSpacing: "-0.14px",
            color: "#52525b",
            marginTop: 8,
          }}
        >
          {post.excerpt}
        </div>

        {/* Date + Arrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 16,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-ibm-plex-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: 12,
              color: "#a1a1aa",
            }}
          >
            {formatDate(post.date)}
          </div>
          <ArrowRight hovered={hovered} />
        </div>
      </div>
    </Link>
  );
}

export default function BlogClient({ posts }: { posts: PostData[] }) {
  return (
    <>
      {/* Posts */}
      <div>
        {posts.map((post) => <PostCard key={post.slug} post={post} />)}
      </div>

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
}
