import React from "react"

import ServiceCard from "@/containers/book-appointment-page/choose-service-section/service-card"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ServiceCardList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="border-l-4 border-primary pl-2 text-lg font-semibold">
          Các dịch vụ nha khoa
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Tìm kiếm theo tên dịch vụ" />
        <ScrollArea className="h-[35rem]">
          <div className="grid grid-cols-3 gap-x-4 gap-y-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <ServiceCard key={index} />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
