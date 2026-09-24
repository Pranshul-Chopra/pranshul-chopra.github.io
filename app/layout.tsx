import type { Metadata, Viewport } from "next";
import { Cinzel, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pranshul-chopra.github.io"),
  title: "Pranshul Chopra — Product Builder & Technical PM",
  description:
    "Product builder with strong systems intuition and technical fluency. Experienced in taking products from diagnosis to release. B.Tech Computer Science at Manipal University Jaipur.",
  keywords: [
    "Pranshul Chopra",
    "Product Manager",
    "Technical PM",
    "Product Specialist",
    "APM",
    "PranshulOS",
    "Systems Design",
    "Manipal University Jaipur",
  ],
  authors: [{ name: "Pranshul Chopra" }],
  openGraph: {
    title: "Pranshul Chopra — Product Builder & Technical PM",
    description:
      "Bridging user mental models with engineering reality. Discover how I take products from diagnosis through technical trade-offs to production release.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/pranshul.jpeg",
        width: 800,
        height: 800,
        alt: "Pranshul Chopra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranshul Chopra — Product Builder & Technical PM",
    description:
      "Taking products from diagnosis to release. B.Tech CS @ Manipal University Jaipur.",
    images: ["/pranshul.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${cinzel.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased selection:bg-gold/30 selection:text-white relative bg-navy-950`}
      >
        <div className="bg-lore-texture" />
        <div className="bg-lore-overlay" />
        <div className="bg-tapestry-grain" />
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
