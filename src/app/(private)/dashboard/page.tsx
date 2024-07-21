import React from "react"

import { auth, signOut } from "@/auth"

import { Button } from "@/components/ui/button"

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
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  )
}
