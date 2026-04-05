"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

/* ───────────────────────────── Data ──────────────────────────────────────── */

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com/leomishin" },
  { label: "LinkedIn", href: "https://linkedin.com/in/leomishin" },
  { label: "YouTube", href: "https://youtube.com/@leomishin" },
];

const clients = [
  { name: "Denis Shatalin", role: "YouTube & LinkedIn", initials: "DS", bg: "#ebebeb" },
  { name: "B2B SaaS Co.", role: "YouTube Growth", initials: "SaaS", bg: "#dce8f5" },
  { name: "Software Agency", role: "LinkedIn Content", initials: "AG", bg: "#f5dce8" },
  { name: "Consulting Firm", role: "Content Strategy", initials: "CO", bg: "#dcebd5" },
  { name: "Course Platform", role: "YouTube & X", initials: "EDU", bg: "#f5ead0" },
  { name: "Startup Founder", role: "Organic Growth", initials: "SF", bg: "#e5daf5" },
];

const experience = [
  {
    period: "2023",
    role: "Founder & CEO at",
    company: "ScaleWithContent",
    href: "https://scalewithcontent.com",
  },
];

/* ───────────────────────────── Dots ──────────────────────────────────────── */

function Dots() {
  return (
    <div style={{ margin: "80px 0", display: "flex", gap: "6px" }}>
      <div style={{ width: 2, height: 2, borderRadius: 999, background: "#a1a1aa" }} />
      <div style={{ width: 2, height: 2, borderRadius: 999, background: "#a1a1aa" }} />
      <div style={{ width: 2, height: 2, borderRadius: 999, background: "#a1a1aa" }} />
    </div>
  );
}

/* ──────────────────────────── Client Card ────────────────────────────────── */

