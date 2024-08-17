import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import * as apiClient from "../../api-client";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";

let schema = yup.object().shape({
  batchID: yup.string().required("Required"),
  year: yup.number().required("Required"),
  dep: yup.string().required("Required"),
  numStudents: yup.number().required("Required"),
});

function AddBatch() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      batchID: "",
      year: "",
      dep: "",
      numStudents: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        const response = await apiClient.addBatch(values);
        console.log(response);

        if (response.success) {
          toast.info("Batch Details Added Successfully", {
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
        toast.error("Failed to add lecturer. Please try again.", {
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

  return (
    <div className="flex items-center justify-center w-full h-[790px]">
      <form
        onSubmit={formik.handleSubmit}
        className="w-[1000px] h-[600px] bg-[#F2F4F7] border-[1px] flex flex-col gap-10 items-center pt-[100px]"
      >
        <div className="flex gap-10">
          {/* Batch ID */}
          <div>
            <input
              type="text"
              name="batchID"
              value={formik.values.batchID}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-[400px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Batch ID"
            />
            {formik.touched.batchID && formik.errors.batchID ? (
              <div className="text-sm text-red-500">
                {formik.errors.batchID}
              </div>
            ) : null}
          </div>

          {/* year */}
          <div>
            <input
              type="text"
              name="year"
              value={formik.values.year}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-[400px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Year"
            />

            {formik.touched.year && formik.errors.year ? (
              <div className="text-sm text-red-500">{formik.errors.year}</div>
            ) : null}
          </div>
        </div>
        <div className="flex gap-10">
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

          <div>
            <input
              type="text"
              name="numStudents"
              value={formik.values.numStudents}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-[400px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Num of Students"
            />
            {formik.touched.numStudents && formik.errors.numStudents ? (
              <div className="text-sm text-red-500">
                {formik.errors.numStudents}
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

export default AddBatch;
