import React, { useState, useEffect } from "react";

function SubTimeTable(props) {
  const [dataByDay, setDataByDay] = useState({});
  const [selectedDay, setSelectedDay] = useState("Monday");

  useEffect(() => {
    if (
      Array.isArray(props.timeslots.data) &&
      props.timeslots.data.length !== 0
    ) {
      const data = props.timeslots.data;

      const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ];

      // Split and sort by days
      const splitByDays = daysOfWeek.reduce((acc, day) => {
        // Filter data by day and sort by the 'From' time
        const sortedData = data
          .filter((entry) => entry.Day === day)
          .sort((a, b) => {
            // Convert time strings (like "09:00", "13:30") to comparable values
            const timeA = a.From.split(":").map(Number);
            const timeB = b.From.split(":").map(Number);
            return timeA[0] - timeB[0] || timeA[1] - timeB[1];
          });

        acc[day] = sortedData;
        return acc;
      }, {});

      setDataByDay(splitByDays);
    }
  }, [props.timeslots]);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div>
      {/* Timetable */}
      <div className="flex flex-col gap-5">
        {/* Days */}
        <div className="flex w-[1150px] h-[120px] border-[1px] border-[#1E1E1E33] rounded-[12px] gap-[80px] items-center justify-center text-[20px] font-[500]">
          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((dayAbbr, index) => (
            <button
              key={dayAbbr}
              onClick={() =>
                handleDayClick(
                  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"][
                    index
                  ]
                )
              }
              className={`w-[100px] h-[100px] border-[1px] rounded-[15px] hover:bg-[#3482F7] hover:text-white ${
                selectedDay ===
                ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"][index]
                  ? "bg-[#3482F7] text-white"
                  : ""
              }`}
            >
              {dayAbbr}
            </button>
          ))}
        </div>

        {/* Data for Selected Day */}
        {dataByDay[selectedDay] && dataByDay[selectedDay].length !== 0 ? (
          <div className="w-[1150px] flex items-start justify-center">
            <div className="w-[1000px] h-[470px] border-[1px] border-[#1E1E1E33] rounded-[12px] grid grid-cols-4 items-center gap-5 pl-[50px] overflow-y-auto">
              {dataByDay[selectedDay].map((slot, index) => {
                return (
                  <div
                    key={index}
                    className="w-[170px] h-[190px] bg-[#92dbdb80] flex gap-5 flex-col pt-5"
                  >
                    <div className="flex flex-col text-center text-[18px]">
                      <p className="font-[500]">{slot.moduleId}</p>
                      <p>In {slot.hallId}</p>
                    </div>
                    <div className="flex flex-col gap-3 text-center">
                      <p>{`${slot.From} - ${slot.To}`}</p>
                      <p>By {slot.lecturerId}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="w-[1000px] h-[300px] flex items-center justify-center">
          <p className="text-[20px] font-[600]">No timetable data available</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SubTimeTable;
