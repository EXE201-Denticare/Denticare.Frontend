import { UserType } from "@/schemas/user.schema"
import { type DefaultSession } from "next-auth"
// eslint-disable-next-line unused-imports/no-unused-imports, @typescript-eslint/no-unused-vars
import "next-auth/jwt"

export type ExtendedUser = DefaultSession["user"] & UserType

declare module "next-auth" {
  interface Session {
    user: ExtendedUser
    accessToken: string
    refreshToken: string
    expiredAt: string
  }

  interface User {
    user: UserType
    accessToken: string
    refreshToken: string
    expiredAt: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: UserType
    accessToken: string
    refreshToken: string
    expiredAt: string
  }
}
