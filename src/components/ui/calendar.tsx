"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker, useNavigation } from "react-day-picker"
import type { MonthCaptionProps } from "react-day-picker"

import { cn } from "@/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function CustomCaption(props: MonthCaptionProps) {
  const { previousMonth, nextMonth, goToMonth } = useNavigation();
  
  return (
    <div className="flex justify-between items-center mb-4">
      <button
        type="button"
        disabled={!previousMonth}
        onClick={() => previousMonth && goToMonth(previousMonth)}
        className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 inline-flex items-center justify-center rounded border border-foreground/20 disabled:opacity-25"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <div className="text-sm font-medium">
        {props.calendarMonth.date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </div>
      <button
        type="button"
        disabled={!nextMonth}
        onClick={() => nextMonth && goToMonth(nextMonth)}
        className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 inline-flex items-center justify-center rounded border border-foreground/20 disabled:opacity-25"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 pb-6", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-0",
        month_caption: "flex justify-center relative items-center",
        caption_label: "text-sm font-medium",
        nav: "hidden",
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday: "text-foreground/60 rounded-md w-9 font-normal text-[0.8rem]",
        week: "flex w-full mt-2",
        day: "h-9 w-9 text-center text-sm p-0 relative",
        day_button: "h-9 w-9 p-0 font-normal hover:bg-foreground/10 rounded-md inline-flex items-center justify-center w-full",
        selected: "bg-foreground text-background hover:bg-foreground hover:text-background",
        today: "bg-foreground/10",
        outside: "text-foreground/30 opacity-50",
        disabled: "text-foreground/30 opacity-50",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        MonthCaption: CustomCaption
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }

