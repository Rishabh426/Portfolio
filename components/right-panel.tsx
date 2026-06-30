"use client";

import { useEffect, useState } from "react";

const MONTHS: readonly string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAY_HEADERS: readonly string[] = ["S", "M", "T", "W", "T", "F", "S"];

export function RightPanel() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const monthName = MONTHS[currentMonth];

  return (
    <div className="w-80 border-l border-border/50 p-6 overflow-y-auto space-y-8">
      {/* Open to Work */}
      <div className="border border-green-500/30 rounded-sm p-4 space-y-2 hover:border-green-500/50 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-xs font-mono text-green-400">OPEN TO WORK</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Available for full-time and project-based opportunities.
        </p>
      </div>

      {/* Calendar */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono text-muted-foreground">
            {monthName}
          </div>
          <div className="text-xs text-muted-foreground">{currentYear}</div>
        </div>

        <div className="space-y-3">
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-2">
            {DAY_HEADERS.map((day, idx) => (
              <div
                key={`${day}-${idx}`}
                className="text-xs text-muted-foreground text-center"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day, idx) => {
              const isToday = day === currentDate.getDate();
              return (
                <div
                  key={idx}
                  className={`
                    text-xs h-6 flex items-center justify-center rounded transition-colors duration-200
                    ${day === null ? "" : "border border-border/50 text-muted-foreground hover:border-muted-foreground/60"}
                    ${isToday ? "border-foreground text-background bg-foreground font-semibold" : ""}
                  `}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
