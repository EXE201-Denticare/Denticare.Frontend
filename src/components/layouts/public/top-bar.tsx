import React from "react"

import Link from "next/link"

import WordRotate from "@/components/effects/word-rotate"
import MaxWidthWrapper from "@/components/layouts/max-width-wrapper"

export default function TopBar() {
  return (
    <div className="hidden h-10 border-b py-1 text-xs text-muted-foreground md:block">
      <MaxWidthWrapper className="flex items-center justify-between">
        <nav className="space-x-2">
          <Link href="#" className="hover:text-primary">
            About Us
          </Link>
          <Link href="#" className="hover:text-primary">
            Policy
          </Link>
          <Link href="#" className="hover:text-primary">
            FAQ
          </Link>
        </nav>
        <WordRotate
          className="text-xs text-muted-foreground"
          words={[
            "Experience Excellence",
            "Smile with Confidence",
            "Gentle Care for You",
            "Healthy Teeth, Happy Life",
          ]}
        />
        <div>
          <p>
            Need help? Call Us:{" "}
            <span className="text-primary">+84 123 456 789</span>
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
