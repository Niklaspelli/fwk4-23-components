import React from "react";
import { useState } from "react";
import "./Calender.css";

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthNames = [
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

  const changeMonth = (offset) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + offset,
      1
    );
    setCurrentDate(newDate);
  };

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Hämta första dagen i månaden
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // Hämta antalet dagar i månaden
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysArray = [];

    // Lägg till tomma dagar tills första dagen i månaden visas korrekt
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    // Lägg till alla dagar i månaden
    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(
        <div key={day} className="day">
          {day}
        </div>
      );
    }

    return daysArray;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>&lt;</button>
        <h2>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button onClick={() => changeMonth(1)}>&gt;</button>
      </div>

      <div className="calendar-grid">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default Calender;
