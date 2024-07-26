import Link from "next/link"

import { ChevronRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"

import MaxWidthWrapper from "@/components/layouts/max-width-wrapper"

function SiteHeader() {
  return (
    <header className="sticky inset-x-0 top-0 z-[100] h-14 w-full shadow-sm">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          {/* Logo and navigation */}
          <div className="flex items-center gap-x-10">
            <h1 className="text-2xl font-bold text-primary">Denticare</h1>
            <nav className="hidden space-x-4 sm:block">
              {["Home", "Pricing", "Blog"].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="border-b-primary px-2 py-4 text-sm font-semibold hover:border-b-2 hover:text-primary"
                  aria-label="Home"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Auth button */}
          <div className="flex items-center space-x-5">
            <Link href="/auth/sign-in" className="text-sm hover:text-black/80">
              Sign in
            </Link>
            <Link
              href="/auth/sign-up"
              className={buttonVariants({
                className: "group flex items-center gap-x-1",
                size: "sm",
              })}
            >
              Become a member{" "}
              <ChevronRight className="size-4 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default SiteHeader
