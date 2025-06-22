import { DayPicker } from "react-day-picker";
import { useEffect, useState } from "react";
import { BookingCalendar } from "../../../interface/interface";

interface UserCalendarProps {
  slot?: BookingCalendar;
  selectedDate?: Date;
  setSelectedDate: (val?: Date) => void;
  onDaySelect: (dayName: string, times: number[]) => void;
}

export default function UserCalendar({
  slot,
  selectedDate,
  setSelectedDate,
  onDaySelect,
}: UserCalendarProps) {
  const today = new Date();
  const [selected, setSelected] = useState<Date>();

  const DAY_NAMES = [
    "Sunday", "Monday", "Tuesday", "Wednesday", 
    "Thursday", "Friday", "Saturday"
  ];

  useEffect(() => {
    if (selected) {
      setSelectedDate(selected);
      const dayIndex = selected.getDay();
      const dayName = DAY_NAMES[dayIndex];

      if (slot?.dateAndTime) {
        const daySchedule = slot.dateAndTime.find(
          item => item.day === dayName
        );

        if (daySchedule?.timeSchedule?.length) {
          const { start, end } = daySchedule.timeSchedule[0];
          const times = Array.from({ length: end - start }, (_, i) => start + i);
          onDaySelect(dayName, times);
        } else {
          onDaySelect(dayName, []);
        }
      }
    } else {
      onDaySelect("", []);
    }
  }, [selected, slot]);

  return (
    <div className="calendar-wrapper w-full bg-[#0E0E0E] p-4 rounded-lg border border-[#2D2C2C]">
      <h2 className="text-2xl text-[#F5F5F5] font-grotesk-semi-bold mb-4">
        My calendar
      </h2>
      
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        showOutsideDays
        defaultMonth={today}
        disabled={{ before: today }}
        modifiersClassNames={{
          selected: "selected-day",
          today: "current-day",
        }}
      />
    </div>
  );
}