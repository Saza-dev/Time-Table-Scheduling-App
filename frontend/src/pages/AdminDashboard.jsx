import React from "react";
import { RxDashboard } from "react-icons/rx";
import { GiGraduateCap } from "react-icons/gi";
import { IoMdBook } from "react-icons/io";
import { LuCalendarSearch } from "react-icons/lu";
import { IoExitOutline } from "react-icons/io5";
import { Outlet } from "react-router-dom";

function AdminDashboard() {
  return (
    // main div
    <div className="flex flex-col">
      {/* left side */}
      <div className="w-[313px] h-[910px] bg-slate-300">
        {/* app name */}
        <p className="text-[35px] font-[600] ml-[40px] mt-[20px]">TimeSync.</p>

        {/* uni name */}
        <div className="relative ml-[40px] w-[273px] h-[65px] rounded-[6px] mt-20 flex justify-end items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#67b9f8] to-[#d4e4ff] opacity-80 rounded-[4px]"></div>
          <p className="relative text-[20px] font-[600] text-black">
            ABCD University
          </p>
        </div>

        {/* components */}
        <div className="flex flex-col gap-10 text-[18px]  ml-[40px] mt-[120px]">
          <button className="flex flex-row justify-center items-center gap-2 w-[241px] h-[45px] hover:bg-[#FFFFFF] rounded-[6px] hover:shadow-2xl">
            {" "}
            <RxDashboard /> Dashboard
          </button>
          <button className="flex flex-row justify-center items-center gap-2 w-[241px] h-[45px] hover:bg-[#FFFFFF] rounded-[6px] hover:shadow-2xl ">
            {" "}
            <GiGraduateCap /> Teachers
          </button>
          <button className="flex flex-row justify-center items-center gap-2 w-[241px] h-[45px] hover:bg-[#FFFFFF] rounded-[6px] hover:shadow-2xl ">
            {" "}
            <IoMdBook /> Students
          </button>
          <button className="flex flex-row justify-center items-center gap-2 w-[241px] h-[45px] hover:bg-[#FFFFFF] rounded-[6px] hover:shadow-2xl ">
            {" "}
            <LuCalendarSearch /> Timetable
          </button>
        </div>

        {/* exit button */}
        <button className="text-[30px] mt-[150px] ml-[45px]">
          <IoExitOutline />
        </button>
      </div>

      {/* right div */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;
