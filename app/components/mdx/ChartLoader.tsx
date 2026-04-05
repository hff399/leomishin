"use client";

import dynamic from "next/dynamic";

// ssr: false ensures charts only mount client-side where ResizeObserver works
export const BarChart = dynamic(() => import("./BarChart"), {
  ssr: false,
  loading: () => (
    <div style={{ margin: "36px 0", height: 292, background: "white", border: "1px solid #e5e5e5", borderRadius: 10 }} />
  ),
});

export const LineChart = dynamic(() => import("./LineChart"), {
  ssr: false,
  loading: () => (
    <div style={{ margin: "36px 0", height: 292, background: "white", border: "1px solid #e5e5e5", borderRadius: 10 }} />
  ),
});
