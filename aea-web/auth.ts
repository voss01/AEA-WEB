import NextAuth from "next-auth";
import AzureAD from "next-auth/providers/azure-ad";
import { JWT } from "next-auth/jwt";

async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const url = `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/oauth2/v2.0/token`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.AZURE_AD_CLIENT_ID!,
        client_secret: process.env.AZURE_AD_CLIENT_SECRET!,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken!,
        scope: "openid profile email offline_access User.Read GroupMember.Read.All Mail.Read Sites.Read.All Files.Read.All",
        prompt: "select_account",
      }),
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      expiresAt: Math.floor(Date.now() / 1000) + refreshedTokens.expires_in,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error("Errore durante il rinnovo del token Microsoft:", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    AzureAD({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
      authorization: {
        params: {
          scope: "openid profile email offline_access User.Read GroupMember.Read.All Mail.Read Sites.Read.All",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;
      const emailDomain = user.email.split("@")[1]?.toLowerCase();
      const allowedDomain = process.env.ALLOWED_DOMAIN?.toLowerCase();

      if (emailDomain !== allowedDomain) {
        console.warn(`Accesso negato per dominio non autorizzato: ${user.email}`);
        return false;
      }
      return true;
    },

    async jwt({ token, account, user }) {
      if (account && account.access_token) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at ?? Math.floor(Date.now() / 1000) + 3600;
        token.name = user.name;
        token.email = user.email;

        try {
          const response = await fetch("https://graph.microsoft.com/v1.0/me/memberOf", {
            headers: { Authorization: `Bearer ${account.access_token}` },
          });

          if (response.ok) {
            const data = await response.json();
            const isAdmin = data.value?.some(
              (group: { id: string }) => group.id === process.env.AZURE_ADMIN_GROUP_ID
            );
            token.role = isAdmin ? "admin" : "user";
          } else {
            token.role = "user";
          }
        } catch (error) {
          console.error("Errore verifica gruppo Admin:", error);
          token.role = "user";
        }

        return token;
      }

      if (token.expiresAt && Date.now() < (token.expiresAt - 60) * 1000) {
        return token; 
      }

      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role || "user";
        session.user.name = token.name;
      }
      session.accessToken = token.accessToken;
      session.error = token.error;
      return session;
    },
  },
});