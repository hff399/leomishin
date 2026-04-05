"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

/* ───────────────────────────── Data ──────────────────────────────────────── */

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com/leomishin" },
  { label: "LinkedIn", href: "https://linkedin.com/in/leomishin" },
  { label: "YouTube", href: "https://youtube.com/@leomishin" },
];

const projects = [
  { name: "mono.ge", role: "AI Legal Platform", initials: "M", bg: "#dce8f5", href: "https://mono.ge" },
  { name: "Scale with Content", role: "Content & Growth", initials: "SWC", bg: "#e8e8e8", href: "https://scalewithcontent.com" },
  { name: "Merchant AI", role: "AI Media Tool", initials: "MAI", bg: "#e5daf5", href: "https://merchantai.com" },
];

const experience = [
  {
    period: "2023 –",
    role: "Founder at",
    company: "Scale with Content",
    href: "https://scalewithcontent.com",
  },
  {
    period: "2024 –",
    role: "Founder at",
    company: "Merchant AI",
    href: "https://merchantai.com",
  },
  {
    period: "2025 –",
    role: "Founder at",
    company: "mono.ge",
    href: "https://mono.ge",
  },
];

const QUOTE = "AI is eating the world. Don't be eaten.";
const SIG = "— Leo Mishin";

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

/* ──────────────────────────── Project Card ───────────────────────────────── */

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
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
                fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
                fontSize: 20,
                color: "#f5f5f5",
                lineHeight: "24px",
                marginBottom: 4,
              }}
            >
              {project.name}
            </div>
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
              {project.role}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card body */}
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 16,
          transition: "background 500ms cubic-bezier(.6,.6,0,1)",
          background: hovered ? "#e5e5e5" : "transparent",
          position: "relative",
          textDecoration: "none",
        }}
      >
        {/* Inset border overlay — matches reference ::before pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 16,
            border: "1px solid #e5e5e5",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* Inner initials badge — slides up on hover */}
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: project.bg,
            border: "1px solid rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
            fontSize: 10,
            fontWeight: 500,
            color: "#555",
            position: "relative",
            zIndex: 10,
            transform: hovered ? "translateY(-6px)" : "translateY(0)",
            transition: "transform 500ms cubic-bezier(.6,.6,0,1)",
          }}
        >
          {project.initials}
        </div>

        {/* Arrow — appears at bottom on hover */}
        <svg
          viewBox="0 0 20 20"
          width={20}
          style={{
            position: "absolute",
            bottom: 2,
            left: "calc(50% - 10px)",
            transform: hovered ? "translateY(0)" : "translateY(4px)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 500ms cubic-bezier(.6,.6,0,1), transform 500ms cubic-bezier(.6,.6,0,1)",
            fill: "none",
            zIndex: 10,
          }}
        >
          <path
            d="M7.5 12.5L13.5 6.5M13.5 6.5V11.5M13.5 6.5H8.5"
            stroke="#a1a1aa"
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

/* ───────────────────────────── Page ──────────────────────────────────────── */

