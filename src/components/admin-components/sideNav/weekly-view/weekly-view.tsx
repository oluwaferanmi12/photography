// WeeklyCalendar.tsx
import React from "react";
import { format, getDay, parseISO } from "date-fns";
import clsx from "clsx";

const hours = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];
const weekDays = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

const getDayIndex = (dateStr: string) => {
  const day = getDay(parseISO(dateStr)); // Sunday = 0
  return day === 0 ? 6 : day - 1; // Monday = 0, Saturday = 5
};

const WeeklyCalendar = ({ events }: { events: EventType[] }) => {
  return (
    <div className="overflow-x-auto p-4">
      <div className="grid grid-cols-7 gap-4 min-w-[800px]">
        {weekDays.map((day, i) => (
          <div key={i} className="text-center font-semibold text-sm pb-2">
            <div>{day}</div>
            <div className="text-gray-400 text-xs">
              {format(new Date(2025, 5, 2 + i), "dd")}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-4 relative border-t border-gray-200 pt-4">
        {weekDays.map((_, colIndex) => (
          <div key={colIndex} className="relative">
            {hours.map((hour, rowIndex) => (
              <div
                key={rowIndex}
                className="h-16 border-b border-dashed text-xs text-gray-400 pl-1"
              >
                {colIndex === 0 && hour}
              </div>
            ))}
          </div>
        ))}

        {events.map((event) => {
          const start = parseISO(event.startDatetime);
          const hour = start.getHours();
          const minutes = start.getMinutes();
          const dayIndex = getDayIndex(event.startDatetime);
          const topOffset = (hour - 9) * 64 + (minutes / 60) * 64; // 64 = h-16 px

          return (
            <div
              key={event.id}
              className={clsx(
                "absolute w-[calc(100%/7-1rem)] bg-cyan-200 rounded-xl px-2 py-1 text-sm text-black",
                "left-[calc((100%/7)*" + dayIndex + "+(0.5rem*" + dayIndex + "))]",
              )}
              style={{
                top: topOffset,
              }}
            >
              <div className="font-semibold">{event.title}</div>
              <div className="text-xs bg-white rounded px-1 inline-block my-1">
                {event.tag}
              </div>
              <div className="text-xs">{format(start, "hh:mm a")}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

type EventType = {
  id: number;
  title: string;
  tag: string;
  startDatetime: string;
  endDatetime: string;
};

export default WeeklyCalendar;
