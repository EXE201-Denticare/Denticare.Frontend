import { redirect } from "next/navigation"

import { auth } from "@/auth"

export default async function Page() {
  const session = await auth()

  const role = session?.user?.role

  switch (role) {
    case "CUS":
      redirect("/")
    case "DE":
      redirect("/dentist")
    case "CO":
      redirect("/dashboard")
    case "SA":
      redirect("/admin")
    default:
      redirect("/")
  }
}
