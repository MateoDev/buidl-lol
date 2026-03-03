import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "buidl.lol — Agent Hackathon Platform",
  description: "The complete open-source platform for AI-powered hackathons. Deploy agents that handle team formation, mentorship, submissions, and judging.",
  keywords: ["hackathon", "AI", "agents", "open source", "developer", "competition"],
  authors: [{ name: "EVM Systems", url: "https://evmsystems.ai" }],
  openGraph: {
    title: "buidl.lol — Agent Hackathon Platform",
    description: "The complete open-source platform for AI-powered hackathons.",
    url: "https://buidl.lol",
    siteName: "buidl.lol",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "buidl.lol — Agent Hackathon Platform",
    description: "The complete open-source platform for AI-powered hackathons.",
    creator: "@buidl_lol",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
