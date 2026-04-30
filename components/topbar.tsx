"use client";

import { useEffect, useState } from "react";

export function Topbar() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!now) {
    return (
      <div className="border-b border-border/50 px-6 py-3 flex items-center justify-between bg-background/50 backdrop-blur-sm">
        <div className="flex items-center gap-8">
          <div className="font-mono text-sm font-semibold">RS</div>
        </div>
      </div>
    );
  }

  const formattedDate = now.toLocaleDateString("en-IN", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "Asia/Kolkata",
  });

  const formattedTime = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  });

  return (
    <div className="border-b border-border/50 px-6 py-3 flex items-center justify-between bg-background/50 backdrop-blur-sm">
      <div className="flex items-center gap-8">
        <div className="font-mono text-sm font-semibold">RS</div>

        <a
          href="#about"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          About
        </a>
      </div>

      <div className="text-xs text-muted-foreground font-mono">
        {formattedDate} · {formattedTime}
      </div>
    </div>
  );
}
