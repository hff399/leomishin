import { COLOR_TEXT_MUTED } from "@/app/lib/tokens";

export default function Dots() {
  return (
    <div style={{ margin: "80px 0", display: "flex", gap: "6px" }}>
      <div style={{ width: 2, height: 2, borderRadius: 999, background: COLOR_TEXT_MUTED }} />
      <div style={{ width: 2, height: 2, borderRadius: 999, background: COLOR_TEXT_MUTED }} />
      <div style={{ width: 2, height: 2, borderRadius: 999, background: COLOR_TEXT_MUTED }} />
    </div>
  );
}
