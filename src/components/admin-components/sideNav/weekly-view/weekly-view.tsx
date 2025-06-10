import React from "react";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import '@schedule-x/theme-default/dist/index.css'





export const WeeklyCalendar = () => {
  const calendar = useCalendarApp({
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events: [
      {
        id: "1",
        title: "Event 1",
        start: "2025-06-12 10:44",
        end: "2025-06-12 12:00",
      },
    ],
    selectedDate: "2025-06-09"
    // plugins: [eventsService],
  });




  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
};
