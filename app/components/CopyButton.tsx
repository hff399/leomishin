"use client";

import { useState } from "react";
import {
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SUBTLE,
  COLOR_BG_BADGE,
} from "@/app/lib/tokens";

export default function CopyButton() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@scalewithcontent.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={copyEmail}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        border: "1px solid #e5e5e5",
        borderRadius: 16,
        padding: "20px 24px",
        background: "transparent",
        cursor: "pointer",
        textAlign: "left",
        transition: "background 300ms",
        marginBottom: 40,
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.02)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
    >
      <div>
        <div style={{ color: COLOR_TEXT_PRIMARY, fontWeight: 500, marginBottom: 4, fontFamily: "inherit", fontSize: 14 }}>
          hello@scalewithcontent.com
        </div>
        <div style={{ color: COLOR_TEXT_SUBTLE, fontFamily: "inherit", fontSize: 14 }}>Click to copy</div>
      </div>
      <div
        style={{
          fontSize: 12,
          background: copied ? "#d1fae5" : COLOR_BG_BADGE,
          borderRadius: 999,
          padding: "4px 12px",
          transition: "background 200ms, color 200ms",
          color: copied ? "#065f46" : COLOR_TEXT_SUBTLE,
          flexShrink: 0,
        }}
      >
        {copied ? "Copied!" : "Copy"}
      </div>
    </button>
  );
}
