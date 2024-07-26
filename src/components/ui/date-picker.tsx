import { useState } from "react"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
  value: Date
  onChange?: (date: Date) => void
  dateFormat?: string
}

export function DatePicker({
  value,
  onChange,
  dateFormat = "MMMM do, yyyy",
}: DatePickerProps) {
  const [date, setDate] = useState<Date>(value)

  const handleDateChange = (selectedDate: Date) => {
    if (!selectedDate) return
    setDate(selectedDate)
    if (onChange) {
      onChange(selectedDate)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 size-4" />
          {date ? (
            <span>{format(date, dateFormat)}</span>
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          // @ts-ignore
          onSelect={handleDateChange}
          classNames={{ caption_label: "hidden" }}
          captionLayout="dropdown-buttons"
          defaultMonth={date}
          fromYear={1960}
          toYear={new Date().getFullYear() + 1}
        />
      </PopoverContent>
    </Popover>
  )
}
