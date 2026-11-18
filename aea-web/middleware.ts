import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user?.role;

  const isDashboardArea = nextUrl.pathname.startsWith("/dashboard");
  const isAdminArea = nextUrl.pathname.startsWith("/dashboard/admin");

  if (isDashboardArea && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  if (isAdminArea && userRole !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  if (nextUrl.pathname === "/auth-redirect") {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/", nextUrl));
    }
    if (userRole === "admin") {
      return NextResponse.redirect(new URL("/dashboard/admin", nextUrl));
    } else {
      return NextResponse.redirect(new URL("/dashboard", nextUrl));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};