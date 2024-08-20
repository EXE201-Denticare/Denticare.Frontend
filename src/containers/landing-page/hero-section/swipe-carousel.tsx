"use client"

import { useEffect, useState } from "react"

import Link from "next/link"

import { motion, useMotionValue } from "framer-motion"

import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"

const slides = [
  {
    img: "/assets/sliders/slider.jpg",
  },
  {
    img: "/assets/sliders/slider2.jpg",
  },
]

const ONE_SECOND = 1000
const AUTO_DELAY = ONE_SECOND * 10
const DRAG_BUFFER = 50

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
}

export const SwipeCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const dragX = useMotionValue(0)

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get()

      if (x === 0) {
        setSlideIndex((pv) => {
          if (pv === slides.length - 1) {
            return 0
          }
          return pv + 1
        })
      }
    }, AUTO_DELAY)

    return () => clearInterval(intervalRef)
  }, [])

  const onDragEnd = () => {
    const x = dragX.get()

    if (x <= -DRAG_BUFFER && slideIndex < slides.length - 1) {
      setSlideIndex((pv) => pv + 1)
    } else if (x >= DRAG_BUFFER && slideIndex > 0) {
      setSlideIndex((pv) => pv - 1)
    }
  }

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${slideIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Slides slideIndex={slideIndex} />
      </motion.div>

      <Dots slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
    </div>
  )
}

const Slides = ({ slideIndex }: { slideIndex: number }) => {
  return (
    <>
      {slides.map((slide, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: "cover",
            }}
            animate={{
              scale: slideIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="h-[35rem] w-screen shrink-0 rounded-xl bg-neutral-800 object-center"
          >
            <div className="relative flex h-full flex-col items-center justify-center rounded-xl p-4">
              <div className="absolute inset-0 flex items-center justify-start px-20">
                <div className="w-[35rem] space-y-6 text-left">
                  <h1 className="text-4xl font-bold">
                    We Provide <span className="text-primary">Dental</span>{" "}
                    Services That You Can{" "}
                    <span className="text-primary">Trust!</span>
                  </h1>
                  <p className="text-base">
                    Our dental practice offers a wide range of services, from
                    routine cleanings to advanced procedures, ensuring you
                    receive the best care for your dental health. Trust our
                    experienced team to provide compassionate and comprehensive
                    treatment tailored to your needs.
                  </p>
                  <Link
                    href="#"
                    className={buttonVariants({
                      size: "lg",
                      variant: "default",
                    })}
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </>
  )
}

const Dots = ({
  slideIndex,
  setSlideIndex,
}: {
  slideIndex: number
  setSlideIndex: (slideIndex: number) => void
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {slides.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setSlideIndex(idx)}
            className={cn(
              "size-3 rounded-full transition-colors",
              idx === slideIndex ? "bg-neutral-50" : "bg-neutral-500"
            )}
          />
        )
      })}
    </div>
  )
}
