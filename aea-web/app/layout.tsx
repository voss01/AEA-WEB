import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { Outfit } from "next/font/google";

import Nav from "@/components/navigation/nav";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Toaster from "@/components/ui/toaster";
import type { Viewport } from "next";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
const font = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Aea polimi",
  description: "Automation engineering association",
  icons: {
    icon: "/logos/aea-logo.png",
    shortcut: "/logos/aea-logo.png",
    apple: "/logos/aea-logo.png",
  },
  openGraph: {
    title: "Aea polimi",
    description: "Automation engineering association",
    url: "https://aeapolimi.it", // replace with your real domain
    siteName: "Aea polimi",
    images: [
      {
        url: "/logos/aea-logo.png", // put a 1200x630 image in /public/logos
        width: 1200,
        height: 630,
        alt: "Aea polimi logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aea polimi",
    description: "Automation engineering association",
    images: ["/logos/aea-logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} `}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Nav />
        <Toaster />

        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
