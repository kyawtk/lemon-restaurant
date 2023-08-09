import React, { useEffect } from "react";
import { useState } from "react";
import { availableTimesData } from "../constants";
const BookingForm = () => {
  const [occassion, setOccassion] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [availableHours, setAvailableHours] = useState<any[]>([]);
  const dateobj = new Date();
  const min =
    dateobj.getFullYear() +
    "-" +
    (dateobj.getMonth()+1).toString().padStart(2, "0") +
    "-" +
    dateobj.getDate().toString().padStart(2, "0");

  useEffect(() => {
    if(availableTimesData.filter(d => d.date == date).length == 0){
        availableTimesData.push( {
            date: date,
            times: [
              { hour: "17:00", availableTables: 4, isFull: false },
              { hour: "18:00", availableTables: 4, isFull: false },
              { hour: "20:00", availableTables: 4, isFull: false },
              { hour: "21:00", availableTables: 4, isFull: false },
              { hour: "22:00", availableTables: 4, isFull: false },
            ],
          },)
    }
    console.log('added')
    const dayData  = availableTimesData.filter(d => d.date == date)[0]
   setAvailableHours(dayData.times)
    
   
  }, [date]);
  return (
    <form
      className="mx-auto flex flex-col gap-9 max-w-[400px] border p-6 rounded "
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="flex flex-col ">
        When would you like to come?{" "}
        <input
          type="date"
          value={date}
          min={min}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label className="flex flex-col font-semibold">
        Choose time
        <select
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
            {availableHours && availableHours.every(hour => hour.isFull) && <option value="">No available hours All Booked Up</option>}
          {availableHours && availableHours.map((hour, i) => {
            if (hour.isFull) {
              return;
            }
            return (
              <option key={i} value={hour.hour}>
                {hour.hour}
              </option>
            );
          })}
        </select>
      </label>
      <label className="flex flex-col">
        Is it a special occassion?
        <select
          name="occassion"
          onChange={(e) => setOccassion(e.target.value)}
          value={occassion}
        >
          <option value="normal">Normal</option>
          <option value="birthday">Birthday</option>
          <option value="anniversery">Anniversery</option>
        </select>
      </label>
      <input
        type="submit"
        value={"Book a Table Now."}
        className="btn bg-lemon"
      />
    </form>
  );
};

export default BookingForm;
