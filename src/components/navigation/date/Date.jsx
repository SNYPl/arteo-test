import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { CalendarSvg } from "../../../common/svg/navigation";

const DateComponent = () => {
  const [dateTime, setDateTime] = useState({
    date: new Date().toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    time: new Date().toLocaleTimeString(),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime({
        date: new Date().toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <article className={style.date}>
      <div className={style.dateInfo}>
        <h4>{dateTime.date}</h4>
        <p>{dateTime.time}</p>
      </div>
      <div className={style.calendarIcon}>
        <CalendarSvg />
      </div>
    </article>
  );
};

export default DateComponent;
