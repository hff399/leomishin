"use client";

import { useId } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { BaseChart, ChartTooltip, MONO, SANS, type BaseChartProps, type RenderChartArgs } from "./BaseChart";

export default function LineChart({ dataJson, caption, color }: BaseChartProps) {
  const uid = useId().replace(/:/g, "");
  const areaGradientId = `line-area-${uid}`;

  return (
    <BaseChart
      dataJson={dataJson}
      caption={caption}
      color={color}
      renderChart={({ data, width, height }: RenderChartArgs) => (
        <AreaChart
          width={width}
          height={height}
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
    />
  );
}
