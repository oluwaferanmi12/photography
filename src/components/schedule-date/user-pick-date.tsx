import { DayPicker } from "react-day-picker";
import { useState } from "react";

export default function UserCalendar() {
  const [selected, setSelected] = useState<Date>();
  const today = new Date();
  const bookedDates = [new Date(2025, 5, 27)]; // example

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
        modifiersClassNames={{
          selected: "selected-day",
          current: "current-day",
          booked: "booked-day",
        }}
      />
      <div className="time-slots">
        {["11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm"].map(
          (time) => (
            <button key={time} className="time-slot">
              {time}
            </button>
          )
        )}
      </div>
      <div className="legend">
        <span className="legend-item current-legend" />
        CURRENT DATE
        <span className="legend-item booked-legend" />
        BOOKED
      </div>
    </div>
  );
}
