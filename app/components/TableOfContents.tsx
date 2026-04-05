"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-72px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <motion.aside
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 16 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
      className="toc-sidebar"
      style={{
        position: "sticky",
        top: 100,
        width: 180,
        flexShrink: 0,
        paddingLeft: 40,
        alignSelf: "flex-start",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-ibm-plex-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.24px",
          color: "#c4c4c7",
          marginBottom: 14,
        }}
      >
        Contents
      </div>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        {headings.map(({ id, text, level }) => {
          const isActive = activeId === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              title={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: level === 3 ? 12 : 0,
                fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
                fontSize: 12,
                lineHeight: "18px",
                color: isActive ? "#171717" : "#a1a1aa",
                textDecoration: "none",
                transition: "color 200ms",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = "#52525b";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isActive ? "#171717" : "#a1a1aa";
              }}
            >
              {/* Active dot */}
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: 999,
                  background: isActive ? "#171717" : "transparent",
                  flexShrink: 0,
                  transition: "background 200ms",
                }}
              />
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {text}
              </span>
            </a>
          );
        })}
      </nav>
    </motion.aside>
  );
}
