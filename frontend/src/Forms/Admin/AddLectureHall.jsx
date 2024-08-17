import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import * as apiClient from "../../api-client";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";

let schema = yup.object().shape({
  hallID: yup.string().required("Required"),
  hallName: yup.string().required("Required"),
  capacity: yup.number().required("Required"),
  facilities: yup.string().required("Required"),
});

function AddLectureHall() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      hallID: "",
      hallName: "",
      capacity: "",
      facilities: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        const response = await apiClient.addLecHall(values);
        console.log(response);

        if (response.success) {
          // Assuming response.success indicates a successful operation
          toast.info("Lecture Hall Added Successfully", {
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
        toast.error("Failed to add lecture hall. Please try again.", {
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
          {/* hall id */}
          <div>
            <input
              type="text"
              name="hallID"
              value={formik.values.hallID}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-[400px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Hall ID"
            />
            {formik.touched.hallID && formik.errors.hallID ? (
              <div className="text-sm text-red-500">{formik.errors.hallID}</div>
            ) : null}
          </div>
          {/* hall name */}
          <div>
            <input
              type="text"
              name="hallName"
              value={formik.values.hallName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-[400px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Hall Name"
            />
            {formik.touched.hallName && formik.errors.hallName ? (
              <div className="text-sm text-red-500">
                {formik.errors.hallName}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex gap-10">
          {/* capacity */}
          <div>
            <input
              type="text"
              name="capacity"
              value={formik.values.capacity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-[400px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Seating Capacity"
            />
            {formik.touched.capacity && formik.errors.capacity ? (
              <div className="text-sm text-red-500">
                {formik.errors.capacity}
              </div>
            ) : null}
          </div>
          {/* facilities */}
          <div>
            <input
              type="text"
              name="facilities"
              value={formik.values.facilities}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-[400px] h-[50px] border-[1px] rounded-[6px] text-[18px] pl-[10px] placeholder-black"
              placeholder="Facilities"
            />
            {formik.touched.facilities && formik.errors.facilities ? (
              <div className="text-sm text-red-500">
                {formik.errors.facilities}
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

export default AddLectureHall;
