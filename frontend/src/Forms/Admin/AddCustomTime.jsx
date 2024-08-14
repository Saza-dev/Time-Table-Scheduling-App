import React, { useState } from "react";

function AddCustomTime() {
  const [moduleID, setModuleID] = useState("");
  const [selectedHallID, setSelectedHallID] = useState("");
  const [selectedLecturerID, setSelectedLecturerID] = useState("");
  const [selectedBatchID, setSelectedBatchID] = useState("");
  const [day, setDay] = useState("");

  const handleModuleID = (event) => {
    setModuleID(event.target.value);
  };
  const handleSelectHallID = (event) => {
    setSelectedHallID(event.target.value);
  };
  const handleSelectLecturerId = (event) => {
    setSelectedLecturerID(event.target.value);
  };
  const handleSelectBatchId = (event) => {
    setSelectedBatchID(event.target.value);
  };
  const handleDay = (event) => {
    setDay(event.target.value);
  };

  return (
    <div className="flex items-center justify-center w-full h-[790px]">
      <form
        onSubmit={""}
        className="w-[1000px] h-[600px] bg-[#F2F4F7] border-[1px] flex flex-col gap-10 items-center pt-[100px]"
      >
        <div className="flex gap-10">
          <select
            id="options"
            value={moduleID}
            onChange={handleModuleID}
            className="block w-[400px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
          >
            <option value="" disabled>
              Module ID
            </option>
            <option value="Option 1">Module 01</option>
            <option value="Option 2">Module 02</option>
            <option value="Option 3">Module 03</option>
          </select>
          <select
            id="options"
            value={selectedHallID}
            onChange={handleSelectHallID}
            className="block w-[400px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
          >
            <option value="" disabled>
              Hall ID
            </option>
            <option value="Option 1">Hall 01</option>
            <option value="Option 2">Hall 02</option>
            <option value="Option 3">Hall 03</option>
          </select>
        </div>
        <div className="flex gap-10">
          <select
            id="options"
            value={selectedLecturerID}
            onChange={handleSelectLecturerId}
            className="block w-[400px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
          >
            <option value="" disabled>
              Lecturer ID
            </option>
            <option value="Option 1">Lecturer 01</option>
            <option value="Option 2">Lecturer 02</option>
            <option value="Option 3">Lecturer 03</option>
          </select>

          <select
            id="options"
            value={selectedBatchID}
            onChange={handleSelectBatchId}
            className="block w-[400px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
          >
            <option value="" disabled>
              Batch ID
            </option>
            <option value="Option 1">Batch 01</option>
            <option value="Option 2">Batch 02</option>
            <option value="Option 3">Batch 03</option>
          </select>
        </div>

        <div className="flex gap-10">
          <select
            id="options"
            value={day}
            onChange={handleDay}
            className="block w-[400px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
          >
            <option value="" disabled>
              Day
            </option>
            <option value="Option 1">Monday</option>
            <option value="Option 2">Tuesday</option>
            <option value="Option 3">Wednesday</option>
            <option value="Option 3">Thursday</option>
            <option value="Option 3">Friday</option>
          </select>

          <div className="w-[400px] flex gap-10 items-center">

          <div className="text-[18px]  flex gap-5 items-center">
            <label htmlFor="">From :</label>
            <input type="time" name="" id="" className="w-[100px] flex items-center flex-col"/>
          </div>

          <div className="text-[18px] flex gap-5 items-center">
            <label htmlFor="">To :</label>
            <input type="time" name="" id="" className="w-[100px] flex items-center flex-col"/>
          </div>
            
          </div>

        </div>

        <button
          type="submit"
          className="w-[95px] h-[38px] rounded-[6px] bg-[#3482F7] font-[700] text-white mt-[100px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddCustomTime;
