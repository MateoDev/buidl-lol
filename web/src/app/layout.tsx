import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "buidl.lol - Agent Hackathon Platform",
  description: "AI-powered infrastructure for running hackathons",
  openGraph: {
    title: "buidl.lol - Agent Hackathon Platform",
    description: "AI-powered infrastructure for running hackathons",
    url: "https://buidl.lol",
    siteName: "buidl.lol",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "buidl.lol - Agent Hackathon Platform",
    description: "AI-powered infrastructure for running hackathons",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
