import Image from "next/image"
import Link from "next/link"

import { ChevronRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import MaxWidthWrapper from "@/components/layouts/max-width-wrapper"
import RatingCard from "@/components/rating-card"

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
            <RatingCard rating={3.5} feedbackCount={100} />

            {/* Booking section */}
            <Card className="w-full p-4 shadow-md">
              <h1 className="text-lg font-semibold">Thời gian làm việc</h1>

              <div className="my-4 space-y-4 rounded-lg">
                <div className="flex items-center justify-between border-b pb-2">
                  <p className="font-medium text-gray-700">Thứ Hai - Thứ Sáu</p>
                  <p className="text-gray-500">8:00 AM - 6:00 PM</p>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <p className="font-medium text-gray-700">Thứ Bảy</p>
                  <p className="text-gray-500">8:00 AM - 4:00 PM</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-700">Chủ Nhật</p>
                  <p className="text-gray-500">Nghỉ</p>
                </div>
              </div>

              <Link
                href={{
                  pathname: "/book-appointment",
                  query: { clinicId: params.clinicId },
                }}
                className={buttonVariants({
                  size: "lg",
                  className: "flex w-full items-center",
                })}
              >
                Đặt lịch ngay
                <ChevronRight className="ml-2 size-4" />
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
