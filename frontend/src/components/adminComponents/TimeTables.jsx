import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import SubTimeTable from "./SubTimeTable";
import * as yup from "yup";
import { useFormik } from "formik";
import * as apiClient from "../../api-client";

let schema = yup.object().shape({
  batchID: yup.string(),
  dep: yup.string(),
  lecID: yup.string()
});



function TimeTables() {


  let [data,setData] = useState([])
  let [batchIDs, setBatchIDs] = useState([]);

  useEffect (() => {
    const fetchBatches = async () => {
      try {
        const x = await apiClient.getBatchesIDs();
        setBatchIDs(x);
      } catch (error) {
        console.error("Failed to fetch batches:", error);
      }
    };

    fetchBatches();
  }, []);

  
  const formik = useFormik({
    initialValues: {
      batchID: "",
      dep: "",
      lecID: ""
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const response = await apiClient.getTimetableData(values);
      setData(response)
    },
  });

  

  return (
    <div className="ml-[60px]">
      {/* Heading */}
      <div className="flex flex-row mt-[20px] justify-between items-center  w-[1400px]">
        <p className="text-[30px] font-[600]">Time Tables</p>
        <button className="text-[30px]">
          <CgProfile />
        </button>
      </div>

      <div className="w-[900px] h-[110px] mt-[90px]">
        <form onSubmit={formik.handleSubmit} className="flex items-center justify-between">
          <div className="flex gap-10">
            {/* Department */}
            <select
              id="options"
              name="dep"
              value={formik.values.dep}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
             className="block w-[300px] py-2 pl-3 pr-10 mt-1 text-base border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>
                Department
              </option>
              <option value="Faculty of Computing and IT">
                Faculty of Computing and IT
              </option>
              <option value="Faculty Of Engineering">
                Faculty Of Engineering
              </option>
              <option value="Faculty of Technology">
                Faculty of Technology
              </option>
            </select>

            {/* Batch */}

            <select
              id="options"
              name="batchID"
              value={formik.values.batchID}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-[300px] py-2 pl-3 pr-10 mt-1 text-base border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>
                Batch ID
              </option>
              {batchIDs.map((batchID) => (
                <option key={batchID} value={batchID}>
                  {batchID}
                </option>
              ))}
            </select>

            {/* Lecture ID */}
            <input
              type="text"
              name="lecID"
              value={formik.values.lecID}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-[300px] py-2 pl-3 pr-10 mt-1 text-base border-[1px] border-gray-300 rounded-md"
              placeholder="Lecturer Id"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-[92px] h-[32px] bg-[#3482F7] text-white rounded-[6px] text-[16px] font-[700] ml-[80px]"
            >
              Show
            </button>
          </div>
        </form>
      </div>

      <SubTimeTable timeslots={data} />
    </div>
  );
}

export default TimeTables;
