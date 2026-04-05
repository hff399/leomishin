"use client";

import { useLayoutEffect, useState, useRef } from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  type TooltipPayload,
} from "recharts";

interface DataPoint { label: string; value: number; }
interface BarChartProps { dataJson: string; caption?: string; color?: string; }

const MONO = "var(--font-ibm-plex-mono), ui-monospace, 'Courier New', monospace";
const SANS = "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif";
const SERIF = "var(--font-instrument-serif), ui-serif, Georgia, serif";

function ChartTooltip({
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

export default function BarChart({ dataJson, caption }: BarChartProps) {
  let data: DataPoint[] = [];
  try { data = dataJson ? JSON.parse(dataJson) : []; } catch { data = []; }

  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


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
        <div ref={containerRef} style={{ width: "100%", height: 180 }}>
          {width > 0 && data.length > 0 && (
            <RechartsBarChart
              width={width}
              height={180}
              data={data}
              margin={{ top: 6, right: 2, left: -22, bottom: 0 }}
              barCategoryGap="38%"
              barGap={0}
            >
              <CartesianGrid
                strokeDasharray="0"
                stroke="#f0f0f0"
                vertical={false}
                strokeWidth={1}
              />

              <XAxis
                dataKey="label"
                axisLine={false}
                tickLine={false}
                tick={{
                  fontFamily: SANS,
                  fontSize: 11,
                  fill: "#a1a1aa",
                  letterSpacing: "0.01em",
                }}
                dy={8}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fontFamily: MONO,
                  fontSize: 10,
                  fill: "#a1a1aa",
                  letterSpacing: "0",
                }}
                width={44}
              />

              <Tooltip
                content={({ active, payload, label }) => (
                  <ChartTooltip active={active} payload={payload} label={label} />
                )}
                cursor={{ fill: "rgba(0,0,0,0.02)" }}
              />

              <Bar
                dataKey="value"
                radius={0}
                onMouseEnter={(_, index) => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {data.map((_, index) => (
                  <Cell
                    key={index}
                    fill="#171717"
                    fillOpacity={
                      hoveredIndex === null
                        ? 1
                        : hoveredIndex === index
                        ? 1
                        : 0.3
                    }
                    style={{ transition: "fill-opacity 180ms ease" }}
                  />
                ))}
              </Bar>
            </RechartsBarChart>
          )}
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
