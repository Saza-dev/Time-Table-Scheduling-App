import React, { useEffect, useState } from "react";
import * as apiClient from "../../api-client";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast, Bounce } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

let schema = yup.object().shape({
  moduleID: yup.string().required("Required"),
  lecID: yup.string().required("Required"),
  hallID: yup.string().required("Required"),
  batchID: yup.string().required("Required"),
  day: yup.string().required("Required"),
  from: yup.string().required("Required"),
  to: yup.string().required("Required"),
  dep:yup.string().required("Required"),
});

function AddCustomTime() {
  const navigate = useNavigate();
  const [moduleIDs, setModuleIDs] = useState([]);
  const [hallIDs, setHallIDs] = useState([]);
  const [lecIDs, setLecturerIDs] = useState([]);
  const [batchIDs, setBatchIDs] = useState([]);

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const x = await apiClient.getTimetableFormData();
        setBatchIDs(x.batches);
        setLecturerIDs(x.lecturers);
        setHallIDs(x.halls);
        setModuleIDs(x.modules);
      } catch (error) {
        console.error("Failed to fetch batches:", error);
      }
    };

    fetchBatches();
  }, []);

  const formik = useFormik({
    initialValues: {
      moduleID: "",
      lecID: "",
      hallID: "",
      batchID: "",
      day: "",
      from: "",
      to: "",
      dep:""
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        const response = await apiClient.addTimeSlot(values);

        if (response.success) {
          toast.info("Time slot Added Successfully", {
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
        toast.error("Failed to add Time slot. Please try again.", {
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
        <ul className="text-[20px]">
          <li>Module</li>
          <li>Hall</li>
          <li>Lecturers</li>
          <li>Batches</li>
        </ul>
        <Link to={"/admin/admin-dashboard/dashboard"}>
          <button className="w-[100px] h-[40px] text-center rounded-[6px] bg-[#3482F7] font-[700] text-white mt-[100px]">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );

  if (
    batchIDs.length == 0 ||
    lecIDs.length == 0 ||
    hallIDs.length == 0 ||
    moduleIDs.length == 0
  ) {
    return renderWarningMessage(
      "Please make sure to fill the data Into these tables"
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
              <select
                id="options"
                name="moduleID"
                value={formik.values.moduleID}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-[400px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
              >
                <option value="" disabled>
                  Module ID
                </option>
                {moduleIDs.map((moduleID) => (
                  <option key={moduleID} value={moduleID}>
                    {moduleID}
                  </option>
                ))}
              </select>

              {formik.touched.moduleID && formik.errors.moduleID ? (
                <div className="text-sm text-red-500">
                  {formik.errors.moduleID}
                </div>
              ) : null}
            </div>

            <div>
              <select
                id="options"
                name="hallID"
                value={formik.values.hallID}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-[400px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
              >
                <option value="" disabled>
                  Hall ID
                </option>
                {hallIDs.map((hallID) => (
                  <option key={hallID} value={hallID}>
                    {hallID}
                  </option>
                ))}
              </select>
              {formik.touched.hallID && formik.errors.hallID ? (
                <div className="text-sm text-red-500">
                  {formik.errors.hallID}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <select
                name="lecID"
                value={formik.values.lecID}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-[400px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
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
                className="block w-[400px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
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

          <div className="flex gap-10">
            <div>
              <select
                id="options"
                name="day"
                value={formik.values.day}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-[400px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
              >
                <option value="" disabled>
                  Day
                </option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
              </select>

              {formik.touched.day && formik.errors.day ? (
                <div className="text-sm text-red-500">{formik.errors.day}</div>
              ) : null}
            </div>

              <div>
                
             
            <select
              id="options"
              name="dep"
              value={formik.values.dep}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-[400px] h-[50px] py-2 pl-3 text-[18px] pr-10  border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
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



          <div className="w-[400px] flex gap-10 items-center">
              <div>
                <div className="text-[18px]  flex gap-5 items-center">
                  <label htmlFor="">From :</label>
                  <input
                    type="time"
                    name="from"
                    value={formik.values.from}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-[100px] flex items-center flex-col"
                  />
                </div>
                {formik.touched.from && formik.errors.from ? (
                  <div className="text-sm text-red-500">
                    {formik.errors.from}
                  </div>
                ) : null}
              </div>

              <div>
                <div className="text-[18px] flex gap-5 items-center">
                  <label htmlFor="">To :</label>
                  <input
                    type="time"
                    name="to"
                    value={formik.values.to}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-[100px] flex items-center flex-col"
                  />
                </div>

                {formik.touched.to && formik.errors.to ? (
                  <div className="text-sm text-red-500">{formik.errors.to}</div>
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

export default AddCustomTime;
