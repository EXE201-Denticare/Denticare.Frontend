import React from "react"

import Image from "next/image"

import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

import MaxWidthWrapper from "@/components/layouts/max-width-wrapper"

export default function BannerSection() {
  return (
    <div className="relative mx-auto max-w-[85rem] bg-blue-100/60 p-8">
      <div className="grid lg:grid-cols-7 lg:items-center lg:gap-x-8 xl:gap-x-12">
        <div className="lg:col-span-3">
          <h1 className="mb-4 block text-lg font-bold tracking-tighter text-gray-800">
            Nụ cười của bạn, ưu tiên của chúng tôi
          </h1>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">
            Đặt lịch tại Denticare ngay hôm nay!
          </h1>

          <p className="mt-3 text-lg text-gray-800">
            Đặt lịch hẹn nha khoa của bạn một cách dễ dàng và nhanh chóng. Với
            đội ngũ chuyên gia giàu kinh nghiệm và các dịch vụ chăm sóc răng
            miệng toàn diện, chúng tôi cam kết mang đến cho bạn nụ cười rạng rỡ
            và sức khỏe răng miệng tối ưu.
          </p>

          <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 lg:mt-8">
            <Button
              className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent px-4 py-3 text-sm font-medium text-white disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
              size={"lg"}
            >
              Đặt lịch tại Denticare <ChevronRight className="size-4" />
            </Button>
          </div>
          <div className="mt-6 lg:mt-12">
            <span className="text-xs font-medium uppercase text-gray-800">
              Trusted by:
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 mt-10 lg:col-span-4 lg:mt-0">
          <div className="">12331</div>
        </div>
      </div>
    </div>
  )
}
