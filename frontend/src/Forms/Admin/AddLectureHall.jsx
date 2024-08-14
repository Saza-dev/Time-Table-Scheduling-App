import React, { useState } from 'react'

function AddLectureHall() {

  
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
              placeholder="Hall ID"
            />
            <input
              type="text"
              className="w-[400px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Hall Name"
            />
          </div>
          <div className="flex gap-10">
          <input
              type="text"
              className="w-[400px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Seating Capacity"
            />
            <input
              type="text"
              className="w-[400px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Facilities"
            />
          </div>
  
          <button type="submit" className="w-[95px] h-[38px] rounded-[6px] bg-[#3482F7] font-[700] text-white mt-[100px]">Submit</button>
        </form>
      </div>
    )
}

export default AddLectureHall
