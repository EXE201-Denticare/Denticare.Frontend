"use server"

import { auth, signOut } from "@/auth"

import { apiServer } from "@/lib/api"

export const logout = async () => {
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
