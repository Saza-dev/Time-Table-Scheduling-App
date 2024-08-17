import React, { useEffect, useState } from "react";
import * as apiClient from "../../api-client";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast, Bounce } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

let schema = yup.object().shape({
  moduleID: yup.string().required("Required"),
  moduleName: yup.string().required("Required"),
  credits: yup.string().required("Required"),
  lecID: yup.string().required("Required"),
  batchID: yup.string().required("Required"),
  dep: yup.string().required("Required"),
});

function AddModule() {
  const navigate = useNavigate();
  let [lecIDs, setLecIDs] = useState([]);
  let [batchIDs, setBatchIDs] = useState([]);

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const x = await apiClient.getLecIDsBatchIDs();
        setBatchIDs(x.batches);
        setLecIDs(x.lecturers);
      } catch (error) {
        console.error("Failed to fetch batches:", error);
      }
    };

    fetchBatches();
  }, []);

  const formik = useFormik({
    initialValues: {
      moduleID: "",
      moduleName: "",
      credits: "",
      lecID: "",
      batchID: "",
      dep: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        const response = await apiClient.addModule(values);

        if (response.success) {
          toast.info("Module Added Successfully", {
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
        toast.error("Failed to add Module. Please try again.", {
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

  const renderWarningMessage = (message) => (
    <div className="flex items-center justify-center w-full h-[790px]">
      <div className="w-[1000px] h-[600px] bg-[#F2F4F7] border-[1px] flex flex-col gap-10 items-center pt-[100px]">
        <p className="text-[25px] font-[500]">{message}</p>
        <Link to={"/admin/admin-dashboard/dashboard"}>
          <button className="w-[100px] h-[40px] text-center rounded-[6px] bg-[#3482F7] font-[700] text-white mt-[100px]">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );

  if (batchIDs.length === 0 && lecIDs.length === 0) {
    return renderWarningMessage(
      "Please Add Lecture Details and Batch Details before Adding Modules"
    );
  } else if (batchIDs.length === 0) {
    return renderWarningMessage(
      "Please Add Batch Details before Adding Modules"
    );
  } else if (lecIDs.length === 0) {
    return renderWarningMessage(
      "Please Add Lecture Details before Adding Modules"
    );
  } else {
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
                name="moduleID"
                value={formik.values.moduleID}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-[252px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
                placeholder="Module ID"
              />
              {formik.touched.moduleID && formik.errors.moduleID ? (
                <div className="text-sm text-red-500">
                  {formik.errors.moduleID}
                </div>
              ) : null}
            </div>

            <div>
              <input
                type="text"
                name="moduleName"
                value={formik.values.moduleName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-[252px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
                placeholder="Module Name"
              />

              {formik.touched.moduleName && formik.errors.moduleName ? (
                <div className="text-sm text-red-500">
                  {formik.errors.moduleName}
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

              {formik.touched.dep && formik.errors.dep ? (
                <div className="text-sm text-red-500">{formik.errors.dep}</div>
              ) : null}
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <input
                type="text"
                name="credits"
                value={formik.values.credits}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-[252px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
                placeholder="Credits"
              />

              {formik.touched.credits && formik.errors.credits ? (
                <div className="text-sm text-red-500">
                  {formik.errors.credits}
                </div>
              ) : null}
            </div>

            <div>
              <select
                id="options"
                name="lecID"
                value={formik.values.lecID}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-[252px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none  focus:ring-indigo-500 focus:border-indigo-500 "
              >
                <option value="" disabled>
                  Lecturer ID
                </option>
                {lecIDs.map((lecID) => (
                  <option key={lecID} value={lecID}>
                    {lecID}
                  </option>
                ))}
              </select>

              {formik.touched.lecID && formik.errors.lecID ? (
                <div className="text-sm text-red-500">
                  {formik.errors.lecID}
                </div>
              ) : null}
            </div>

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

export default AddModule;
