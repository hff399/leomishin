import type { Metadata, Viewport } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Leo Mishin — Content Strategist & Founder",
  description:
    "Building done-for-you content systems for B2B founders. Over $1M tracked in client revenue. 100% organic.",
  openGraph: {
    title: "Leo Mishin — Content Strategist & Founder",
    description:
      "Building done-for-you content systems for B2B founders. Over $1M tracked in client revenue. 100% organic.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ebGaramond.variable}>
      <body>{children}</body>
    </html>
  );
}
