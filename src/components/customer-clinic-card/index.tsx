import Image from "next/image"

import { StarFilledIcon } from "@radix-ui/react-icons"
import { toast } from "sonner"

type Props = {
  clinic: any
}

export default function CustomerClinicCard({ clinic }: Props) {
  return (
    <div
      className="h-[350px] cursor-pointer bg-white"
      onClick={() => toast.info("Coming soon...")}
    >
      <div className="relative h-[200px] w-full">
        <Image
          className="rounded-lg object-cover"
          src={"/assets/images/clinics/clinic-1.jpg"}
          alt="Clinc"
          layout="fill"
        />
      </div>
      <div className="mt-3 flex flex-col items-baseline">
        <div className="mb-2 flex w-full items-center justify-between">
          <span className="whitespace-nowrap rounded-lg bg-blue-100 px-2 py-1.5 text-xs font-bold text-blue-700">
            Denticare khuyên dùng
          </span>
          <div className="flex flex-nowrap items-center">
            <StarFilledIcon className="size-4 text-yellow-400" />
            <span className="ml-2 text-sm text-gray-500">{clinic.rating}</span>
          </div>
        </div>

        <h2 className="text-xl font-semibold">{clinic.name}</h2>
        <p className="text-sm text-muted-foreground">{clinic.address}</p>
      </div>
    </div>
  )
}