function ClientCard({
  client,
}: {
  client: (typeof clients)[number];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ position: "relative", width: 80, height: 80 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 8, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, y: 4, x: "-50%" }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            style={{
              position: "absolute",
              bottom: "calc(100% - 8px)",
              left: "50%",
              background: "rgba(10,10,10,0.82)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: "10px 20px 12px",
              textAlign: "center",
              whiteSpace: "nowrap",
              zIndex: 20,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-eb-garamond), ui-serif, Georgia, serif",
                fontSize: 20,
                color: "#f5f5f5",
                lineHeight: "28px",
              }}
            >
              {client.name}
            </div>
            <div
              style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.24px",
                color: "#a1a1aa",
                marginTop: 2,
              }}
            >
              {client.role}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card body */}
      <div
        style={{
          width: 80,
          height: 80,
          border: "1px solid #e5e5e5",
          borderRadius: 16,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 300ms",
          background: hovered ? "#e5e5e5" : "transparent",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: client.bg,
            border: "1px solid rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
            fontSize: 10,
            fontWeight: 500,
            color: "#555",
          }}
        >
          {client.initials}
        </div>

        {/* Arrow icon on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.svg
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
              width={18}
              height={18}
              viewBox="0 0 20 20"
              fill="none"
              style={{
                position: "absolute",
                bottom: 4,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <path
                d="M7.5 12.5L13.5 6.5M13.5 6.5V11.5M13.5 6.5H8.5"
                stroke="#a1a1aa"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ──────────────────────────── External Arrow ─────────────────────────────── */

function ExternalArrow({ size = 12, color = "white" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M7.5 12.5L13.5 6.5M13.5 6.5V11.5M13.5 6.5H8.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ───────────────────────────── Page ──────────────────────────────────────── */

export default function LeomishinPage() {
  /* Social links pill ---------------------------------------------------- */
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false });

  const movePill = useCallback((idx: number | null) => {
    if (idx === null) {
      setPill((p) => ({ ...p, visible: false }));
      return;
    }
    const link = linkRefs.current[idx];
    const container = containerRef.current;
    if (!link || !container) return;
    const cRect = container.getBoundingClientRect();
    const lRect = link.getBoundingClientRect();
    setPill({ left: lRect.left - cRect.left, width: lRect.width, visible: true });
  }, []);

  /* Bottom nav pill ------------------------------------------------------ */
  const aboutRef = useRef<HTMLAnchorElement>(null);
  const navGroupRef = useRef<HTMLDivElement>(null);
  const [navPill, setNavPill] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const about = aboutRef.current;
    const group = navGroupRef.current;
    if (!about || !group) return;
    const gRect = group.getBoundingClientRect();
    const aRect = about.getBoundingClientRect();
    setNavPill({ left: aRect.left - gRect.left, width: aRect.width });
  }, []);

  /* Shared styles -------------------------------------------------------- */
  const baseFontStyle: React.CSSProperties = {
    fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
    fontSize: 14,
    lineHeight: "24px",
    letterSpacing: "-0.14px",
    WebkitFontSmoothing: "antialiased",
  };

  const serifFont = "var(--font-eb-garamond), ui-serif, Georgia, serif";

  /* Blur layers ---------------------------------------------------------- */
  const blurLayers = [1, 2, 3, 6, 8];

  return (
    <div
      style={{
        ...baseFontStyle,
        background: "#f5f5f5",
        color: "#a1a1aa",
        minHeight: "100vh",
        position: "relative",
        overflowX: "clip",
      }}
    >
      {/* ── Top blur overlay ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 48,
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        {blurLayers.map((blur) => (
          <div
            key={`top-${blur}`}
            style={{
              position: "absolute",
              inset: 0,
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            }}
          />
        ))}
      </div>

      {/* ── Bottom blur overlay ── */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: 96,
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        {blurLayers.map((blur) => (
          <div
            key={`btm-${blur}`}
            style={{
              position: "absolute",
              inset: 0,
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div style={{ maxWidth: 448, margin: "0 auto", padding: "0 24px 288px" }}>
        {/* ── Hero section ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          style={{
            paddingTop: 80,
            display: "flex",
            flexWrap: "wrap",
            gap: "0 8px",
            alignItems: "baseline",
            fontFamily: serifFont,
            fontSize: 36,
            lineHeight: "52px",
            color: "#171717",
          }}
        >
          <span style={{ color: "#737373" }}>Hey,</span>
          <span>I&apos;m</span>

          {/* Avatar */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              verticalAlign: "middle",
              position: "relative",
              top: 6,
            }}
          >
            <span
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #d0d0d0, #b8b8b8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: "#666",
              }}
            >
              LM
            </span>
          </span>

          <span>Leo</span>

          {/* Line break */}
          <div style={{ width: "100%" }} />

          {/* Gradient "a strategist" */}
          <span style={{ position: "relative", display: "inline-block" }}>
            <span className="hero-gradient-text">a strategist</span>
            <span
              aria-hidden="true"
              className="hero-gradient-text"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0.5,
                filter: "blur(14px)",
                pointerEvents: "none",
              }}
            >
              a strategist
            </span>
          </span>

          <span style={{ color: "#737373" }}>at</span>

          {/* SWC logo */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 56,
              verticalAlign: "middle",
              position: "relative",
              top: 6,
            }}
          >
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "#0a0a0a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
                fontSize: 9,
                fontWeight: 500,
                color: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              SWC
            </span>
          </span>

          <span>ScaleWith</span>
          <span style={{ color: "#ff0000" }}>Content</span>

          <span style={{ color: "#737373" }}>based in</span>
          <span>
            <span role="img" aria-label="Georgia flag">
              &#x1F1EC;&#x1F1EA;
            </span>{" "}
            Georgia
          </span>
        </motion.div>

        {/* ── Social links ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          ref={containerRef}
          style={{
            position: "relative",
            left: -12,
            marginTop: 40,
            display: "flex",
            gap: "0 16px",
          }}
        >
          {/* Sliding pill */}
          <div
            style={{
              position: "absolute",
              top: 0,
              height: "100%",
              borderRadius: 999,
              background: "#e5e5e5",
              transition: "left 300ms, width 300ms, opacity 200ms",
              left: pill.left,
              width: pill.width,
              opacity: pill.visible ? 1 : 0,
              pointerEvents: "none",
            }}
          />

          {socialLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => {
                linkRefs.current[i] = el;
              }}
              onMouseEnter={() => movePill(i)}
              onMouseLeave={() => movePill(null)}
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: 999,
                padding: "3px 12px",
                color: "#52525b",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* ── Dots ── */}
        <Dots />

        {/* ── Bio ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          style={{ color: "#52525b" }}
        >
          <p style={{ marginBottom: 24 }}>
            Building content systems that help B2B founders grow without paid ads. Over $1M tracked
            in client revenue since 2023.
          </p>
          <p style={{ marginBottom: 24 }}>
            YouTube-first strategy with LinkedIn and X for daily distribution. The whole thing
            connected so content turns into booked calls.
          </p>
          <p style={{ marginBottom: 24 }}>
            No templates. No ghostwriting. No outsourcing. Every system built from scratch around
            the founder&apos;s voice, offer, and audience.
          </p>
        </motion.div>

        {/* ── Dots ── */}
        <Dots />

        {/* ── Clients ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <p style={{ color: "#52525b", marginBottom: 40 }}>Past clients, new friends.</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 80px)",
              gap: 32,
            }}
          >
            {clients.map((client) => (
              <ClientCard key={client.name} client={client} />
            ))}
          </div>
        </motion.div>

        {/* ── Dots ── */}
        <Dots />

        {/* ── Work Experience ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
        >
          <div style={{ color: "#52525b", marginBottom: 40 }}>Work Experience</div>
          {experience.map((entry) => (
            <div
              key={entry.company}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 40,
              }}
            >
              <div
                style={{
                  width: 96,
                  flexShrink: 0,
                  color: "#737373",
                }}
              >
                {entry.period}
              </div>
              <div>
                <span style={{ color: "#171717" }}>{entry.role} </span>
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#171717",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background: "#0a0a0a",
                      flexShrink: 0,
                    }}
                  >
                    <ExternalArrow size={12} color="white" />
                  </span>
                  <span
                    style={{
                      borderBottom: "1px solid transparent",
                      transition: "border-color 200ms",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLSpanElement).style.borderColor = "#171717";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLSpanElement).style.borderColor = "transparent";
                    }}
                  >
                    {entry.company}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Dots ── */}
        <Dots />

        {/* ── Footer ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0 32px",
            fontSize: 14,
          }}
        >
          <div style={{ width: 144, textAlign: "right", color: "#a1a1aa" }}>
            &copy; 2025 Leo Mishin
          </div>
          <a
            href="https://scalewithcontent.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#a1a1aa",
              textDecoration: "none",
              transition: "color 200ms",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#52525b";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#a1a1aa";
            }}
          >
            ScaleWithContent
          </a>
        </div>
      </div>

      {/* ── Fixed Bottom Nav ── */}
      <div
        style={{
          position: "fixed",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1001,
        }}
        className="sm:!bottom-10"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0 8px",
            borderRadius: 999,
            padding: 16,
            background: "rgba(10,10,10,0.82)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.13px",
            whiteSpace: "nowrap",
          }}
        >
          {/* Left group */}
          <div
            ref={navGroupRef}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "0 2px",
            }}
          >
            {/* Active pill */}
            <div
              style={{
                position: "absolute",
                top: 0,
                height: "100%",
                borderRadius: 999,
                background: "rgba(255,255,255,0.1)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                transition: "left 300ms, width 300ms",
                left: navPill.left,
                width: navPill.width,
                pointerEvents: "none",
              }}
            />

            {/* About */}
            <a
              ref={aboutRef}
              href="/"
              style={{
                position: "relative",
                borderRadius: 999,
                padding: "4px 14px",
                color: "white",
                textDecoration: "none",
              }}
            >
              About
              {/* Active dot */}
              <span
                style={{
                  position: "absolute",
                  bottom: -8,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 2,
                  height: 2,
                  borderRadius: 999,
                  background: "white",
                }}
              />
            </a>

            {/* Separator dot */}
            <span
              style={{
                width: 1,
                height: 1,
                borderRadius: 999,
                background: "rgba(255,255,255,0.8)",
                flexShrink: 0,
              }}
            />

            {/* Work */}
            <a
              href="/"
              style={{
                position: "relative",
                borderRadius: 999,
                padding: "4px 14px",
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                transition: "color 200ms",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
              }}
            >
              Work
            </a>
          </div>

          {/* Separator line */}
          <div
            style={{
              height: 12,
              width: 1,
              background: "rgba(255,255,255,0.1)",
              flexShrink: 0,
            }}
          />

          {/* Contact */}
          <a
            href="mailto:hello@scalewithcontent.com?subject=Hey%20Leo"
            style={{
              marginLeft: 14,
              borderRadius: 999,
              padding: "4px 14px",
              color: "rgba(255,255,255,0.8)",
              background: "rgba(255,255,255,0.16)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              textDecoration: "none",
              transition: "background 200ms",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.background = "rgba(255,255,255,0.24)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.background = "rgba(255,255,255,0.16)";
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
