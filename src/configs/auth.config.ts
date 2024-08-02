import { env } from "@/env"
import { SignInResType, SignInSchema } from "@/schemas/auth.schema"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"

import api from "@/lib/api"

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

          try {
            const { data } = await api.post<SignInResType>(
              "/api/denticare/sign-in",
              {
                email,
                password,
              }
            )

            return data.response
          } catch (error) {
            return null
          }
        }

        return null
      },
    }),
  ],
} satisfies NextAuthConfig
