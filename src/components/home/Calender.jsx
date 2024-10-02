import React from "react";
import { useState } from "react";
import styles from "./Calender.module.css";

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [meetingDetails, setMeetingDetails] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [meetingInfo, setMeetingInfo] = useState({ startTime: "", endTime: "" });

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

  const openModal = (day) => {
    setSelectedDate(day);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
    setMeetingInfo ({ startTime: "", endTime: "" });
  }

  const handleSaveMeeting = () => {
    setMeetingDetails((prev) => ({
      ...prev,
      [selectedDate]: { ...meetingInfo },
    }));
    closeModal();
  };

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysArray = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(<div key={`empty-${i}`} className={styles.emptyDay}></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isMeetingDay = meetingDetails[day];

      daysArray.push(
        <div
          key={day}
          className={`${styles.day} ${isMeetingDay ? styles.meetingDay : ""}`}
          onClick={() => openModal(day)}
        >
          {day}
          {isMeetingDay && (
            <div className={styles.meetingInfo}>
              Meeting: {meetingDetails[day].startTime} - {meetingDetails[day].endTime}
            </div>
          )}
        </div>
      );
    }

    return daysArray;
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        <button onClick={() => changeMonth(-1)}>&lt;</button>
        <h2>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button onClick={() => changeMonth(1)}>&gt;</button>
      </div>

      <div className={styles.calendarGrid}>
        {daysOfWeek.map((day) => (
          <div key={day} className={styles.dayName}>
            {day}
          </div>
        ))}
        {renderDays()}
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Add Meeting</h3>
            <label>
              Start Time:
              <input
                type="time"
                value={meetingInfo.startTime}
                onChange={(e) =>
                  setMeetingInfo((prev) => ({ ...prev, startTime: e.target.value }))
                }
              />
            </label>
            <label>
              End Time:
              <input
                type="time"
                value={meetingInfo.endTime}
                onChange={(e) =>
                  setMeetingInfo((prev) => ({ ...prev, endTime: e.target.value }))
                }
              />
            </label>
            <button onClick={handleSaveMeeting}>Save</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calender;
