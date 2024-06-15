import { useEffect, useState } from "react";

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  let TimeFormatter = new Intl.DateTimeFormat("ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  let DayFormatter = new Intl.DateTimeFormat("ru", {
    weekday: "long",
  });

  let MonthFormatter = new Intl.DateTimeFormat("ru", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="clockBlock">
      <div>{TimeFormatter.format(date)}</div>
      <div>{DayFormatter.format(date)}</div>
      <div>{MonthFormatter.format(date)}</div>
    </div>
  );
};
