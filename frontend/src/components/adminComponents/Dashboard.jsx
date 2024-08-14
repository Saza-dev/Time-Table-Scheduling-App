import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="ml-[60px]">
      {/* Heading */}
      <div className="flex flex-row mt-[20px] justify-between items-center  w-[1400px]">
        <p className="text-[30px] font-[600]">Dashboard</p>
        <button className="text-[30px]">
          <Link to="/admin/profile"><CgProfile /></Link>
        </button>
      </div>

      {/* body */}
      <Outlet/>
    </div>
  );
}

export default Dashboard;
