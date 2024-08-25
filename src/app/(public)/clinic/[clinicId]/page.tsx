import React from "react"

import Image from "next/image"

import { StarFilledIcon } from "@radix-ui/react-icons"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import { Icons } from "@/components/icons"
import MaxWidthWrapper from "@/components/layouts/max-width-wrapper"

export default function Page({ params }: { params: { clinicId: string } }) {
  return (
    <MaxWidthWrapper className="h-[300vh]">
      <div className="my-14">
        <h1 className="mb-5 text-2xl font-semibold">
          Nha khoa Hoàng Kim {params.clinicId}
        </h1>

        <div className="relative h-[550px]">
          <Image
            src={"/assets/images/clinics/clinic-1.jpg"}
            alt="Clinic"
            fill
            className="size-full rounded-lg object-cover"
          />
        </div>

        <div className="mt-8 flex flex-col justify-between gap-x-16 lg:flex-row">
          <div className="w-full space-y-8 lg:w-2/3">
            <div>
              <h3 className="text-xl font-semibold">Super long data 1237</h3>
              <p className="text-pretty text-sm">
                Nhổ răng - Khám Răng chuyên sâu - Niềng răng - Khám răng tổng
                quát - Trám răng - Trồng răng
              </p>
            </div>

            <Separator />

            <div>
              <h1 className="mb-2 text-2xl font-semibold">
                Giới thiêu về nha khoa
              </h1>

              <p className="text-pretty">
                Nha khoa Hoàng Kim tự hào là một trong những phòng khám nha khoa
                hàng đầu tại Hồ Chí Minh, với đội ngũ bác sĩ giàu kinh nghiệm và
                trang thiết bị hiện đại. Chúng tôi chuyên cung cấp các dịch vụ
                chăm sóc răng miệng chất lượng cao như nhổ răng, khám và điều
                trị các vấn đề về răng miệng, cùng các dịch vụ trám răng chuyên
                sâu. Đến với Nha khoa Hoàng Kim, bạn sẽ được trải nghiệm dịch vụ
                tận tâm, chuyên nghiệp và không gian thoải mái, mang lại nụ cười
                tự tin và sức khỏe răng miệng toàn diện.
              </p>
            </div>

            <Separator />
          </div>

          {/* Rating section */}
          <div className="w-full space-y-4 lg:w-1/3">
            <Card className="w-full p-4">
              <div className="grid grid-cols-2 gap-x-5">
                <div className="flex items-center px-2">
                  <Icons.leftWing className="size-[40px]" />
                  <p className="text-pretty text-center text-xs font-semibold">
                    Một trong những nha khoa được yêu thích nhất tại Denticare
                  </p>
                  <Icons.rightWing className="size-[40px]" />
                </div>
                <div className="flex items-center justify-end">
                  <div className="flex flex-col items-center">
                    <h1 className="text-xl font-semibold">4.5</h1>
                    <div className="flex gap-x-0.5">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-3 text-black"
                        />
                      ))}
                    </div>
                  </div>

                  <Separator orientation="vertical" className="mx-4" />

                  <div className="flex flex-col items-center">
                    <h1 className="text-xl font-semibold">86</h1>
                    <p className="text-nowrap text-xs">Đánh giá</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Booking section */}
            <Card className="w-full p-4 shadow-md">
              <h1>Thời gian làm việc</h1>
              <Button className="flex w-full items-center" size={"lg"}>
                Đặt lịch ngay
                <ChevronRight className="ml-2 size-4" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
