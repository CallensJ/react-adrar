// import React from 'react';
import "./calendar.css";

const MONTH = [
  "Janvier",
  "Fevrier",
  "Mars",
  "Avril",
  "Mai",
  "juin",
  "Juilet",
  "Aout",
  "Septembre",
  "Octobre",
  "Descembre",
];
const DAY = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];
const DAY_LETTER = DAY.map((day) => day[0]); //https://stackoverflow.com/questions/47035752/getting-the-first-characters-of-each-string-in-an-array-in-javascript

// console.log(DAY_LETTER);

const Calendar = () => {
  return (
    <div className="calendar-container">
      <div className="header">{MONTH[9]} - 2025</div>
      <div className="grid">
        {DAY_LETTER.map((day, index) => (
          <div key={index} className="calendar-day">
            {day}
          </div>
        ))}
        {[...Array(31)].map((_, i) => {
          const day = i + 1;
          return (
            <div key={day} className={`calendar-cell`}>
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
