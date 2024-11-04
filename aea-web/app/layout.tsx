import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { Outfit } from "next/font/google";

import  Nav from "@/components/navigation/nav"
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Toaster from "@/components/ui/toaster";
import type { Viewport } from "next";
import Footer from "@/components/footer";
const font =  JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Aea polimi",
  description: "Automation engineering association",
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
      <body className={font.className}>
        <Nav />
        <Toaster />

        {children}
        <Footer />
      </body>
    </html>
  );
}
