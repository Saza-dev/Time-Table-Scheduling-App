import React, { useState } from 'react'

function SelectTimeTables() {

    const [selectedDep, setSelectedDep] = useState("");

    const handleSelectDep = (event) => {
      setSelectedDep(event.target.value);
    };
  
    const [selectedBatch, setSelectedBatch] = useState("");
  
    const handleSelectBatch = (event) => {
      setSelectedBatch(event.target.value);
    };

  return (
<div className="w-[900px] h-[110px] mt-[90px]">
        <form action="" className="flex items-center justify-between">
          <div className="flex gap-10">
            {/* Department */}
            <select
              id="options"
              value={selectedDep}
              onChange={handleSelectDep}
              className="block w-[300px] py-2 pl-3 pr-10 mt-1 text-base border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>
                Department
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>

            {/* Batch */}

            <select
              id="options"
              value={selectedBatch}
              onChange={handleSelectBatch}
              className="block w-[300px] py-2 pl-3 pr-10 mt-1 text-base border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>
                Batch
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>


          {/* Lecture ID */}
            <input type="text" className='w-[300px] py-2 pl-3 pr-10 mt-1 text-base border-[1px] border-gray-300 rounded-md' placeholder='Lecture Id'/>
          </div>
          

          <div>
            <button type="submit" className="w-[92px] h-[32px] bg-[#3482F7] text-white rounded-[6px] text-[16px] font-[700] ml-[80px]">Show</button>
          </div>
        </form>
      </div>
  )
}

export default SelectTimeTables
