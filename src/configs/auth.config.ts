import { env } from "@/env"
import { SignInSchema } from "@/schemas/auth.schema"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"

import { db } from "@/lib/db"

export default {
  providers: [
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = SignInSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data

          const user = await db.user.findFirst({ where: { email } })

          if (!user || !user.password) return null

          const isValid = user.password === password

          if (isValid) return { ...user, id: user.user_id }
        }

        return null
      },
    }),
  ],
} satisfies NextAuthConfig
