"use client";

import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  add,
  eachDayOfInterval,
  endOfDay,
  endOfMonth,
  format,
  getDay,
  isAfter,
  isBefore,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
  startOfDay,
} from "date-fns";

const meetings = [
  {
    id: 1,
    startDatetime: "2025-06-05T13:00",
    endDatetime: "2025-06-05T14:30",
  },
  {
    id: 2,
    startDatetime: "2025-06-08T09:00",
    endDatetime: "2025-06-08T10:30",
  },
  {
    id: 3,
    startDatetime: "2025-06-08T23:00",
    endDatetime: "2025-06-09T00:00",
  },
  {
    id: 4,
    startDatetime: "2025-06-12T14:00",
    endDatetime: "2025-06-12T15:00",
  },
  {
    id: 5,
    startDatetime: "2025-06-18T14:00",
    endDatetime: "2025-06-18T15:00",
  },
  {
    id: 6,
    startDatetime: "2025-06-30T14:00",
    endDatetime: "2025-06-30T15:00",
  },
];

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CalendarSchedule() {
  const today = startOfToday();
  const now = new Date();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function getMeetingsForDay(day: Date) {
    return meetings.filter((meeting) =>
      isSameDay(parseISO(meeting.startDatetime), day)
    );
  }

  function getDayStatus(day: Date) {
    const meetingsForDay = getMeetingsForDay(day);

    if (meetingsForDay.length === 0) return "unavailable";

    const allEnded = meetingsForDay.every((meeting) =>
      isBefore(parseISO(meeting.endDatetime), now)
    );

    const anyOngoingToday =
      isToday(day) &&
      meetingsForDay.some((meeting) =>
        isAfter(parseISO(meeting.endDatetime), now)
      );

    if (anyOngoingToday) return "today";
    if (allEnded) return "expired";
    return "available";
  }

  const previousMonth = () => {
    const firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayPrevMonth, "MMM-yyyy"));
  };

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  return (
    <div className="pt-3">
      <div className="max-w-md px-4 sm:px-7 md:max-w-6xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div>
            <div className="flex items-center">
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 p-1.5 cursor-pointer text-black hover:text-gray-500"
              >
                <LeftOutlined className="text-lg" />
              </button>
              <h2 className="flex-auto text-center text-xl text-black">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 cursor-pointer ml-2 p-1.5 text-black hover:text-gray-500"
              >
                <RightOutlined className="text-lg" />
              </button>
            </div>

            <div className="grid grid-cols-7 mt-8 text-base text-center text-[#333333] leading-6">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 mt-2 text-base">
              {days.map((day, dayIdx) => {
                const status = getDayStatus(day);

                return (
                  <div
                    key={day.toString()}
                    className={classNames(
                      dayIdx === 0 && colStartClasses[getDay(day)],
                      "py-1.5 text-base"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={classNames(
                        status === "unavailable" && "text-gray-400",
                        status === "expired" && "text-purple-secondary-500/50 font-semibold",
                        status === "available" &&
                          "text-purple-secondary-500 font-semibold bg-badges-color2",
                        status === "today" &&
                          "text-white bg-purple-secondary-600 font-semibold",
                        "mx-auto flex h-8 w-8 items-center text-base justify-center rounded-full",
                        "hover:bg-gray-200 "
                      )}
                    >
                      <time dateTime={format(day, "yyyy-MM-dd")}>
                        {format(day, "d")}
                      </time>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
