"use client";

import { usePathname } from "next/navigation";

interface LayoutShellProps {
  nav: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

export default function LayoutShell({ nav, footer, children }: LayoutShellProps) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <>
      {/* Mostriamo la Navbar pubblica solo se NON siamo nella dashboard */}
      {!isDashboard && nav}
      
      {children}
      
      {/* Mostriamo il Footer pubblico solo se NON siamo nella dashboard */}
      {!isDashboard && footer}
    </>
  );
}