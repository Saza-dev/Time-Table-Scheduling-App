import { CgProfile } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import * as apiClient from "../../api-client";
import { Bounce, toast } from "react-toastify";

let schema = yup.object().shape({
  batchID: yup.string().required("Required"),
  dep: yup.string().required("Required"),
});

function Students() {
  let [batchIDs, setBatchIDs] = useState([]);
  let [students, setStudents] = useState([]);

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
      batchID: "",
      dep: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const response = await apiClient.getStudents(values);
      setStudents(response.data);
    },
  });

  const handleDelete = async (studentId) => {
    try {
      const response = await apiClient.deleteAStudent(studentId);

      if (response.status === 204) {
        setStudents((prevStudents) =>
          prevStudents.filter((student) => student.studentId !== studentId)
        );

        toast.info("Student deleted successfully!", {
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
      } else {
        toast.error("Failed to delete the Student.", {
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
      toast.error("An error occurred while deleting the student.", {
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
  };

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
      <div className="w-[900px] h-[110px] mt-[90px]">
        <form
          onSubmit={formik.handleSubmit}
          className="flex items-center justify-between"
        >
          <div className="flex gap-10">
            {/* Department */}
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

            {/* Batch */}

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
          </div>

          <div>
            <button
              type="submit"
              className="w-[92px] h-[32px] bg-[#3482F7] text-white rounded-[6px] text-[16px] font-[700]"
            >
              Show
            </button>
          </div>
        </form>
      </div>

      {/* Data */}

      <div className="w-[1400px] h-[550px] border-[1px]  rounded-[12px] border-[#1E1E1E33] flex justify-center items-center">
        <div className="h-[480px] flex flex-col gap-5 overflow-y-auto">
          {students.length === 0 ? (
            <div className="text-[20px] font-[500]">
              No students to show. Make sure to click the show button with
              selected filters or try Adding Students.
            </div>
          ) : (
            students.map((student, index) => (
              <div
                key={index}
                className="w-[1200px] h-[65px] bg-[#F2F4F7] rounded-[10px] flex items-center justify-between flex-shrink-0"
              >
                <div className="flex items-center gap-10 ml-[40px] justify-between w-[400px]">
                  {/* icon */}
                  <CgProfile className="text-[34px]" />
                  {/* name */}
                  <p className="text-[18px]">{student.name}</p>
                  <p className="text-[18px]">{student.studentId}</p>
                </div>

                {/* buttons */}
                <div className="flex mr-[40px] gap-10">
                  <button className="w-[92px] h-[32px] rounded-[6px] bg-[#6C7073] text-white">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(student.studentId)}
                    className="w-[92px] h-[32px] rounded-[6px] bg-[#F73434] text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Students;
