import Image from "next/image"

import { DollarSign, Plus, Sparkles } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  service: any
}

export default function ServiceCard() {
  return (
    <div className="block rounded-lg">
      <div className="relative h-44 w-full">
        <Image
          fill
          alt="img"
          src="/assets/backgrounds/bg-1.png"
          className="rounded-md object-cover object-center"
        />
      </div>

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Service Name</dt>

            <dd className="text-lg font-medium">Dịch vụ nhổ răng</dd>
          </div>
          <div>
            <dt className="sr-only">Description </dt>

            <dd className="mt-1 line-clamp-3 h-12 text-xs text-gray-500">
              Đây là dịch vụ nhổ răng
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <Sparkles className="size-4 text-primary" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Loại</p>

              <p className="font-medium">Regular</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <DollarSign className="size-4 text-primary" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Giá</p>

              <p className="font-medium">120 000 VND</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full">
        <Button
          className="flex w-full items-center"
          onClick={() => toast.info("Coming Soon")}
        >
          <Plus className="mr-2 size-4" />
          Thêm dịch vụ
        </Button>
      </div>
    </div>
  )
}
