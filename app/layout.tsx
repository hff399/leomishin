import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Square_Peg, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const squarePeg = Square_Peg({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-square-peg",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Leo Mishin — Entrepreneur",
  description:
    "Building companies out of Tbilisi. mono.ge, Scale with Content, Merchant AI.",
  openGraph: {
    title: "Leo Mishin — Entrepreneur",
    description:
      "Building companies out of Tbilisi. mono.ge, Scale with Content, Merchant AI.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${squarePeg.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        {children}
        <NavBar />
      </body>
    </html>
  );
}
