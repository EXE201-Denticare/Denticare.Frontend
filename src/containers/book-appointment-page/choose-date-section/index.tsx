"use client"

import { useState } from "react"

import Image from "next/image"

import BookingInfoSection from "@/containers/book-appointment-page/booking-info-section"
import { addDays, format } from "date-fns"
import { Calendar, User } from "lucide-react"

import { cn } from "@/lib/utils"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ChooseDateSection() {
  const dates = [0, 1, 2].map((day) => addDays(new Date(), day))
  const dentists = [
    { id: 1, name: "Nha sĩ Nguyễn Văn A" },
    { id: 2, name: "Nha sĩ Trần Thị B" },
    { id: 3, name: "Bác sĩ Lê Văn C" },
  ]

  const [selectedDentist, setSelectedDentist] = useState<number | null>(null)

  const handleDentistClick = (id: number) => {
    setSelectedDentist(id)
  }

  const generateTimeSlots = () => {
    const startTime = 9 // 9 AM
    const endTime = 22 // 10 PM (22:00)
    const interval = 30 // minutes

    const slots = []
    for (let hour = startTime; hour <= endTime; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const time = new Date(0, 0, 0, hour, minute)
        slots.push(time)
      }
    }
    return slots
  }

  const timeSlots = generateTimeSlots()
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const formatTime = (date: Date) => {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const formattedHours = hours < 10 ? `0${hours}` : hours
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
    return `${formattedHours}:${formattedMinutes}`
  }
  return (
    <div className="grid grid-cols-8 gap-4">
      <Card className="col-span-5">
        <CardHeader>
          <CardTitle className="border-l-4 border-primary pl-2 text-lg font-semibold">
            Chọn ngày đặt lịch
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="flex items-center gap-x-4">
            <Label>Ngày đặt lịch</Label>
            <Select>
              <SelectTrigger className="w-72">
                <Calendar className="mr-2 size-4" />
                <SelectValue placeholder="Chọn ngày đặt lịch khám" />
              </SelectTrigger>
              <SelectContent>
                {dates.map((date, index) => (
                  <SelectItem key={index} value={format(date, "yyyy-MM-dd")}>
                    {format(date, "EEEE, dd/MM/yyyy")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Choose dentist */}

          <div className="space-y-4">
            <p className="text-lg font-semibold">Nha sĩ</p>
            <div className="grid grid-cols-3 gap-6">
              {dentists.map((dentist) => (
                <div
                  key={dentist.id}
                  onClick={() => handleDentistClick(dentist.id)}
                  className={cn(
                    "flex cursor-pointer flex-col rounded-xl p-4",
                    selectedDentist === dentist.id
                      ? "border-2 border-primary bg-primary/10 shadow-lg"
                      : "border border-gray-300 bg-white hover:border-gray-400 hover:shadow-md"
                  )}
                >
                  <div className="relative h-60 w-full">
                    <Image
                      src={`/assets/backgrounds/bg-1.png`}
                      alt={dentist.name}
                      className="rounded-lg object-cover"
                      fill
                    />
                  </div>

                  <div className="mt-4">
                    <p className="text-lg font-medium text-gray-900">
                      {dentist.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold">Giờ đặt lịch</p>
            <div className="grid grid-cols-4 gap-4">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTime(formatTime(time))}
                  className={cn(
                    "flex w-full items-center justify-center rounded-lg border px-4 py-2 transition-colors duration-300",
                    selectedTime === formatTime(time)
                      ? "border-primary bg-primary text-white"
                      : "border-gray-300 bg-white hover:bg-gray-100"
                  )}
                >
                  {formatTime(time)}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="col-span-3">
        <BookingInfoSection />
      </div>
    </div>
  )
}
