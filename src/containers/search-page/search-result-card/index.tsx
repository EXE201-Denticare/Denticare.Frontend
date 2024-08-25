import React from "react"

import Image from "next/image"
import { useRouter } from "next/navigation"

import { StarFilledIcon } from "@radix-ui/react-icons"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function SearchResultCard() {
  const router = useRouter()
  return (
    <Card
      className="flex cursor-pointer flex-col p-4 hover:shadow-md md:flex-row"
      onClick={() => router.push("/clinic/1")}
    >
      <div className="relative h-40 w-full shrink-0 md:h-52 md:w-80">
        <Image
          src={"/assets/images/clinics/clinic-1.jpg"}
          className="rounded-lg object-cover"
          alt="Clinic"
          fill
        />
      </div>

      <div className="mt-2 flex grow flex-col space-y-2 md:mt-0 md:pl-5">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            123 Phạm Văn Hai, P.2, Q.Tân Bình, TP.Hồ Chí Minh
          </p>
          <div className="flex flex-nowrap items-center">
            <StarFilledIcon className="size-4 text-yellow-400" />
            <span className="ml-2 text-sm text-gray-500">{4.5}</span>
          </div>
        </div>

        <h4 className="text-xl font-semibold">Nha khoa Hoàng Kim</h4>

        <p className="grow text-sm text-muted-foreground">
          Nhổ răng - Khám Răng chuyên sâu - Niềng răng - Khám răng tổng quát -
          Trám răng - Trồng răng
        </p>

        <div className="flex items-center justify-end">
          <Button
            className="flex w-full md:w-fit"
            onClick={() => router.push("/clinic/1")}
          >
            Xem chi tiết
            <ChevronRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
