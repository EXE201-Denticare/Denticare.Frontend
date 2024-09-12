import Image from "next/image"

import { StarFilledIcon } from "@radix-ui/react-icons"
import { CalendarIcon, ClockIcon } from "@radix-ui/react-icons"
import { MessageCircle, Sparkles, User } from "lucide-react"
import { toast } from "sonner"

type Props = {
  clinic: any
}

export default function CustomerClinicCard({ clinic }: Props) {
  return (
    <div
      className="cursor-pointer space-y-6 rounded-xl border bg-white px-3 py-4 shadow-md"
      onClick={() => toast.info("Coming soon...")}
    >
      <div className="relative h-[200px] w-full">
        <Image
          className="rounded-xl object-cover"
          src={"/assets/images/clinics/clinic-1.jpg"}
          alt="Clinc"
          fill
        />
      </div>

      <div className="flex flex-col items-baseline">
        <div className="flex w-full items-center">
          <h2 className="line-clamp-1 flex-auto text-lg font-semibold">
            {clinic.name}
          </h2>
          <div className="flex flex-nowrap items-center">
            <StarFilledIcon className="size-4 text-yellow-500" />
            <span className="ml-1 text-sm font-medium">
              {clinic.rating} (420)
            </span>
          </div>
        </div>

        <p className="line-clamp-1 text-sm font-normal text-gray-600">
          {clinic.address}
        </p>
      </div>

      <div className="space-y-1 text-sm text-gray-600">
        {workingHours.map((schedule, index) => (
          <div key={index} className="flex space-x-1">
            <span>{schedule.days}</span>
            <span>:</span>
            <span> {schedule.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const workingHours = [
  { days: "Thứ 2 - Thứ 6", time: "7h - 16h30" },
  { days: "Thứ 7", time: "7h - 16h" },
]
