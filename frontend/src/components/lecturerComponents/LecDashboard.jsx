import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SubTimeTable from "../adminComponents/SubTimeTable";
import { CgProfile } from "react-icons/cg";
import * as apiClient from "../../api-client";

function Lecdashboard() {

   let  values = {
        lecID : "001-JS" 
    }
   
  let [data,setData] = useState([])



  useEffect (() => {
    const fetchTimeTable = async () => {
      try {
        const x = await apiClient.getTimetableData(values);
        console.log(x)
        setData(x);
      } catch (error) {
        console.error("Failed to fetch Timetable:", error);
      }
    };

    fetchTimeTable();
  }, []);

  return (
    
    <div>
      <div className="ml-[60px]">
        <div className="flex flex-row mt-[20px] justify-between items-center  w-[1400px]">
          <p className="text-[30px] font-[600]">Time Table</p>
          <button className="text-[30px]">
            <Link to="/lecturer/profile">
              <CgProfile />
            </Link>
          </button>
        </div>
      <div className="w-[1400px] mt-[100px] flex justify-center">
        <SubTimeTable timeslots={data} />
      </div>
      </div>
    </div>
  );
}

export default Lecdashboard;
