import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client" 


function Profile() {


  let [name,setName] = useState("")
  let [id,setID] = useState("")
  let [dep,setDep] = useState("")
  let [contact,setContact] = useState("")

  useEffect(() => {
    const role = localStorage.getItem("Role");
    const storedID = localStorage.getItem("setID"); // Correct key to retrieve ID

    

    if (role === "student") {
      const fetchStudentProfile = async () => {
        try {
          const response = await apiClient.getAStudent(storedID);
          console.log(response);
          setName(response.data.name);
          setID(response.data.studentId);
          setDep(response.data.department);
          setContact(response.data.contactDetails);
        } catch (error) {
          console.log(error);
        }
      };
      fetchStudentProfile();
    } else if (role === "teacher") {
      const fetchLecturerProfile = async () => {
        try {
          const response = await apiClient.getALecturer(storedID);
          console.log(response);
          setName(response.data.name);
          setID(response.data.lecid);
          setDep(response.data.department);
          setContact(response.data.contactDetails);
        } catch (error) {
          console.log(error);
        }
      };
      fetchLecturerProfile();
    }
  }, []);
  








  return (
    <div className="flex items-center justify-center w-[1600px] h-full">
      <div className="w-[1200px] h-[750px] border-[1px]">
        {/* topic */}
        <p className="text-[26px] font-[500] mt-[40px] ml-[40px]">
          Personal Details
        </p>
        <div className="grid grid-cols-2 gap-10 mt-[80px] ml-[100px]">
          <div className="w-[333px] h-[73px]">
            <p className="text-[17px] font-[400]">Full Name</p>
            <div className="w-[333px] h-[52px] border-[1px] rounded-[6px] text-[16px] text-center pt-[10px]">{name}</div>
          </div>
          <div className="w-[333px] h-[73px]">
            <p className="text-[17px] font-[400]">ID</p>
            <div className="w-[333px] h-[52px] border-[1px] rounded-[6px] text-[16px] text-center pt-[10px]">{id}</div>
          </div>

          <div className="w-[333px] h-[73px]">
            <p className="text-[17px] font-[400] ">Department</p>
            <div className="w-[333px] h-[52px] border-[1px] rounded-[6px] text-[16px] text-center pt-[10px]">{dep}</div>
          </div>
          <div className="w-[333px] h-[73px]">
            <p className="text-[17px] font-[400]">Contact Number</p>
            <div className="w-[333px] h-[52px] border-[1px] rounded-[6px] text-[16px] text-center pt-[10px]">{contact}</div>
          </div>
        </div>

        <button className="w-[95px] h-[38px] rounded-[6px] bg-[#3482F7] font-[700] text-white mt-[100px] ml-[500px]">
          <Link to="/"></Link>Edit
        </button>
      </div>
    </div>
  );
}

export default Profile;
