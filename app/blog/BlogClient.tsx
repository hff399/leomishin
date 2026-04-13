"use client";

import { useState } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import NewsletterSignup from "../components/NewsletterSignup";
import {
  FONT_HEADING,
  FONT_SANS,
  COLOR_PRIMARY,
  COLOR_MUTED,
  COLOR_SECONDARY,
  COLOR_BORDER,
} from "@/app/lib/tokens";

interface PostData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
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
      <div style={{ padding: "28px 0", borderBottom: `1px solid ${COLOR_BORDER}` }}>
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
          {post.category} &middot; {post.readingTime} min
        </div>

        <div
          style={{
            fontFamily: FONT_HEADING,
            fontSize: 20,
            lineHeight: "1.5em",
            color: COLOR_PRIMARY,
            marginTop: 6,
            fontWeight: 400,
          }}
        >
          {post.title}
        </div>

        <div
          style={{
            fontFamily: FONT_SANS,
            fontSize: 15,
            lineHeight: "1.6em",
            letterSpacing: "-0.02em",
            color: COLOR_SECONDARY,
            marginTop: 6,
          }}
        >
          {post.excerpt}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 14,
          }}
        >
          <div style={{ fontFamily: FONT_SANS, fontSize: 13, color: COLOR_MUTED }}>
            {formatDate(post.date)}
          </div>
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            style={{
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 300ms cubic-bezier(.22,1,.36,1)",
              flexShrink: 0,
            }}
          >
            <path
              d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
              stroke={COLOR_MUTED}
              strokeWidth={1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function BlogClient({ posts }: { posts: PostData[] }) {
  return (
    <>
      <div>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      <NewsletterSignup />
    </>
  );
}
