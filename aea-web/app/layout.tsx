import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Mulish } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navigation/nav";
import Toaster from "@/components/ui/toaster";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LayoutShell from "@/components/navigation/layout-shell";

const font_main = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-main",
});
const font_secondary = Mulish({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-secondary",
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
    url: "https://aeapolimi.it",
    siteName: "Aea polimi",
    images: [
      {
        url: "/logos/aea-logo.png",
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
      <body className={`${font_main.variable} ${font_secondary.variable}`}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Toaster />

        {/* LayoutShell nasconde automaticamente Nav e Footer nelle rotte /dashboard */}
        <LayoutShell nav={<Nav />} footer={<Footer />}>
          {children}
        </LayoutShell>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}