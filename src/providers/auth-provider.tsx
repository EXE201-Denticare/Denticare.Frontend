"use client"

import React, { useEffect, useState } from "react"

import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"

type AuthProviderProps = {
  children: React.ReactNode
  session: Session | null
}

export default function AuthProvider({ children, session }: AuthProviderProps) {
  const [interval, setInterval] = useState(0)
  console.log("🔥 Second before refresh token", interval)
  return (
    <SessionProvider session={session} refetchInterval={interval}>
      {children}
      <RefreshTokenHandler setInterval={setInterval} session={session} />
    </SessionProvider>
  )
}

type RefreshTokenHandlerProps = {
  session: Session | null
  setInterval: React.Dispatch<React.SetStateAction<number>>
}

const RefreshTokenHandler = ({
  setInterval,
  session,
}: RefreshTokenHandlerProps) => {
  useEffect(() => {
    if (session && session.accessTokenExpires) {
      const expirationTime = new Date(session.accessTokenExpires).getTime()
      const currentTime = Date.now()
      const timeRemaining = expirationTime - currentTime

      // Refresh 5 minutes  before the token expires
      const refreshThreshold = 5 * 60 * 1000
      const refreshTime = timeRemaining - refreshThreshold
      const refreshTimeInSeconds = Math.max(0, Math.floor(refreshTime / 1000))

      console.log("🔥 Second before refresh token", refreshTimeInSeconds)

      setInterval(refreshTimeInSeconds)
    } else {
      setInterval(0)
    }

    return () => {
      // Clean-up logic if setInterval sets an interval timer
    }
  }, [session, setInterval])

  return null
}
