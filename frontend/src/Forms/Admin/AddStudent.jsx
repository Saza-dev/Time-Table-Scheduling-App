import React, { useState } from 'react'

function AddStudent() {
    const [selectedDep, setSelectedDep] = useState("");
    const [selectedBatchID, setSelectedBatchID] = useState("");

    const handleSelectDep = (event) => {
      setSelectedDep(event.target.value);
    };

    const handleSelectBatchID = (event) => {
        setSelectedBatchID(event.target.value);
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
              placeholder="Student ID"
            />
            <input
              type="text"
              className="w-[400px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Student Name"
            />
          </div>
          <div className="flex gap-10">
          <select
                id="options"
                value={selectedBatchID}
                onChange={handleSelectBatchID}
                className="block w-[252px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
              >
                <option value="" disabled>
                  Batch ID
                </option>
                <option value="Option 1">Option 01</option>
                <option value="Option 2">Option 02</option>
                <option value="Option 3">Option 03</option>
              </select>
          <select
                id="options"
                value={selectedDep}
                onChange={handleSelectDep}
                className="block w-[252px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
              >
                <option value="" disabled>
                  Department
                </option>
                <option value="Option 1">Faculty of Computing and IT</option>
                <option value="Option 2">Faculty Of Engineering</option>
                <option value="Option 3">Faculty of Technology</option>
              </select>
            <input
              type="text"
              className="w-[252px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Contact Number"
            />
          </div>
  
          <button type="submit" className="w-[95px] h-[38px] rounded-[6px] bg-[#3482F7] font-[700] text-white mt-[100px]">Submit</button>
        </form>
      </div>
    );
}

export default AddStudent
