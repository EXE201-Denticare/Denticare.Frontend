"use client"

import type { Dispatch, SetStateAction } from "react"

import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const AuthModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className="absolute z-[999999]">
        <DialogHeader>
          <div className="relative mx-auto mb-2 h-24 w-24">
            <Image src="/next.svg" alt="logo" className="object-contain" fill />
          </div>
          <DialogTitle className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Bạn cần đăng nhập để có thể tiếp tục
          </DialogTitle>
          <DialogDescription className="text-pretty py-2 text-center text-base">
            Vui lòng đăng nhập hoặc đăng ký tài khoản để sử dụng chức năng.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
          <Link
            href="/auth/sign-in"
            className={buttonVariants({ variant: "outline" })}
          >
            Đăng nhập
          </Link>
          <Link
            href="/auth/sign-up"
            className={buttonVariants({ variant: "default" })}
          >
            Đăng kí
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AuthModal
