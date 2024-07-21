import authConfig from "@/configs/auth.config"
import { Role } from "@/schemas/user.schema"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth, { DefaultSession } from "next-auth"

import { db } from "@/lib/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) return token

      const existingUser = await db.user.findUnique({
        where: {
          user_id: token.sub,
        },
      })

      console.log("existingUser", existingUser)
      if (!existingUser) return token

      token.role = existingUser.role as Role
      return token
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role as Role
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
  ...authConfig,
})
