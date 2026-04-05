"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [focused, setFocused] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setState("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <div style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid #e5e5e5" }}>
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            <div
              style={{
                fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
                fontSize: 26,
                color: "#171717",
                marginBottom: 6,
              }}
            >
              You&apos;re in.
            </div>
            <div
              style={{
                fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
                fontSize: 14,
                color: "#a1a1aa",
                lineHeight: "22px",
              }}
            >
              You&apos;ll hear from me when something&apos;s worth saying.
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Heading */}
            <div
              style={{
                fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
                fontSize: 26,
                color: "#171717",
                marginBottom: 6,
              }}
            >
              Stay in the loop
            </div>
            <div
              style={{
                fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
                fontSize: 14,
                lineHeight: "22px",
                color: "#a1a1aa",
                marginBottom: 24,
              }}
            >
              Essays and takes — when they&apos;re worth it.
            </div>

            {/* Unified pill input */}
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 48,
                  borderRadius: 999,
                  border: `1.5px solid ${focused ? "#a1a1aa" : "#e5e5e5"}`,
                  background: "white",
                  padding: "0 6px 0 20px",
                  transition: "border-color 200ms",
                  gap: 8,
                }}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
                    fontSize: 14,
                    letterSpacing: "-0.14px",
                    color: "#171717",
                  }}
                />
                {/* Divider */}
                <div style={{ width: 1, height: 20, background: "#e5e5e5", flexShrink: 0 }} />
                {/* Submit button */}
                <button
                  type="submit"
                  disabled={state === "loading"}
                  style={{
                    height: 36,
                    padding: "0 18px",
                    borderRadius: 999,
                    background: "#171717",
                    color: "white",
                    border: "none",
                    fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
                    fontSize: 13,
                    letterSpacing: "-0.1px",
                    cursor: state === "loading" ? "default" : "pointer",
                    flexShrink: 0,
                    transition: "opacity 200ms",
                    opacity: state === "loading" ? 0.5 : 1,
                  }}
                >
                  {state === "loading" ? "…" : "Subscribe"}
                </button>
              </div>

              {/* Error / note */}
              <div
                style={{
                  marginTop: 12,
                  fontFamily: "var(--font-ibm-plex-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: 11,
                  letterSpacing: "0.1px",
                  color: state === "error" ? "#ef4444" : "#c4c4c7",
                }}
              >
                {state === "error" ? "Something went wrong — try again." : "No spam. Unsubscribe anytime."}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
