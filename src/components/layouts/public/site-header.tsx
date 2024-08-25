"use client"

import { useEffect, useMemo, useState } from "react"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { getHeaderNavList } from "@/constants/header-nav-list"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { useCurrentSession } from "@/hooks/useCurrentSession"

import { buttonVariants } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

import MaxWidthWrapper from "@/components/layouts/max-width-wrapper"
import UserButton from "@/components/layouts/public/user-button"

function SiteHeader() {
  const { session, status } = useCurrentSession()

  const [hasCheckedAuth, setHasCheckedAuth] = useState(false)

  const user = session?.user

  const pathname = usePathname()

  const navList = useMemo(() => getHeaderNavList(pathname), [pathname])

  useEffect(() => {
    if (status !== "loading") {
      setHasCheckedAuth(true)
    }
  }, [status])

  return (
    <header className="sticky inset-x-0 top-0 z-[50] flex h-20 w-full bg-white py-5 shadow-md">
      <MaxWidthWrapper className="grid h-full w-full grid-cols-2 md:grid-cols-3">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/next.svg"
              alt="logo"
              width={100}
              height={300}
              className="object-contain"
            />
          </Link>
        </div>

        <div className="hidden items-center space-x-1 md:inline-flex">
          {navList.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded-full px-4 py-1.5 font-[500] text-black/60",
                item.isActive
                  ? "text-black"
                  : "hover:bg-zinc-100 hover:text-black"
              )}
            >
              {item.lable}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end">
          {!user && (status === "loading" || !hasCheckedAuth) ? (
            <div className="">
              <Skeleton className="h-10 w-16 rounded-full" />
            </div>
          ) : user ? (
            <UserButton user={user} />
          ) : (
            <div className="space-x-5">
              <Link
                href="/auth/sign-in"
                className="text-sm hover:text-black/80"
              >
                Đăng nhập
              </Link>
              <Link
                href="/auth/sign-up"
                className={buttonVariants({
                  className: "group flex items-center gap-x-1",
                  size: "sm",
                })}
              >
                Đăng ký
                <ChevronRight className="size-4 group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default SiteHeader
