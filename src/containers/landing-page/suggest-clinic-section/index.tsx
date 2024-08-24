"use client"

import React from "react"

import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import CustomerClinicCard from "@/components/customer-clinic-card"
import MaxWidthWrapper from "@/components/layouts/max-width-wrapper"

const CLINIC_DATA = [
  {
    name: "Nha khoa Hoàng Kim",
    address: "123 Phạm Văn Đồng, P.2, Q.Tân Bình, Hồ Chí Minh",
    rating: 5,
    image: "/assets/images/clinics/clinic-1.jpg",
  },
  {
    name: "Nha khoa Tâm Đức",
    address: "456 Lê Văn Sỹ, P.13, Q.3, Hồ Chí Minh",
    rating: 4.8,
    image: "/assets/images/clinics/clinic-2.jpg",
  },
  {
    name: "Nha khoa Thăng Long",
    address: "789 Nguyễn Trãi, P.7, Q.5, Hồ Chí Minh",
    rating: 4.7,
    image: "/assets/images/clinics/clinic-3.jpg",
  },
  {
    name: "Nha khoa Minh Đức",
    address: "321 Điện Biên Phủ, P.15, Q.Bình Thạnh, Hồ Chí Minh",
    rating: 3.2,
    image: "/assets/images/clinics/clinic-4.jpg",
  },
  {
    name: "Nha khoa Đông Nam",
    address: "654 Phan Đăng Lưu, P.1, Q.Phú Nhuận, Hồ Chí Minh",
    rating: 4.6,
    image: "/assets/images/clinics/clinic-5.jpg",
  },
  {
    name: "Nha khoa Hồng Phúc",
    address: "987 Cách Mạng Tháng 8, P.11, Q.3, Hồ Chí Minh",
    rating: 4.7,
    image: "/assets/images/clinics/clinic-6.jpg",
  },
]
export default function SuggestClinicSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  return (
    <MaxWidthWrapper className="h-fit">
      <h2 className="py-8 text-3xl font-semibold">Nha khoa nổi bật </h2>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full"
      >
        <CarouselContent className="">
          {CLINIC_DATA.map((clinic, index) => (
            <CarouselItem
              key={index}
              className="pl-5 md:basis-1/2 lg:basis-1/4"
            >
              <CustomerClinicCard key={index} clinic={clinic} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-6 size-10" />
        <CarouselNext className="-right-6 size-10" />
      </Carousel>
    </MaxWidthWrapper>
  )
}
