"use client"

import { useSearchParams } from "next/navigation"

import { DEFAULT_LOGIN_REDIRECT } from "@/configs/routes"
import { signIn } from "next-auth/react"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

import { Button } from "@/components/ui/button"

type Props = {
  isLoading: boolean
}
export const SocialSection = ({ isLoading }: Props) => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl")

  const socialSignIn = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        disabled={isLoading}
        type="button"
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => socialSignIn("google")}
      >
        <FcGoogle className="size-5" />
      </Button>
      <Button
        disabled={isLoading}
        type="button"
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => socialSignIn("github")}
      >
        <FaGithub className="size-5" />
      </Button>
    </div>
  )
}
