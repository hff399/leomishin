"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers" },
];

export default function NavBar() {
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    setHoveredHref(null);
  }, [pathname]);

  if (pathname.startsWith("/keystatic")) return null;

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
      {/* Single pill: logo + links */}
      <nav
        style={{
          pointerEvents: "auto",
          display: "flex",
          height: 40,
          alignItems: "center",
          gap: 16,
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

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
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

      {/* Contact button */}
      <a
        href="mailto:leo@leomishin.com"
        style={{
          pointerEvents: "auto",
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
  );
}
