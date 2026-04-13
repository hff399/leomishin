"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    setMobileOpen(false);
    setHoveredHref(null);
  }, [pathname]);

  if (pathname.startsWith("/keystatic")) return null;

  // The pill follows hover; when not hovering, it snaps to active
  const pillTarget = hoveredHref ?? NAV_LINKS.find((l) => isActive(l.href))?.href ?? null;

  return (
    <div
      style={{
        position: "fixed",
        top: 16,
        left: 16,
        right: 16,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        pointerEvents: "none",
      }}
    >
      {/* Left pill */}
      <nav
        style={{
          pointerEvents: "auto",
          position: "relative",
          display: "flex",
          height: 40,
          alignItems: "center",
          gap: 20,
          borderRadius: 9999,
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          paddingLeft: 16,
          paddingRight: 6,
          fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            color: "#0a0a0a",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Leo Mishin
        </Link>

        {/* Desktop links */}
        <div
          className="nav-desktop-links"
          style={{
            display: "none",
            alignItems: "center",
            gap: 2,
            position: "relative",
          }}
          onMouseLeave={() => setHoveredHref(null)}
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            const showPill = pillTarget === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredHref(link.href)}
                style={{
                  position: "relative",
                  borderRadius: 9999,
                  padding: "5px 12px",
                  fontSize: 13,
                  fontWeight: 500,
                  color:
                    active || hoveredHref === link.href
                      ? "#0a0a0a"
                      : "rgba(10,10,10,0.5)",
                  textDecoration: "none",
                  transition: "color 200ms",
                }}
              >
                {showPill && (
                  <motion.div
                    layoutId="nav-pill"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 9999,
                      background: "rgba(10,10,10,0.06)",
                    }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 1 }}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Right side */}
      <div style={{ pointerEvents: "auto", display: "flex", alignItems: "center" }}>
        {/* Mobile */}
        <div
          className="nav-mobile-right"
          style={{
            display: "flex",
            height: 40,
            alignItems: "center",
            gap: 8,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            paddingLeft: 8,
          }}
        >
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "flex",
              width: 32,
              height: 32,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              background: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span style={{ display: "block", height: 1.5, width: 14, background: "#0a0a0a", transformOrigin: "center", transition: "all 200ms", transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none" }} />
            <span style={{ display: "block", height: 1.5, width: 14, background: "#0a0a0a", transition: "opacity 200ms", opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ display: "block", height: 1.5, width: 14, background: "#0a0a0a", transformOrigin: "center", transition: "all 200ms", transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
          </button>
          <a
            href="mailto:hello@scalewithcontent.com"
            style={{
              display: "flex",
              height: 40,
              alignItems: "center",
              borderRadius: 9999,
              background: "#0a0a0a",
              padding: "0 18px",
              fontSize: 13,
              fontWeight: 500,
              color: "white",
              textDecoration: "none",
              fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
            }}
          >
            Contact
          </a>
        </div>

        {/* Desktop */}
        <a
          href="mailto:hello@scalewithcontent.com"
          className="nav-desktop-contact"
          style={{
            display: "none",
            height: 36,
            alignItems: "center",
            borderRadius: 9999,
            background: "#0a0a0a",
            padding: "0 16px",
            fontSize: 13,
            fontWeight: 500,
            color: "white",
            textDecoration: "none",
            transition: "background 200ms",
            fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#333"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#0a0a0a"; }}
        >
          Get in touch
        </a>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.12 } }}
            className="nav-mobile-menu"
            style={{
              pointerEvents: "auto",
              position: "fixed",
              top: 60,
              left: 16,
              right: 16,
              borderRadius: 16,
              border: "1px solid rgba(0,0,0,0.06)",
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              padding: "16px 8px",
              fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    borderRadius: 10,
                    padding: "10px 12px",
                    fontSize: 15,
                    fontWeight: 500,
                    color: isActive(link.href) ? "#0a0a0a" : "rgba(10,10,10,0.5)",
                    textDecoration: "none",
                    background: isActive(link.href) ? "rgba(10,10,10,0.04)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div style={{ margin: "8px 12px 4px", borderTop: "1px solid rgba(0,0,0,0.06)" }} />
              <a
                href="mailto:hello@scalewithcontent.com"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "inline-flex",
                  height: 36,
                  alignItems: "center",
                  borderRadius: 9999,
                  background: "#0a0a0a",
                  padding: "0 16px",
                  margin: "4px 12px 0",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "white",
                  textDecoration: "none",
                  width: "fit-content",
                }}
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
