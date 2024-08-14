import React from "react";
import { Link } from "react-router-dom";

function Profile() {
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
            <div className="w-[333px] h-[52px] border-[1px] rounded-[6px]"></div>
          </div>
          <div className="w-[333px] h-[73px]">
            <p className="text-[17px] font-[400]">NIC</p>
            <div className="w-[333px] h-[52px] border-[1px] rounded-[6px]"></div>
          </div>

          <div className="w-[333px] h-[73px]">
            <p className="text-[17px] font-[400]">Address</p>
            <div className="w-[333px] h-[52px] border-[1px] rounded-[6px]"></div>
          </div>
          <div className="w-[333px] h-[73px]">
            <p className="text-[17px] font-[400]">Date Of Birth</p>
            <div className="w-[333px] h-[52px] border-[1px] rounded-[6px]"></div>
          </div>

          <div className="w-[333px] h-[73px]">
            <p className="text-[17px] font-[400]">Gender</p>
            <div className="w-[333px] h-[52px] border-[1px] rounded-[6px]"></div>
          </div>
          <div className="w-[333px] h-[73px]">
            <p className="text-[17px] font-[400]">Contact Number</p>
            <div className="w-[333px] h-[52px] border-[1px] rounded-[6px]"></div>
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
