import authConfig from "@/configs/auth.config"
import { SignInResType } from "@/schemas/auth.schema"
import { format } from "date-fns"
import { decode, JwtPayload } from "jsonwebtoken"
import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"

import api from "@/lib/api"

async function refreshAccessToken(token: JWT) {
  try {
    const res = await api.post("/api/denticare/refresh-token", {
      refreshToken: token.refreshToken,
      accessToken: token.accessToken,
    })

    const { response } = res.data as SignInResType
    const { accessToken, refreshToken, expiredAt, user } = response

    const tokens = {
      accessToken,
      refreshToken,
    }

    console.log("🔥⚠ New tokens received", tokens)

    if (!(res.status === 200)) {
      throw tokens
    }

    return {
      ...token,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken ?? token.refreshToken,
      expiredAt,
      user,
    }
  } catch (error) {
    console.log(error)

    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // user is only available the first time a user signs in authorized

      if (token.accessToken) {
        const payload = decode(token.accessToken) as JwtPayload
        if (payload.exp) {
          token.accessTokenExpires = payload.exp * 1000
          console.log(
            "🔥 ACCESS TOKEN EXPIRES",
            format(new Date(token.accessTokenExpires), "yyyy-MM-dd HH:mm:ss")
          )
        }
      }

      if (account && user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.expiredAt = user.expiredAt
        token.user = user.user

        return {
          ...token,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          expiredAt: user.expiredAt,
          user: user.user,
        }
      }

      if (Date.now() < token.accessTokenExpires) {
        return token
      }

      // Access token has expired, try to update it
      console.log("**** Update Refresh token ******")
      return refreshAccessToken(token)
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.user.id
      }

      if (token.accessToken && session.user) {
        session.accessToken = token.accessToken
      }

      if (token.refreshToken && session.user) {
        session.refreshToken = token.refreshToken
      }

      if (token.expiredAt && session.user) {
        session.expiredAt = token.expiredAt
      }

      if (token.user && session.user) {
        session.user.fullName = token.user.fullName
        session.user.email = token.user.email
        session.user.image = token.user.image
        session.user.phoneNumber = token.user.phoneNumber
        session.user.dateOfBirth = token.user.dateOfBirth
        session.user.address = token.user.address
      }

      return session
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },

  ...authConfig,
})
