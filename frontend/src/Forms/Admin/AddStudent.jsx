import React, { useEffect, useState } from "react";
import * as apiClient from "../../api-client";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast, Bounce } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

let schema = yup.object().shape({
  stuID: yup.string().required("Required"),
  stuName: yup.string().required("Required"),
  batchID: yup.string().required("Required"),
  dep: yup.string().required("Required"),
  contact: yup
    .string()
    .required("Required")
    .matches(/^[0-9]+$/, "Contact number is not valid"),
});

function AddStudent() {
  const navigate = useNavigate();
  let [batchIDs, setBatchIDs] = useState([]);

  useEffect(() => {
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
      stuID: "",
      stuName: "",
      batchID: "",
      dep: "",
      contact: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        const response = await apiClient.addStudent(values);
        
        if (response.success) {
          toast.info("Student Added Successfully", {
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
          navigate("/admin/admin-dashboard/dashboard");
        } else {
          toast.error(`Error: ${response.message}`, {
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
        toast.error("Failed to add Student. Please try again.", {
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
    },
  });

  if (batchIDs.length==0) {return (

    <div className="flex items-center justify-center w-full h-[790px]">
      <div className="w-[1000px] h-[600px] bg-[#F2F4F7] border-[1px] flex flex-col gap-10 items-center pt-[100px]">
        <p className="text-[25px] font-[500]">Please Add Batch Before Adding Students</p>
        <Link to={"/admin/admin-dashboard/dashboard"}>
        <button className="w-[100px] h-[40px] text-center rounded-[6px] bg-[#3482F7] font-[700] text-white mt-[100px]">
          Go Back
        </button>
        </Link>
      </div>
      </div>
    
  )}

  else {

  return (
    <div className="flex items-center justify-center w-full h-[790px]">
      <form
        onSubmit={formik.handleSubmit}
        className="w-[1000px] h-[600px] bg-[#F2F4F7] border-[1px] flex flex-col gap-10 items-center pt-[100px]"
      >
        <div className="flex gap-10">
          <div>
            <input
              type="text"
              name="stuID"
              value={formik.values.stuID}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-[400px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Student ID"
            />

            {formik.touched.stuID && formik.errors.stuID ? (
              <div className="text-sm text-red-500">{formik.errors.stuID}</div>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              name="stuName"
              value={formik.values.stuName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-[400px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Student Name"
            />

            {formik.touched.stuName && formik.errors.stuName ? (
              <div className="text-sm text-red-500">
                {formik.errors.stuName}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex gap-10">
          <div>
            <select
              id="options"
              name="batchID"
              value={formik.values.batchID}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-[252px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
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

            {formik.touched.batchID && formik.errors.batchID ? (
              <div className="text-sm text-red-500">
                {formik.errors.batchID}
              </div>
            ) : null}
          </div>

            <div>
          <select
            id="options"
            name="dep"
            value={formik.values.dep}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block w-[252px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
          >
            <option value="" disabled>
              Department
            </option>
            <option value="Faculty of Computing and IT">Faculty of Computing and IT</option>
            <option value="Faculty Of Engineering">Faculty Of Engineering</option>
            <option value="Faculty of Technology">Faculty of Technology</option>
          </select>

          {formik.touched.dep && formik.errors.dep ? (
              <div className="text-sm text-red-500">{formik.errors.dep}</div>
            ) : null}
            </div>
          

          <div>

          <input
            type="text"
            name="contact"
            value={formik.values.contact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-[252px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
            placeholder="Contact Number"
          />
            
          {formik.touched.contact && formik.errors.contact ? (
              <div className="text-sm text-red-500">{formik.errors.contact}</div>
            ) : null}
          </div>
          
        </div>

        <button
          type="submit"
          className="w-[95px] h-[38px] rounded-[6px] bg-[#3482F7] font-[700] text-white mt-[100px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
}

export default AddStudent;