export default function LeomishinPage() {
  /* Social links pill */
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

  /* Typewriter for handwriting section */
  const quoteRef = useRef<HTMLDivElement>(null);
  const [quoteText, setQuoteText] = useState("");
  const [sigText, setSigText] = useState("");
  const started = useRef(false);

  useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          let i = 0;
          const quoteTimer = setInterval(() => {
            i++;
            setQuoteText(QUOTE.slice(0, i));
            if (i >= QUOTE.length) {
              clearInterval(quoteTimer);
              let j = 0;
              const sigTimer = setInterval(() => {
                j++;
                setSigText(SIG.slice(0, j));
                if (j >= SIG.length) clearInterval(sigTimer);
              }, 50);
            }
          }, 38);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Shared styles */
  const baseFontStyle: React.CSSProperties = {
    fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
    fontSize: 14,
    lineHeight: "24px",
    letterSpacing: "-0.14px",
    WebkitFontSmoothing: "antialiased",
  };

  const serifFont = "var(--font-instrument-serif), ui-serif, Georgia, serif";
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
              maskImage: "linear-gradient(#000 0%, #0000 100%)",
              WebkitMaskImage: "linear-gradient(#000 0%, #0000 100%)",
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
              maskImage: "linear-gradient(#0000 0%, #000 100%)",
              WebkitMaskImage: "linear-gradient(#0000 0%, #000 100%)",
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div style={{ maxWidth: 580, margin: "0 auto", padding: "0 24px 288px" }}>

        {/* ── Hero ── */}
        <div
          style={{
            paddingTop: 80,
            display: "flex",
            flexWrap: "wrap",
            columnGap: 8,
            alignItems: "baseline",
            fontFamily: serifFont,
            fontSize: 36,
            lineHeight: "52px",
            color: "#171717",
          }}
        >
          <span style={{ color: "#737373" }}>Hey,</span>
          <span>I&apos;m</span>

          {/* Avatar badge */}
          <div
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              position: "relative",
              top: 3,
              marginLeft: 2,
              marginRight: 2,
              width: 48,
              height: 38,
              borderRadius: 10,
              overflow: "hidden",
              flexShrink: 0,
              userSelect: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1), inset 0 0 0 2px rgba(255,255,255,0.08)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Leo Mishin avatar"
              src="/avatar.jpg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "55% 15%",
                display: "block",
              }}
            />
            {/* Inner border with inset padding */}
            <div
              style={{
                position: "absolute",
                inset: 1,
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.35)",
                pointerEvents: "none",
              }}
            />
          </div>

          <span>Leo</span>

          {/* One explicit line break — everything else flows naturally */}
          <div style={{ width: "100%" }} />

          {/* Gradient text */}
          <span style={{ position: "relative", display: "inline-block" }}>
            <span className="hero-gradient-text">entrepreneur</span>
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
                width: "max-content",
              }}
            >
              entrepreneur
            </span>
          </span>

          <span style={{ color: "#737373" }}>based in</span>
          Tbilisi,

          {/* Georgia map widget — mirrors reference map structure */}
          <div
            style={{
              position: "relative",
              top: 3,
              marginLeft: 2,
              marginRight: 2,
              height: 44,
              width: 56,
              userSelect: "none",
              overflow: "hidden",
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              flexShrink: 0,
              display: "inline-block",
              verticalAlign: "middle",
            }}
          >
            {/* Map background — white theme */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(145deg, #fafaf8 0%, #f4f4f0 35%, #efefea 60%, #f5f5f2 100%)",
              }}
            />

            {/* Animated cloud 1 */}
            <div
              style={{
                position: "absolute",
                top: -8,
                width: 83,
                height: 40,
                background: "radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, transparent 70%)",
                animation: "map-clouds-1 15s linear -5s infinite",
                transform: "translateX(-83px)",
              }}
            />
            {/* Animated cloud 2 */}
            <div
              style={{
                position: "absolute",
                top: 16,
                width: 83,
                height: 40,
                background: "radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%)",
                animation: "map-clouds-2 35s linear infinite",
                transform: "translateX(56px)",
              }}
            />

            {/* Border glow overlay — z-11 */}
            <div
              style={{
                position: "absolute",
                inset: 1,
                zIndex: 11,
                borderRadius: 11,
                boxShadow: "inset 0 0.75px 0.75px rgba(255,255,255,0.32)",
                border: "1px solid rgba(255,255,255,0.16)",
                pointerEvents: "none",
              }}
            />

            {/* Gradient depth overlays — z-12 */}
            <div style={{ position: "absolute", inset: 0, zIndex: 12, borderRadius: 12, pointerEvents: "none" }}>
              <div style={{ position: "absolute", left: 0, height: "100%", width: "50%", background: "linear-gradient(270deg, #000 0%, transparent 100%)", opacity: 0.04 }} />
              <div style={{ position: "absolute", right: 0, height: "100%", width: "50%", background: "linear-gradient(90deg, transparent 0%, #fff 100%)", opacity: 0.32 }} />
              <div style={{ position: "absolute", top: 0, left: 0, height: "50%", width: "100%", background: "linear-gradient(transparent 0%, rgba(120,80,0,1) 100%)", opacity: 0.08 }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, height: "50%", width: "100%", background: "linear-gradient(rgba(255,255,255,1) 0%, transparent 100%)", opacity: 0.32 }} />
            </div>

            {/* Location dot + pulse rings — z-13 */}
            <div
              style={{
                position: "absolute",
                right: 1,
                top: "50%",
                transform: "translateY(-50%)",
                width: 36,
                height: 36,
                zIndex: 13,
              }}
            >
              {/* White glowing dot */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(2px)",
                  background: "linear-gradient(#ffffffcc, #ffffffa3)",
                  boxShadow: "inset 0 0 0 0.5px rgba(0,0,0,0.08)",
                  zIndex: 10,
                }}
              />
              {/* Pulse rings — neutral for white theme */}
              {[-1, -2, -3].map((delay) => (
                <div
                  key={delay}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 999,
                    background: "rgba(0,0,0,0.05)",
                    opacity: 0,
                    animation: `map-pulse 3s linear ${delay}s infinite`,
                    transform: "scale(0)",
                  }}
                />
              ))}
            </div>

            {/* Tbilisi / GE label — z-13 */}
            <div
              style={{
                position: "absolute",
                bottom: 6,
                left: 8,
                zIndex: 13,
                fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
                fontSize: 5,
                lineHeight: "5px",
                letterSpacing: "-0.05px",
                pointerEvents: "none",
              }}
            >
              <div style={{ fontWeight: 500, color: "rgba(30,25,20,0.85)", marginBottom: 2 }}>🇬🇪 Tbilisi</div>
              <div style={{ color: "rgba(30,25,20,0.4)" }}>Georgia</div>
            </div>
          </div>

          GE
        </div>

        {/* ── Social links ── */}
        <div
          ref={containerRef}
          style={{
            position: "relative",
            left: -12,
            marginTop: 40,
            display: "flex",
            gap: 16,
          }}
        >
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
              ref={(el) => { linkRefs.current[i] = el; }}
              onMouseEnter={() => movePill(i)}
              onMouseLeave={() => movePill(null)}
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: 999,
                padding: "3px 12px",
                color: "#52525b",
                textDecoration: "none",
                transition: "color 500ms cubic-bezier(.6,.6,0,1)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ── Dots ── */}
        <Dots />

        {/* ── Bio ── */}
        <div style={{ color: "#52525b" }}>
          <p style={{ marginBottom: 24 }}>
            I build companies. Three in motion: mono.ge is reshaping how commerce works in Georgia.
            Scale with Content turns founder expertise into compounding organic revenue. Merchant AI
            is building the media layer for the next generation of sellers.
          </p>
          <p style={{ marginBottom: 24 }}>
            The pattern I keep finding: industries where trust is the bottleneck and distribution
            is the moat. Organic beats paid. Systems beat hustle. Ownership beats income.
          </p>
          <p>
            Tbilisi is the base. Building is the work. Writing is how I think out loud.
          </p>
        </div>

        {/* ── Dots ── */}
        <Dots />

        {/* ── Projects ── */}
        <div>
          <p style={{ color: "#52525b", marginBottom: 40 }}>What I&apos;m building.</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 80px)",
              gap: 32,
            }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

        {/* ── Dots ── */}
        <Dots />

        {/* ── Work Experience ── */}
        <div>
          <div style={{ color: "#52525b", marginBottom: 40 }}>Ventures</div>
          <div style={{ display: "grid", gap: 40 }}>
            {experience.map((entry) => (
              <div
                key={entry.company}
                style={{ display: "flex", alignItems: "center", gap: 40 }}
              >
                <div style={{ width: 96, flexShrink: 0, color: "#737373" }}>
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
                      gap: 4,
                      verticalAlign: "middle",
                      position: "relative",
                    }}
                    className="exp-link"
                  >
                    <img
                      src="/swc-icon.png"
                      alt="ScaleWithContent"
                      width={22}
                      height={22}
                      style={{ borderRadius: 4, display: "none" }}
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                    <span>{entry.company}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Dots ── */}
        <Dots />

        {/* ── Handwriting / Quote ── */}
        <div ref={quoteRef}>
          <div
            style={{
              fontFamily: "var(--font-square-peg), ui-serif, Georgia, serif",
              fontSize: 30,
              lineHeight: "32px",
              color: "#52525b",
              minHeight: 32,
              maxWidth: 288,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            {quoteText}
            {quoteText.length > 0 && quoteText.length < QUOTE.length && (
              <span style={{ opacity: 0.5 }}>|</span>
            )}
          </div>
          <div
            style={{
              fontFamily: "var(--font-square-peg), ui-serif, Georgia, serif",
              fontSize: 24,
              lineHeight: "28px",
              color: "#a1a1aa",
              marginBottom: 80,
              marginTop: 8,
              paddingRight: 12,
              textAlign: "right",
              minHeight: 28,
            }}
          >
            {sigText}
            {sigText.length > 0 && sigText.length < SIG.length && (
              <span style={{ opacity: 0.5 }}>|</span>
            )}
          </div>
        </div>

        {/* ── Footer ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0 32px",
            fontSize: 14,
            letterSpacing: "-0.14px",
          }}
        >
          <div style={{ width: 144, textAlign: "right", color: "#a1a1aa" }}>
            &copy; 2026 Leo Mishin
          </div>
          <a
            href="https://scalewithcontent.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#a1a1aa",
              textDecoration: "none",
              transition: "filter 500ms",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.filter = "saturate(1.3) brightness(0.8)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.filter = "none";
            }}
          >
            Scale with Content
          </a>
          <div style={{ marginLeft: "auto", color: "#a1a1aa" }}>Made with ❤️</div>
        </div>
      </div>

    </div>
  );
}
