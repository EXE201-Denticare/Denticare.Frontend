"use client"

import { useRouter, useSearchParams } from "next/navigation"

import SearchResultCard from "@/containers/search-page/search-result-card"

import MaxWidthWrapper from "@/components/layouts/max-width-wrapper"

export default function Page() {
  const router = useRouter()
  const seacrhParams = useSearchParams()
  const location = seacrhParams.get("location")

  return (
    <MaxWidthWrapper>
      <div className="my-14 space-y-4">
        <div>
          <p className="text-xs">300+ Nha khoa tại Denticare</p>
          <h1 className="mb-6 mt-2 text-3xl font-semibold">
            Nha khoa tại {location}
          </h1>
        </div>

        <div className="flex">
          <span className="cursor-pointer rounded-full border px-4 py-2 transition duration-100 ease-out hover:shadow-lg active:scale-95 active:bg-gray-100">
            Cancellation Policy
          </span>
        </div>

        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <SearchResultCard key={index} />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
