import React from "react";
import { CgProfile } from "react-icons/cg";
import StudentsSectionFilters from "../../Forms/Admin/StudentsSectionFilters";

function Students() {


  return (
    <div className="ml-[60px]">
      {/* Heading */}
      <div className="flex flex-row mt-[20px] justify-between items-center  w-[1400px]">
        <p className="text-[30px] font-[600]">Students</p>
        <button className="text-[30px]">
          <CgProfile />
        </button>
      </div>

      {/* Filters */}
      <StudentsSectionFilters/>
      
      {/* Data */}

<div className="w-[1400px] h-[550px] border-[1px]  rounded-[12px] border-[#1E1E1E33] flex justify-center items-center">

<div className="h-[480px] flex flex-col gap-5 overflow-y-auto">


{/* Data 01 */}
<div className="w-[1200px] h-[65px] bg-[#F2F4F7] rounded-[10px] flex items-center justify-between flex-shrink-0">
  <div className="flex items-center gap-10 ml-[40px]">
    {/* icon */}
    <CgProfile className="text-[34px] " />
    {/* name */}
    <p className="text-[18px]">Student Name</p>

    <p className="text-[18px]">Student Id</p>
  </div>

  {/* buttons */}
  <div className="flex mr-[40px] gap-10">
    <button className="w-[92px] h-[32px] rounded-[6px] bg-[#6C7073] text-white">
      Edit
    </button>
    <button className="w-[92px] h-[32px] rounded-[6px] bg-[#F73434] text-white">
      Delete
    </button>
  </div>
</div>


{/* Data 02 */}
<div className="w-[1200px] h-[65px] bg-[#F2F4F7] rounded-[10px] flex items-center justify-between flex-shrink-0">
  <div className="flex items-center gap-10 ml-[40px]">
    {/* icon */}
    <CgProfile className="text-[34px] " />
    {/* name */}
    <p className="text-[18px]">Student Name</p>
    <p className="text-[18px]">Student Id</p>
  </div>

  {/* buttons */}
  <div className="flex mr-[40px] gap-10">
    <button className="w-[92px] h-[32px] rounded-[6px] bg-[#6C7073] text-white">
      Edit
    </button>
    <button className="w-[92px] h-[32px] rounded-[6px] bg-[#F73434] text-white">
      Delete
    </button>
  </div>
</div>

{/* Data 03 */}
<div className="w-[1200px] h-[65px] bg-[#F2F4F7] rounded-[10px] flex items-center justify-between flex-shrink-0">
  <div className="flex items-center gap-10 ml-[40px]">
    {/* icon */}
    <CgProfile className="text-[34px] " />
    {/* name */}
    <p className="text-[18px]">Student Name</p>
    <p className="text-[18px]">Student Id</p>
  </div>

  {/* buttons */}
  <div className="flex mr-[40px] gap-10">
    <button className="w-[92px] h-[32px] rounded-[6px] bg-[#6C7073] text-white">
      Edit
    </button>
    <button className="w-[92px] h-[32px] rounded-[6px] bg-[#F73434] text-white">
      Delete
    </button>
  </div>
</div>

{/* Data 04 */}
<div className="w-[1200px] h-[65px] bg-[#F2F4F7] rounded-[10px] flex items-center justify-between flex-shrink-0">
  <div className="flex items-center gap-10 ml-[40px]">
    {/* icon */}
    <CgProfile className="text-[34px] " />
    {/* name */}
    <p className="text-[18px]">Student Name</p>
    <p className="text-[18px]">Student Id</p>
  </div>

  {/* buttons */}
  <div className="flex mr-[40px] gap-10">
    <button className="w-[92px] h-[32px] rounded-[6px] bg-[#6C7073] text-white">
      Edit
    </button>
    <button className="w-[92px] h-[32px] rounded-[6px] bg-[#F73434] text-white">
      Delete
    </button>
  </div>
</div>

{/* Data 05 */}
<div className="w-[1200px] h-[65px] bg-[#F2F4F7] rounded-[10px] flex items-center justify-between flex-shrink-0">
  <div className="flex items-center gap-10 ml-[40px]">
    {/* icon */}
    <CgProfile className="text-[34px] " />
    {/* name */}
    <p className="text-[18px]">Student Name</p>
    <p className="text-[18px]">Student Id</p>
  </div>

  {/* buttons */}
  <div className="flex mr-[40px] gap-10">
    <button className="w-[92px] h-[32px] rounded-[6px] bg-[#6C7073] text-white">
      Edit
    </button>
    <button className="w-[92px] h-[32px] rounded-[6px] bg-[#F73434] text-white">
      Delete
    </button>
  </div>
</div>
</div>
</div>
</div>
  );
}

export default Students;
