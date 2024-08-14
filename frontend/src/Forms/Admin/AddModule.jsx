import React, { useState } from 'react'

function AddModule() {
    const [selectedlecturer, setselectedlecturer] = useState("");
    const [selectedBatch, setSelectedBatch] = useState("");

    const handleSelectLecturer = (event) => {
        setselectedlecturer(event.target.value);
    };

    const handleSelectBatch = (event) => {
        setSelectedBatch(event.target.value);
      };
  
    return (
      <div className="flex items-center justify-center w-full h-[790px]">
        <form
          onSubmit={""}
          className="w-[1000px] h-[600px] bg-[#F2F4F7] border-[1px] flex flex-col gap-10 items-center pt-[100px]"
        >
          <div className="flex gap-10">
            <input
              type="text"
              className="w-[400px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Module ID"
            />
            <input
              type="text"
              className="w-[400px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Module Name"
            />
          </div>
          <div className="flex gap-10">
          <input
              type="text"
              className="w-[252px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Credits"
            />
          <select
                id="options"
                value={selectedlecturer}
                onChange={handleSelectLecturer}
                className="block w-[252px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
              >
                <option value="" disabled>
                  Lecturer ID
                </option>
                <option value="Option 1">Option 01</option>
                <option value="Option 2">Option 02</option>
                <option value="Option 3">Option 03</option>
              </select>
          <select
                id="options"
                value={selectedBatch}
                onChange={handleSelectBatch}
                className="block w-[252px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
              >
                <option value="" disabled>
                  Batch ID
                </option>
                <option value="Option 1">Batch 01</option>
                <option value="Option 2">Batch 02</option>
                <option value="Option 3">Batch 03</option>
              </select>

          </div>
  
          <button type="submit" className="w-[95px] h-[38px] rounded-[6px] bg-[#3482F7] font-[700] text-white mt-[100px]">Submit</button>
        </form>
      </div>
    );
}

export default AddModule
