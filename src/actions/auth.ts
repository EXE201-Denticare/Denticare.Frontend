"use server"

import { auth, signIn as signInAuthJS, signOut } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/configs/route.config"
import { SignInSchema, SignInType } from "@/schemas/auth.schema"
import { AuthError } from "next-auth"

import { apiServer } from "@/lib/api"

type Props = {
  values: SignInType
  callbackUrl?: string | null
}

export async function signIn({ values, callbackUrl }: Props) {
  const validatedFields = SignInSchema.safeParse(values)

  if (!validatedFields.success) {
    return {
      error: "Invalid Fields",
    }
  }

  const { email, password } = validatedFields.data

  try {
    await signInAuthJS("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    })

    return
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" }
        default:
          return {
            error: "An unexpected error occurred while signing in. default",
          }
      }
    }

    throw error
  }
}

export async function logOut() {
  const session = await auth()
  if (!session) return

  const { accessToken, refreshToken } = session
  try {
    await apiServer().post("/api/denticare/sign-out", {
      accessToken,
      refreshToken,
    })
  } catch (error) {
    return { error: "An unexpected error occurred while signing out." }
  }
  await signOut({ redirectTo: "/auth/sign-in" })

  return { success: "Logged out successfully!" }
}
