"use server"

import { signIn as signInAuthJS } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/configs/routes"
import { SignInSchema, SignInType } from "@/schemas/auth.schema"
import { AuthError } from "next-auth"

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
