"use client";

import { useLayoutEffect, useState, useRef } from "react";
import { type TooltipPayload } from "recharts";

// ─── Shared types ────────────────────────────────────────────────────────────

export interface DataPoint { label: string; value: number; }

export interface BaseChartProps {
  dataJson: string;
  caption?: string;
  color?: string;
}

// ─── Shared font constants ────────────────────────────────────────────────────

export const MONO = "var(--font-ibm-plex-mono), ui-monospace, 'Courier New', monospace";
export const SANS = "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif";
export const SERIF = "var(--font-eb-garamond), ui-serif, Georgia, serif";

// ─── Shared tooltip ───────────────────────────────────────────────────────────

export function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayload;
  label?: string | number;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: 6,
        padding: "8px 14px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          fontFamily: MONO,
          fontSize: 9,
          color: "#a1a1aa",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 3,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: MONO,
          fontSize: 14,
          color: "#171717",
          fontWeight: 500,
          letterSpacing: "-0.02em",
        }}
      >
        {payload[0].value?.toLocaleString()}
      </div>
    </div>
  );
}

// ─── Render-prop type ─────────────────────────────────────────────────────────

export interface RenderChartArgs {
  data: DataPoint[];
  width: number;
  height: number;
}

// ─── BaseChart ────────────────────────────────────────────────────────────────

interface BaseChartInternalProps extends BaseChartProps {
  renderChart: (args: RenderChartArgs) => React.ReactNode;
}

const CHART_HEIGHT = 180;

export function BaseChart({ dataJson, caption, renderChart }: BaseChartInternalProps) {
  let data: DataPoint[] = [];
  try { data = dataJson ? JSON.parse(dataJson) : []; } catch { data = []; }

  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.getBoundingClientRect().width);
    }
  }, []);

  const maxValue = data.length > 0 ? Math.max(...data.map((d) => d.value)) : null;
  const maxIndex = data.length > 0 ? data.findIndex((d) => d.value === maxValue) : -1;

  return (
    <figure style={{ margin: "48px 0", padding: 0 }}>
      {/* Card */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid rgba(0,0,0,0.07)",
          borderRadius: 6,
          padding: "28px 28px 20px",
        }}
      >
        {/* Headline row */}
        {maxValue !== null && (
          <div style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            paddingBottom: 20,
            borderBottom: "1px solid #f0f0f0",
            marginBottom: 24,
          }}>
            <div>
              <span
                className="hero-gradient-text"
                style={{
                  fontFamily: SERIF,
                  fontSize: 40,
                  lineHeight: "1",
                  letterSpacing: "-0.03em",
                  display: "inline-block",
                }}
              >
                {maxValue.toLocaleString()}
              </span>
            </div>
            {maxIndex !== -1 && (
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 9,
                  color: "#c4c4c7",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  paddingBottom: 4,
                }}
              >
                peak &middot; {data[maxIndex]?.label}
              </div>
            )}
          </div>
        )}

        {/* Chart */}
        <div ref={containerRef} style={{ width: "100%", height: CHART_HEIGHT }}>
          {width > 0 && data.length > 0 && renderChart({ data, width, height: CHART_HEIGHT })}
        </div>
      </div>

      {/* Caption */}
      {caption && (
        <figcaption
          style={{
            fontFamily: MONO,
            fontSize: 11,
            color: "#a1a1aa",
            textAlign: "center",
            marginTop: 12,
            letterSpacing: "0.06em",
            lineHeight: 1.6,
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
