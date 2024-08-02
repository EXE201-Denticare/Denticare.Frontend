import authConfig from "@/configs/auth.config"
import NextAuth from "next-auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // user is only available the first time a user signs in authorized
      console.log("🔥 USER", user)

      if (account && user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.expiredAt = user.expiredAt
        token.user = user.user
      }

      return token
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
