import React from 'react'
import { Link } from 'react-router-dom'

function AdminDashboardSubContainer() {
  return (
    <div>
    <div className="w-[1400px] h-[558px] border-[1px] mt-[90px] rounded-[12px] border-[#1E1E1E33] grid grid-cols-2 grid-rows-3 justify-items-center items-center">

                {/* Add Teacher */}
                <div className="flex items-center justify-center w-[445px] h-[109px] border-[#F2F4F7] border-[1px] rounded-[10px] bg-[#a3a3a34d]">
          <div className="relative w-[350px] h-[70px]">
            <p className="absolute text-[20px] font-[700] left-0 top-0">
              Add Teacher
            </p>
            <Link to="/admin/admin-dashboard/add-teacher" className="text-center pt-1 absolute w-[92px] h-[32px] bg-[#3482F7] text-white rounded-[6px] text-[16px] font-[700] right-0 bottom-0">
              Add
            </Link>
          </div>
        </div>
        {/* Add student */}
        <div className="flex items-center justify-center w-[445px] h-[109px] border-[#F2F4F7] border-[1px] rounded-[10px] bg-[#a3a3a34d]">
          <div className="relative w-[350px] h-[70px]">
            <p className="absolute text-[20px] font-[700] left-0 top-0">
              Add Student
            </p>
            <Link to="/admin/admin-dashboard/add-student" className="text-center pt-1 absolute w-[92px] h-[32px] bg-[#3482F7] text-white rounded-[6px] text-[16px] font-[700] right-0 bottom-0">
              Add
            </Link>
          </div>
        </div>
        {/* add module */}
        <div className="flex items-center justify-center w-[445px] h-[109px] border-[#F2F4F7] border-[1px] rounded-[10px] bg-[#a3a3a34d]">
          <div className="relative w-[350px] h-[70px]">
            <p className="absolute text-[20px] font-[700] left-0 top-0">
              Add Module
            </p>
            <Link to="/admin/admin-dashboard/add-module" className="text-center pt-1 absolute w-[92px] h-[32px] bg-[#3482F7] text-white rounded-[6px] text-[16px] font-[700] right-0 bottom-0">
              Add
            </Link>
          </div>
        </div>
        {/* add batch */}
        <div className="flex items-center justify-center w-[445px] h-[109px] border-[#F2F4F7] border-[1px] rounded-[10px] bg-[#a3a3a34d]">
          <div className="relative w-[350px] h-[70px]">
            <p className="absolute text-[20px] font-[700] left-0 top-0">
              Add Batch
            </p>
            <Link to="/admin/admin-dashboard/add-batch" className="text-center pt-1 absolute w-[92px] h-[32px] bg-[#3482F7] text-white rounded-[6px] text-[16px] font-[700] right-0 bottom-0">
              Add
            </Link>
          </div>
        </div>
        {/* add lecture hall */}
        <div className="flex items-center justify-center w-[445px] h-[109px] border-[#F2F4F7] border-[1px] rounded-[10px] bg-[#a3a3a34d]">
          <div className="relative w-[350px] h-[70px]">
            <p className="absolute text-[20px] font-[700] left-0 top-0">
              Add Lecture Hall
            </p>
            <Link to="/admin/admin-dashboard/add-lec-hall" className="text-center pt-1 absolute w-[92px] h-[32px] bg-[#3482F7] text-white rounded-[6px] text-[16px] font-[700] right-0 bottom-0">
              Add
            </Link>
          </div>
        </div>
        {/* add time slot */}
        <div className="flex items-center justify-center w-[445px] h-[109px] border-[#F2F4F7] border-[1px] rounded-[10px] bg-[#a3a3a34d]">
          <div className="relative w-[350px] h-[70px]">
            <p className="absolute text-[20px] font-[700] left-0 top-0">
              Add Custom Timeslots
            </p>
            <Link to="/admin/admin-dashboard/add-custom-timeslot" className="text-center pt-1 absolute w-[92px] h-[32px] bg-[#3482F7] text-white rounded-[6px] text-[16px] font-[700] right-0 bottom-0">
              Add
            </Link>
          </div>
        </div>
    </div>
            {/* schedule button */}
            <div className="flex w-[1400px] h-[150px] items-center justify-center">
            <button className="w-[200px] h-[60px] bg-[#3482F7] text-white rounded-[6px] text-[20px] font-[700]">
                Schedule
            </button>
      </div>
      </div>
  )
}

export default AdminDashboardSubContainer
