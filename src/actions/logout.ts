"use server"

import { auth, signOut } from "@/auth"

import api from "@/lib/api"

export const logout = async () => {
  const session = await auth()
  if (!session) return

  const { accessToken, refreshToken } = session
  try {
    await api.post("/api/denticare/sign-out", { accessToken, refreshToken })
  } catch (error) {
    return
  }
  await signOut({ redirectTo: "/auth/sign-in" })
}
