import { Dialog, DialogContent } from "@/components/ui/dialog"

import { Spinner } from "@/components/spinner"

type Props = {
  isLoading: boolean
}

export default function LogoutModal({ isLoading }: Props) {
  return (
    <Dialog open={isLoading}>
      <DialogContent className="w-80">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            <Spinner noPadding />
            <p className="mt-6 font-semibold">Đang đăng xuất...</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
