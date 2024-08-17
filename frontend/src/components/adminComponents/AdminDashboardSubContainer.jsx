import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { Bounce, toast} from "react-toastify";
import * as apiClient from "../../api-client"


const handleClick = async () => {
  try {
    // Perform API request (replace with your actual endpoint and data)
    const response = await axios.get('http://localhost:5000/api/v1/timeTable/generate-timetable');
    
    let data = response.data

    let totalSlots = data.length;
    let completedSlots = 0;


    for (const entry of data) {
      console.log(entry)

      const [day, time] = entry.timeslot.split(' ');
      const [hour, minute] = time.split('.');
    
      const fromTime = `${hour.padStart(2, '0')}:${minute.padEnd(2, '0')}:00`; // Example: "13:00:00"
      const toTime = `${String(Number(hour) + 1).padStart(2, '0')}:${minute.padEnd(2, '0')}:00`; // Example: "14:00:00"

      let values = {
        day: day,
        from: fromTime,
        to: toTime,
        batchID: entry.batch,
        lecID: entry.lecturer,
        moduleID: entry.moduleName, 
        hallID: entry.hallName,
        dep: entry.department,
      }

      try {
        const response = await apiClient.addTimeSlot(values);
        completedSlots += 1;

        if (completedSlots === totalSlots) {
          toast.info("All time slots added successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          })}
      

      } catch (error) {
        console.error('Error sending data:', error);
      }

    }
    
   
    


} catch (error) {
    // Show error toast with the error message
    toast.error(`Failed to create schedules: ${error.message}`);
}
};



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
            <button onClick={handleClick} className="w-[200px] h-[60px] bg-[#3482F7] text-white rounded-[6px] text-[20px] font-[700]">
                Schedule
            </button>
      </div>
      </div>
  )
}

export default AdminDashboardSubContainer
