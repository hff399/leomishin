import type { Metadata, Viewport } from "next";
import { EB_Garamond, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
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
  title: "Leo Mishin",
  description:
    "Building an ecosystem of new-money digital businesses — rich on cashflow, high in enterprise value, and built to scale without breaking.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Leo Mishin",
    description:
      "Building an ecosystem of new-money digital businesses — rich on cashflow, high in enterprise value, and built to scale without breaking.",
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
      className={`${ebGaramond.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        {children}
        <NavBar />
      </body>
    </html>
  );
}
