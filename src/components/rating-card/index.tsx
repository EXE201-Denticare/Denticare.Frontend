import React from "react"

import { StarFilledIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import { Icons } from "@/components/icons"

type Props = {
  className?: string
  description?: string
  rating: number
  feedbackCount: number
}

export default function RatingCard({
  className,
  rating,
  feedbackCount,
  description = "Một trong những nha khoa được yêu thích tại Denticare",
}: Props) {
  return (
    <Card className={cn("w-full px-8 py-4", className)}>
      <div className="grid grid-cols-2 gap-x-5">
        <div className="flex items-center px-2">
          <Icons.leftWing className="size-[40px]" />
          <p className="text-pretty text-center text-xs font-semibold">
            {description}
          </p>
          <Icons.rightWing className="size-[40px]" />
        </div>

        <div className="flex items-center justify-end">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">{rating}</h1>
            <div className="flex gap-x-0.5">
              {Array.from({ length: Math.round(rating) }).map((_, index) => (
                <StarFilledIcon key={index} className="size-3 text-black" />
              ))}
            </div>
          </div>

          <Separator orientation="vertical" className="mx-4" />

          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">{feedbackCount}</h1>
            <p className="text-nowrap text-xs">Đánh giá</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
