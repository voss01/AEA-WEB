"use server"; 

import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

export async function loginWithAzure() {
  await signIn("azure-ad", { redirectTo: "/auth-redirect" });
}

export async function logoutUser() {
  await signOut({ redirect: false });

  // In locale usa localhost:3000, in produzione userà NEXTAUTH_URL (es. https://aeapolimi.it)
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
  const postLogoutRedirectUri = encodeURIComponent(baseUrl);

  const tenantId = process.env.AZURE_AD_TENANT_ID;
  const microsoftLogoutUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/logout?post_logout_redirect_uri=${postLogoutRedirectUri}`;

  redirect(microsoftLogoutUrl);
}