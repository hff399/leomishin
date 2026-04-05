"use client";

import { useState } from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import { BaseChart, ChartTooltip, MONO, SANS, type BaseChartProps, type RenderChartArgs } from "./BaseChart";

export default function BarChart({ dataJson, caption, color }: BaseChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <BaseChart
      dataJson={dataJson}
      caption={caption}
      color={color}
      renderChart={({ data, width, height }: RenderChartArgs) => (
        <RechartsBarChart
          width={width}
          height={height}
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
    />
  );
}
