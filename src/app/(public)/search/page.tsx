"use client"

import { useSearchParams } from "next/navigation"

import SearchResultCard from "@/containers/search-page/search-result-card"
import { Filter, SearchIcon, Sparkles, Star } from "lucide-react"
import { useRouter } from "nextjs-toploader/app"
import { useQueryState } from "nuqs"

import { cn } from "@/lib/utils"

import useDebounce from "@/hooks/useDebounce"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import MaxWidthWrapper from "@/components/layouts/max-width-wrapper"

const areas = [
  { id: 1, areaName: "HCM" },
  { id: 2, areaName: "HN" },
]

export default function Page() {
  const [location, setLocation] = useQueryState("location", {
    defaultValue: "TP.Hồ Chí Minh",
    shallow: false,
  })

  const [area, setArea] = useQueryState("area", { defaultValue: "1" })
  const router = useRouter()
  const seacrhParams = useSearchParams()

  return (
    <MaxWidthWrapper>
      <div className="my-14 space-y-6">
        <div className="mb-16">
          <p className="text-xs">300+ Nha khoa tại Denticare</p>
          <h1 className="mb-6 mt-2 text-3xl font-semibold">
            Nha khoa tại {location}
          </h1>
        </div>

        {/* Search bar */}
        <div className="flex w-full items-end space-x-2">
          <div className="flex flex-col gap-y-2">
            <Label className="text-black">Khu vực</Label>
            <div>
              <Select>
                <SelectTrigger className="h-10 w-56 bg-white">
                  <SelectValue
                    placeholder="Chọn khu vực"
                    className="text-black"
                  />
                </SelectTrigger>
                <SelectContent>
                  {areas !== undefined &&
                    areas.map((area) => (
                      <SelectItem
                        key={area.id}
                        onSelect={() => setArea(area.id)}
                        value={area?.id?.toString()}
                      >
                        {area.areaName}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-y-2">
            <Label className="text-black">Tên nha khoa</Label>
            <div>
              <Input
                type="text"
                className="w-full"
                placeholder="Nhập tên nha khoa"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <Button>Tìm kiếm</Button>
        </div>

        {/* Search bar */}

        <div className="flex gap-x-2">
          <Button variant="outline">
            <Filter className="mr-2 size-4" />
            Tất cả bộ lọc
          </Button>
          <Button variant="outline">
            <Star className="mr-2 size-4" />
            Theo đánh giá
          </Button>
          <Button variant="outline">
            <Sparkles className="mr-2 size-4" />
            Theo dịch vụ
          </Button>
        </div>

        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <SearchResultCard key={index} />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
