import { auth, signOut } from "@/auth"

import { Button } from "@/components/ui/button"

export default async function Page() {
  const session = await auth()
  return (
    <div className="h-[200vh]">
      <h1>Xin chào 123 , đây là denticare </h1>
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
