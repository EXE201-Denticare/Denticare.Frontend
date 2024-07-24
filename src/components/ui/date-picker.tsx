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
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  const [date, setDate] = useState<Date>(value || new Date())

  const handleDateChange = (selectedDate: Date) => {
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
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            <span>{format(date, "EEE, MMM d, yyyy")}</span>
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        {/* @ts-ignore */}
        <Calendar mode="single" selected={date} onSelect={handleDateChange} />
      </PopoverContent>
    </Popover>
  )
}
