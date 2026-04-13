"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function KeystaticLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/ks-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/keystatic");
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div style={{ width: 320 }}>
        <div
          style={{
            fontFamily: "var(--font-eb-garamond), ui-serif, Georgia, serif",
            fontSize: 26,
            color: "#171717",
            marginBottom: 8,
          }}
        >
          CMS
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#a1a1aa",
            marginBottom: 32,
            lineHeight: "22px",
          }}
        >
          Enter your password to continue.
        </div>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: 48,
              borderRadius: 999,
              border: `1.5px solid ${error ? "#ef4444" : "#e5e5e5"}`,
              background: "white",
              padding: "0 6px 0 20px",
              gap: 8,
              transition: "border-color 200ms",
            }}
          >
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              autoFocus
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
            <div style={{ width: 1, height: 20, background: "#e5e5e5", flexShrink: 0 }} />
            <button
              type="submit"
              disabled={loading || !password}
              style={{
                height: 36,
                padding: "0 18px",
                borderRadius: 999,
                background: "#171717",
                color: "white",
                border: "none",
                fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif",
                fontSize: 13,
                cursor: loading || !password ? "default" : "pointer",
                flexShrink: 0,
                opacity: loading || !password ? 0.5 : 1,
                transition: "opacity 200ms",
              }}
            >
              {loading ? "…" : "Enter"}
            </button>
          </div>

          {error && (
            <div
              style={{
                marginTop: 12,
                fontSize: 12,
                color: "#ef4444",
                fontFamily: "var(--font-ibm-plex-mono), ui-monospace, Menlo, monospace",
              }}
            >
              Incorrect password.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
