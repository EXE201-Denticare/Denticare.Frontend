import React from "react"

import { cn } from "@/lib/utils"

function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "mx-auto size-full max-w-[85rem] px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
