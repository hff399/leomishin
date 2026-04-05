"use client";

import { useLayoutEffect, useState, useRef, useId } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  type TooltipPayload,
} from "recharts";

interface DataPoint { label: string; value: number; }
interface LineChartProps { dataJson: string; caption?: string; color?: string; }

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

export default function LineChart({ dataJson, caption }: LineChartProps) {
  let data: DataPoint[] = [];
  try { data = dataJson ? JSON.parse(dataJson) : []; } catch { data = []; }

  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const uid = useId().replace(/:/g, "");
  const areaGradientId = `line-area-${uid}`;

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
            <AreaChart
              width={width}
              height={180}
              data={data}
              margin={{ top: 6, right: 2, left: -22, bottom: 0 }}
            >
              <defs>
                <linearGradient id={areaGradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#171717" stopOpacity={0.06} />
                  <stop offset="100%" stopColor="#171717" stopOpacity={0} />
                </linearGradient>
              </defs>

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
                cursor={{ stroke: "rgba(0,0,0,0.08)", strokeWidth: 1, strokeDasharray: "4 3" }}
              />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#171717"
                strokeWidth={1.5}
                fill={`url(#${areaGradientId})`}
                dot={false}
                activeDot={{
                  r: 4,
                  fill: "#ffffff",
                  stroke: "#171717",
                  strokeWidth: 1.5,
                }}
              />
            </AreaChart>
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
