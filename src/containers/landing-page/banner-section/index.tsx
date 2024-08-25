import React from "react"

import Image from "next/image"

import MaxWidthWrapper from "@/components/layouts/max-width-wrapper"

export default function BannerSection() {
  return (
    <MaxWidthWrapper className="relative">
      <div className="relative h-96">
        <Image
          src="/assets/sliders/slider2.jpg"
          alt="banner"
          className="rounded-xl"
          fill
        />
      </div>
    </MaxWidthWrapper>
  )
}
