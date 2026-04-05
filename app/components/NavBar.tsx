"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const navGroupRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLAnchorElement>(null);
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false });

  const snapToActive = useCallback(() => {
    const active = activeRef.current;
    const group = navGroupRef.current;
    if (!active || !group) return;
    const gRect = group.getBoundingClientRect();
    const aRect = active.getBoundingClientRect();
    setPill({ left: aRect.left - gRect.left, width: aRect.width, visible: true });
  }, []);

  useEffect(() => {
    snapToActive();
  }, [pathname, snapToActive]);

  const movePillTo = (el: HTMLAnchorElement) => {
    const group = navGroupRef.current;
    if (!group) return;
    const gRect = group.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();
    setPill({ left: eRect.left - gRect.left, width: eRect.width, visible: true });
  };

  const links = [
    { label: "About", href: "/" },
    { label: "History", href: "/history" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <div
      className="sm:!bottom-10"
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1001,
        color: "#a1a1aa",
      }}
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
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.13px",
          whiteSpace: "nowrap",
          fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Inset border via pseudo-like overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.1)",
            pointerEvents: "none",
            transition: "border-color 500ms cubic-bezier(.6,.6,0,1)",
          }}
        />

        {/* Nav link group */}
        <div
          ref={navGroupRef}
          className="sm:gap-x-4"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "0 2px",
          }}
          onMouseLeave={snapToActive}
        >
          {/* Blurry glow layer */}
          <div
            style={{
              position: "absolute",
              top: 0,
              height: "100%",
              borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
              filter: "blur(8px)",
              transform: "scale(0.9)",
              transition: "left 300ms cubic-bezier(.6,.6,0,1), width 300ms cubic-bezier(.6,.6,0,1), opacity 200ms",
              left: pill.left,
              width: pill.width,
              opacity: pill.visible ? 1 : 0,
              pointerEvents: "none",
            }}
          />
          {/* Solid fill layer */}
          <div
            style={{
              position: "absolute",
              top: 0,
              height: "100%",
              borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              transition: "left 300ms cubic-bezier(.6,.6,0,1), width 300ms cubic-bezier(.6,.6,0,1), opacity 200ms",
              left: pill.left,
              width: pill.width,
              opacity: pill.visible ? 1 : 0,
              pointerEvents: "none",
            }}
          />

          {links.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <span key={link.href} style={{ display: "flex", alignItems: "center", gap: "0 2px" }}>
                {i > 0 && (
                  <span
                    style={{
                      width: 1,
                      height: 1,
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.8)",
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  />
                )}
                <a
                  ref={isActive ? activeRef : undefined}
                  href={link.href}
                  onMouseEnter={(e) => {
                    movePillTo(e.currentTarget);
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive ? "white" : "rgba(255,255,255,0.7)";
                  }}
                  style={{
                    position: "relative",
                    zIndex: 1,
                    borderRadius: 999,
                    padding: "4px 14px",
                    color: isActive ? "white" : "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "color 300ms cubic-bezier(.6,.6,0,1)",
                  }}
                >
                  {link.label}
                  {isActive && (
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
                  )}
                </a>
              </span>
            );
          })}
        </div>

        {/* Divider */}
        <div style={{ height: 12, width: 1, background: "rgba(255,255,255,0.1)", flexShrink: 0 }} />

        {/* Contact button */}
        <a
          href="/contact"
          style={{
            position: "relative",
            zIndex: 1,
            marginLeft: 14,
            borderRadius: 999,
            padding: "4px 14px",
            color: "rgba(255,255,255,0.8)",
            background: pathname === "/contact" ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.16)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            textDecoration: "none",
            transition: "background 500ms cubic-bezier(.6,.6,0,1)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.22)"; }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = pathname === "/contact" ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.16)";
          }}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
