import React from "react"

import Link from "next/link"

import { auth, signOut } from "@/auth"

import { Button, buttonVariants } from "@/components/ui/button"

export default async function Page() {
  const session = await auth()
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{JSON.stringify(session)}</p>
      <p>Role: {session?.user?.role}</p>
      <form
        action={async () => {
          "use server"

          await signOut({
            redirectTo: "/auth/sign-in",
          })
        }}
      >
        <Link href="/auth/sign-in" className={buttonVariants({})}>
          Sign in
        </Link>
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  )
}
