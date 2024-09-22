import Image from "next/image"

import { StarFilledIcon } from "@radix-ui/react-icons"
import { Phone } from "lucide-react"

import { Separator } from "@/components/ui/separator"

export default function ClinicInfoSection() {
  return (
    <section className="flex gap-8">
      <div className="relative h-32 w-60">
        <Image
          src={"/assets/backgrounds/bg-1.png"}
          alt="Clinic"
          className="rounded-lg object-cover"
          fill
        />
      </div>

      <div className="flex w-full items-start justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">Nha khoa Hoàng Kim</h1>
          <p className="mt-2 text-pretty text-sm text-muted-foreground">
            123 Phạm Văn Hai, P.2, Q.Tân Bình, TP.Hồ Chí Minh
          </p>
          <p className="flex items-center text-pretty text-sm text-muted-foreground">
            <Phone className="mr-2 size-4" /> +84 123 456 789
          </p>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">{4}</h1>
            <div className="flex gap-x-0.5">
              {Array.from({ length: Math.round(4) }).map((_, index) => (
                <StarFilledIcon key={index} className="size-3 text-black" />
              ))}
            </div>
          </div>

          <Separator orientation="vertical" className="mx-4" />

          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">{4}</h1>
            <p className="text-nowrap text-xs">Đánh giá</p>
          </div>
        </div>
      </div>
    </section>
  )
}
