"use client"

import React, { useEffect, useState, useTransition } from "react"

import { logout } from "@/actions/auth/logout"
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { toast } from "sonner"

type AuthProviderProps = {
  children: React.ReactNode
  session: Session | null
}

export default function AuthProvider({ children, session }: AuthProviderProps) {
  const [interval, setInterval] = useState(0)
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
  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition()

  async function onLogout() {
    startTransition(() => {
      logout()
        .then((data) => {
          if (data?.error) {
            toast.error(data.error)
          }
        })
        .catch(() => {
          toast.error("An unexpected error occurred while signing out.")
        })
    })
  }

  useEffect(() => {
    if (session?.error === "RefreshAccessTokenError") {
      toast.error("Làm mới phiên đăng nhập thât bại!", {
        description: "Vui lòng đăng nhập lại ",
      })
      onLogout()
    } else if (session && session.accessTokenExpires) {
      const expirationTime = new Date(session.accessTokenExpires).getTime()
      const currentTime = Date.now()
      const timeRemaining = expirationTime - currentTime

      // Refresh 5 minutes before the token expires
      const refreshThreshold = 5 * 60 * 1000
      const refreshTime = timeRemaining - refreshThreshold
      const refreshTimeInSeconds = Math.max(0, Math.floor(refreshTime / 1000))

      setInterval(refreshTimeInSeconds)
    } else {
      setInterval(0)
    }

    return () => {
      setInterval(0)
    }
  }, [session, setInterval])

  return null
}
