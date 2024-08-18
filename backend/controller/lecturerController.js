import asyncHandler from "express-async-handler";
import lecturerModel from "../models/lecturerModel.js";

// add lecturer
const addLecturer = asyncHandler(async (req, res) => {
  const { lecID, lecName, dep, contact } = req.body;

  const newLecturer = lecturerModel.build({
    lecid: lecID,
    name: lecName,
    department: dep,
    contactDetails: contact,
  });

  try {
    await newLecturer.save();
    res.status(200).json({
      success: true,
      message: "Lecturer added successfully",
      data: newLecturer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add lecturer",
      error: error.message,
    });
  }
});

// get a lecturer

const getALecturer = asyncHandler(async (req, res) => {

  const lecturerId = req.params.id;
  console.log()
  const lecturer = await lecturerModel.findOne({
    where: {
      lecid: lecturerId,
    },
  });

  res.status(200).json(lecturer);
});

//get all lecturers

const getAllLecturers = asyncHandler(async (req, res) => {
  const Lecturers = await lecturerModel.findAll();
  res.json(Lecturers);
});

// update a lecturer
const updateALecturer = asyncHandler(async (req, res) => {
  const lecturerId = req.params._id;

  const lecturer = await lecturerModel.findOne({
    where: {
      lecid: lecturerId,
    },
  });

  const updatedFields = {};
  if (req.body.name !== undefined) {
    updatedFields.name = req.body.name;
  }
  if (req.body.department !== undefined) {
    updatedFields.department = req.body.department;
  }
  if (req.body.contactDetails !== undefined) {
    updatedFields.contactDetails = req.body.contactDetails;
  }

  await lecturer.set(updatedFields);

  await lecturer.save();

  res.status(200).json(lecturer);
});

// delete a lecturer
const deleteLecturer = asyncHandler(async (req, res) => {

  const lecturerId = req.params.id;

  if (!lecturerId) {
    return res.status(400).json({ message: "Lecturer ID is required" });
  }

  try {
    const lecturer = await lecturerModel.findOne({
      where: {
        lecid: lecturerId,
      },
    });

    if (!lecturer) {
      return res.status(404).json({ message: "Lecturer not found" });
    }

    await lecturer.destroy();
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting lecturer:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export {
  addLecturer,
  getALecturer,
  updateALecturer,
  deleteLecturer,
  getAllLecturers,
};
