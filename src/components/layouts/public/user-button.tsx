"use client"

import React, { useTransition } from "react"

import { logout } from "@/actions/auth/logout"
import { UserType } from "@/schemas/user.schema"
import { History, LogOut, Settings } from "lucide-react"
import { useRouter } from "nextjs-toploader/app"
import { toast } from "sonner"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import LogoutModal from "@/components/modal/logout-modal"

export default function UserButton({ user }: { user: UserType }) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  async function onLogout() {
    startTransition(() => {
      logout()
        .then((data) => {
          if (data?.error) {
            toast.error("Đã xảy ra lỗi khi đăng xuất.", {
              description:
                "Vui lòng thử lại. Nếu vấn đề vẫn tiếp diễn, hãy liên hệ với bộ phận hỗ trợ.",
            })
          }
        })
        .catch(() => {
          toast.error("Đã xảy ra lỗi khi đăng xuất.", {
            description:
              "Vui lòng thử lại. Nếu vấn đề vẫn tiếp diễn, hãy liên hệ với bộ phận hỗ trợ.",
          })
        })
    })
  }
  return (
    <React.Fragment>
      <LogoutModal isLoading={isPending} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="size-10 cursor-pointer shadow-sm">
            <AvatarImage src={user?.image ?? "/assets/avatar/avatar.jpg"} />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 w-56" align="end">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {user.fullName}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              className="flex items-center"
              onClick={() => router.push("/account/me")}
            >
              <Settings className="mr-2 size-4" />
              Cài đặt thông tin
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center">
              <History className="mr-2 size-4" />
              Lịch sử khám bệnh
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onLogout} className="flex items-center">
            <LogOut className="mr-2 size-4" />
            Đăng xuất
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </React.Fragment>
  )
}
