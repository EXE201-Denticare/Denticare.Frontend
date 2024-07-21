import { SignInSchema } from "@/schemas/auth.schema"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"

import { db } from "@/lib/db"

export default {
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    // Github({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // }),
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
