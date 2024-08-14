import React from "react";
import { CgProfile } from "react-icons/cg";
import SelectTimeTables from "../../Forms/Admin/SelectTimeTables";

function TimeTables() {
  return (
    <div className="ml-[60px]">
      {/* Heading */}
      <div className="flex flex-row mt-[20px] justify-between items-center  w-[1400px]">
        <p className="text-[30px] font-[600]">Time Tables</p>
        <button className="text-[30px]">
          <CgProfile />
        </button>
      </div>

      <SelectTimeTables />

      {/* timetable */}

      <div className="flex flex-col gap-5">
        {/* Days */}
        <div className="flex w-[1150px] h-[120px] border-[1px] border-[#1E1E1E33] rounded-[12px] gap-[80px] items-center justify-center text-[20px] font-[500]">
          <button className="w-[100px] h-[100px] border-[1px] rounded-[15px] hover:bg-[#3482F7] hover:text-white">
            Mon
          </button>
          <button className="w-[100px] h-[100px] border-[1px] rounded-[15px] hover:bg-[#3482F7] hover:text-white">
            Tue
          </button>
          <button className="w-[100px] h-[100px] border-[1px] rounded-[15px] hover:bg-[#3482F7] hover:text-white">
            Wed
          </button>
          <button className="w-[100px] h-[100px] border-[1px] rounded-[15px] hover:bg-[#3482F7] hover:text-white">
            Thu
          </button>
          <button className="w-[100px] h-[100px] border-[1px] rounded-[15px] hover:bg-[#3482F7] hover:text-white">
            Fri
          </button>
        </div>

        {/* Data */}
        <div className="w-[1150px] flex items-start justify-center">
          <div className="w-[1000px] h-[470px] border-[1px] border-[#1E1E1E33] rounded-[12px] grid grid-cols-4 items-center gap-5 pl-[50px] overflow-y-auto">
            {/* card*/}
            <div className="w-[170px] h-[190px] bg-[#92dbdb80] flex gap-5 flex-col pt-5">
              <div className="flex flex-col text-center text-[18px]">
                <p className=" font-[500] ">Module Name</p>
                <p>Lecture Hall</p>
              </div>
              <div className="flex flex-col gap-3 text-center">
                <p>Time</p>
                <p>Lecturer Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeTables;
