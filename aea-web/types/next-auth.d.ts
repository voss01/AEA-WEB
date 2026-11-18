// types/next-auth.d.ts
import "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: "admin" | "user";
    };
    accessToken?: string;
    error?: "RefreshAccessTokenError"; 
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "admin" | "user";
    accessToken?: string;
    refreshToken?: string; 
    expiresAt?: number;    
    error?: "RefreshAccessTokenError";
  }
}

declare module "*.css";
declare module "*.scss";