import { DayPicker } from "react-day-picker";
import { useEffect, useState } from "react";
import {
  BookingCalendar,
  TimeScheduleInterface,
} from "../../../interface/interface";

export default function UserCalendar({
  slot,
  selectedDate,
  setSelectedDate,
  selectedDuration,
  setSelectedDuration,
}: {
  slot?: BookingCalendar;
  selectedDate?: Date;
  setSelectedDate: (val?: Date) => void;
  setSelectedDuration: (val: TimeScheduleInterface) => void;
  selectedDuration: TimeScheduleInterface;
}) {
  const today = new Date();
  const bookedDates = [new Date(2025, 5, 27)]; // example
  const [selected, setSelected] = useState<Date>();
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    setSelectedDate(selected);
  }, [selected]);

  return (
    <div className="calendar-wrapper ">
      <h2 className="calendar-title">My calendar </h2>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        showOutsideDays
        defaultMonth={today}
        modifiers={{
          current: today,
          booked: bookedDates,
        }}
        disabled={{ before: today }}
        modifiersClassNames={{
          selected: "selected-day",
          current: "current-day",
          booked: "booked-day",
        }}
      />
      <div className="time-slots flex items-center gap-2">
        {slot?.dateAndTime.map((item, index) => {
          return (
            <div
              onClick={() => {
                setSelectedIndex(index);
                setSelectedDuration(item.timeSchedule[0]);
              }}
              key={index}
              className={`border cursor-pointer ${
                selectedIndex === index
                  ? "bg-[#D9C9AE] text-[#151515]"
                  : "border-[#2D2C2C] text-[#BABABA] "
              } rounded-lg px-4 py-2 min-w-[100px]`}
            >
              <p className="text-center">{item.day}</p>
              <div className="flex items-center justify-center gap-2 ">
                <p>{item.timeSchedule[0].start}:00</p>
                <span>-</span>
                <p>{item.timeSchedule[0].end}:00</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
