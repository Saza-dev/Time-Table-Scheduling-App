import React from 'react'
import { IoExitOutline } from 'react-icons/io5'
import { LuCalendarSearch } from 'react-icons/lu'
import { Link, Outlet } from 'react-router-dom'

function StudentDashboard() {
  return (
    
<div>
    <div className="flex flex-row">
      {/* left side */}
      <div className="w-[313px]  h-[945px] bg-slate-300">
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
          <Link to="/student/dashboard" className="flex flex-row justify-center items-center gap-2 w-[241px] h-[45px] hover:bg-[#FFFFFF] rounded-[6px] hover:shadow-2xl ">
            {" "}
            <LuCalendarSearch /> Timetable
          </Link>
        </div>

        {/* exit button */}
        <button className="text-[30px] mt-[300px] ml-[45px]">
          <Link to="/"><IoExitOutline /></Link>
        </button>
        
      </div>

      <div>
        <Outlet/>
      </div>

    </div>
      
    </div>
  )
}

export default StudentDashboard
