import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import * as apiClient from "../../api-client";
import { Bounce, toast } from 'react-toastify';

function Teachers() {
  let [lecIDs, setLecIDs] = useState([]);

  useEffect(() => {
    const fetchLecturers = async () => {
      try {
        const x = await apiClient.getLecturers();
        setLecIDs(x);
      } catch (error) {
        console.error("Failed to fetch lecturers:", error);
      }
    };

    fetchLecturers();
  }, []);



  const handleDelete = async (lecId) => {
    try {

      const response = await apiClient.deleteALecturer(lecId);
  
      if (response.status === 204) { 
        setLecIDs((prevLecIDs) => prevLecIDs.filter((lec) => lec.lecid !== lecId))
        
        

        toast.info("Lecturer deleted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

      } else {
        toast.error('Failed to delete the lecturer.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error('An error occurred while deleting the lecturer.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="ml-[60px]">
      {/* Heading */}
      <div className="flex flex-row mt-[20px] justify-between items-center  w-[1400px]">
        <p className="text-[30px] font-[600]">Lecturers</p>
        <button className="text-[30px]">
          <CgProfile />
        </button>
      </div>

      {/* Data */}

      <div className="w-[1400px] h-[650px] border-[1px] mt-[90px] rounded-[12px] border-[#1E1E1E33] flex justify-center items-center">
        {lecIDs.length == 0 ? (
          <div className="text-[25px] font-[600]">No Lectures added</div>
        ) : (
          <div className="h-[500px] flex flex-col gap-5 overflow-y-auto">

            {lecIDs.map((lec,index)=>(
                          <div key={index} className="w-[1200px] h-[65px] bg-[#F2F4F7] rounded-[10px] flex items-center justify-between flex-shrink-0">
                          <div className="flex items-center gap-10 ml-[40px] w-[400px] justify-between">
                            {/* icon */}
                            <CgProfile className="text-[34px] " />
                            {/* name */}
                            <p className="text-[18px]">{lec.name}</p>
                            <p className="text-[18px]">{lec.lecid}</p>
                          </div>
                          {/* buttons */}
                          <div className="flex mr-[40px] gap-10">
                            <button className="w-[92px] h-[32px] rounded-[6px] bg-[#6C7073] text-white">
                              Edit
                            </button>
                            <button onClick={()=> handleDelete(lec.lecid)} className="w-[92px] h-[32px] rounded-[6px] bg-[#F73434] text-white">
                              Delete
                            </button>
                          </div>
                        </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}

export default Teachers;
