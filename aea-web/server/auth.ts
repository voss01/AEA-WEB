//import { db } from "@/server";
import NextAuth from "next-auth";

import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  //adapter: DrizzleAdapter(db) as Adapter,
  secret: [""],
  //secret: process.env.AUTH_SECRET!,
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token }) {
      //if(session && token.sub){
      //  session.user.id = token.sub
      //}
      //if(session.user && token.role){
      //  session.user.role = token.role as string
      //}

      //if(session.user){
      //  session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean
      //  session.user.name = token.name
      //  session.user.email = token.email as string
      //  session.user.image = token.image as string
      //  session.user.isOAuth = token.isOAuth as boolean
      //}
      return session;
    },
    async jwt({ token }) {
      //if(!token.sub) {return token}
      //const existingUser = await db.query.users.findFirst({
      //  where: eq(users.id, token.sub)
      //});

      //if(!existingUser) {return token}
      //const existingAccount = await db.query.accounts.findFirst({
      //  where: eq(accounts.userId, token.sub),
      //});

      //token.isOAuth = !!existingAccount
      //token.isTwoFactorEnabled = existingUser.twoFactorEnabled
      //token.image = existingUser.image
      //token.name = existingUser.name
      //token.email = existingUser.email
      //token.role = existingUser.role

      return token;
    },
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),

    Credentials({
      authorize: async (credentials) => {
        //const validatedFields = LoginSchema.safeParse(credentials);
        //if (validatedFields.success) {
        //  const { email, password } = validatedFields.data;

        //  const user = await db.query.users.findFirst({
        //    where: eq(users.email, email),
        //  });

        //  if (!user || !user.password) return null;
        //  const passswordMatch = await bcrypt.compare(password, user.password);
        //  if (passswordMatch) return user;
        //}
        return null;
      },
    }),
  ],
});
