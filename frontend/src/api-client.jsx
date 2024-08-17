import axios from "axios";

const host = "http://localhost:5000";

//  add a lecturer
export const addTeacher = async (teacher) => {
  const response = await axios.post(
    `${host}/api/v1/lecturer/add-Lecturer`,
    teacher
  );
  return response.data;
};

// add a batch
export const addBatch = async (batch) => {
  const response = await axios.post(`${host}/api/v1/batch/add-batch`, batch);
  return response.data;
};

// add lecture hall
export const addLecHall = async (hall) => {
  const response = await axios.post(
    `${host}/api/v1/lectureHall/add-LecHall`,
    hall
  );
  return response.data;
};

// add Student

export const addStudent = async (student) => {
  const response = await axios.post(
    `${host}/api/v1/student/add-student`,
    student
  );
  return response.data;
};

// add module

export const addModule = async (module) => {
  const response = await axios.post(`${host}/api/v1/module/add-module`, module);
  return response.data;
};

// add time slot
export const addTimeSlot = async (slot) => {
  console.log(slot)
  const response = await axios.post(
    `${host}/api/v1/timeTable/add-timeTable`,
    slot
  );
  return response.data;
};

// get all batches IDs for student form
export const getBatchesIDs = async () => {
  const response = await axios.get(`${host}/api/v1/batch/get-batch-ids`);
  return response.data;
};

// get lecIDs and batchIDs for module form
export const getLecIDsBatchIDs = async () => {
  const response = await axios.get(`${host}/api/v1/module/get-lec-batch-IDs`);
  return response.data;
};

// get data sets for time table form
export const getTimetableFormData = async () => {
  const response = await axios.get(`${host}/api/v1/timeTable/datasetIDs`);
  return response.data;
};

// get all lecturers
export const getLecturers = async () => {
  const response = await axios.get(`${host}/api/v1/lecturer/get-all-Lecturers`);
  return response.data;
};

// get all students from department and batch
export const getStudents = async (data) => {
  const response = await axios.get(
    `${host}/api/v1/student/get-sorted-students`,
    {
      params: {
        data: data,
      },
    }
  );
  return response;
};

// get Time Table Data
export const getTimetableData = async (data) => {
  const response = await axios.get(`${host}/api/v1/timeTable/get-timeSlots`, {
    params: {
      data: data,
    },
  });
  return response;
};

// Delete a Lecturer
export const deleteALecturer = async (lecID) => {
  const response = await axios.delete(
    `${host}/api/v1/lecturer/delete-a-Lecturer/${lecID}`
  );
  return response;
};

// Delete a Student
export const deleteAStudent = async (stuID) => {
  const response = await axios.delete(
    `${host}/api/v1/student/delete-a-student/${stuID}`
  );
  return response;
};
