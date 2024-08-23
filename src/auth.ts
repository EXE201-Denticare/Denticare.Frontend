import authConfig from "@/configs/auth.config"
import { SignInResType } from "@/schemas/auth.schema"
import { decode, JwtPayload } from "jsonwebtoken"
import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"

import { apiServer } from "@/lib/api"

async function refreshAccessToken(token: JWT) {
  try {
    const res = await apiServer().post("/api/denticare/refresh-token", {
      refreshToken: token.refreshToken,
      accessToken: token.accessToken,
    })

    const { response } = res.data as SignInResType
    const { accessToken, refreshToken, expiredAt, user } = response

    const newTokens = {
      accessToken,
      refreshToken,
    }

    const accessTokenExpires = getAccessTokenExpires(accessToken)

    console.log("🔥 New tokens received")

    return {
      ...token,
      accessToken: newTokens.accessToken,
      refreshToken: newTokens.refreshToken ?? token.refreshToken,
      accessTokenExpires: accessTokenExpires ?? token.accessTokenExpires,
      expiredAt,
      user,
    }
  } catch (error) {
    console.log("🔥 Refresh token error", error)

    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}

function getAccessTokenExpires(accessToken: string): number | null {
  const payload = decode(accessToken) as JwtPayload

  if (payload && payload.exp) {
    const accessTokenExpires = payload.exp * 1000 // Convert to milliseconds

    return accessTokenExpires
  }

  return null
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // user is only available the first time a user signs in authorized

      // Check if user is logged in with google
      // if (account?.provider === "google" && user) {
      //   token.user.fullName = user.name ?? ""
      //   token.user.email = user.email ?? ""
      //   token.user.image = user.image ?? ""
      //   token.user.id = user.id ?? ""

      //   return { token }
      // }

      if (token.accessToken) {
        const accessTokenExpires = getAccessTokenExpires(token.accessToken)
        if (accessTokenExpires) {
          token.accessTokenExpires = accessTokenExpires
        }
      }

      // Run the first time a user signs in with credentials
      if (account?.provider === "credentials" && user) {
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
          accessTokenExpires: token.accessTokenExpires,
        }
      }

      // Calculate expiration time and remaining time
      const refreshThreshold = 5 * 60 * 1000 // 5 minutes before the token expires
      const refreshTimeInSeconds = Math.max(
        0,
        Math.floor(
          (token.accessTokenExpires - Date.now() - refreshThreshold) / 1000
        )
      )

      if (refreshTimeInSeconds > 0) {
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

      if (token.accessTokenExpires && session.user) {
        session.accessTokenExpires = token.accessTokenExpires
      }

      if (token.error && session.user) {
        session.error = token.error
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
