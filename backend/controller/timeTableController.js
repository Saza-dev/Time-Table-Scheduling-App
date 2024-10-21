import asyncHandler from "express-async-handler";
import module from "../models/moduleModel.js";
import hall from "../models/lecHallModel.js";
import batch from "../models/batchModel.js";
import lecturer from "../models/lecturerModel.js";
import TimeTable from "../models/timeTableModel.js";

// add time table
const addTimeTable = asyncHandler(async (req, res) => {
  const { to, from, batchID, day, lecID, moduleID, hallID, dep } = req.body;

  console.log("body : ",req.body)

  const newTimeTable = TimeTable.build({
    To: to,
    From: from,
    Day: day,
    batchId: batchID,
    lecturerId: lecID,
    moduleId: moduleID,
    hallId: hallID,
    department: dep,
  });

  try {
    await newTimeTable.save();
    res.status(200).json({
      success: true,
      message: "Time slot added successfully",
      data: newTimeTable,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to add Time slot Details",
      error: error.message,
    });
  }
});

// get all time tables

const getAllTimeTables = asyncHandler(async (req, res) => {
  const TimeTables = await TimeTable.findAll();
  res.json(TimeTables);
});

// get a time table
const getATimeTable = asyncHandler(async (req, res) => {
  const timeTableID = req.params._id;

  const timeTable = await TimeTable.findOne({
    where: { timeTableID: timeTableID },
  });

  res.status(200).json(timeTable);
});

// update a Time Table
const updateATimeTable = asyncHandler(async (req, res) => {
  const timeTableID = req.params._id;

  const timeTable = await TimeTable.findOne({
    where: { timeTableID: timeTableID },
  });

  const updatedFields = {};

  if (req.body.timeSlot !== undefined) {
    updatedFields.timeSlot = req.body.timeSlot;
  }
  if (req.body.batchId !== undefined) {
    updatedFields.batchId = req.body.batchId;
  }
  if (req.body.lecturerId !== undefined) {
    updatedFields.lecturerId = req.body.lecturerId;
  }
  if (req.body.moduleId !== undefined) {
    updatedFields.moduleId = req.body.moduleId;
  }
  if (req.body.hallId !== undefined) {
    updatedFields.hallId = req.body.hallId;
  }

  await timeTable.set(updatedFields);

  await timeTable.save();

  res.status(200).json(timeTable);
});

// delete a timeTable
const deleteATimeTable = asyncHandler(async (req, res) => {
  const timeTableID = req.params._id;

  const timeTable = await TimeTable.findOne({
    where: { timeTableID: timeTableID },
  });

  await timeTable.destroy();

  res.status(204).json({ message: "timeTable deleted" });
});

// data set of module ID, Hall ID, Lecturer ID, Batch ID
const dataset = asyncHandler(async (req, res) => {
  const lecturers = await lecturer.findAll();
  const batches = await batch.findAll();
  const halls = await hall.findAll();
  const modules = await module.findAll();

  const data = {
    lecturers: lecturers.map((lecturer) => lecturer.dataValues.lecid),
    batches: batches.map((batch) => batch.dataValues.batchId),
    halls: halls.map((hall) => hall.dataValues.id),
    modules: modules.map((module) => module.dataValues.moduleid),
  };

  res.json(data);
});

// get time slots
const timeSlots = asyncHandler(async (req, res) => {
  const { dep, batchID, lecID } = req.query.data;
  if (!lecID) {
    const timeSlots = await TimeTable.findAll({
      where: {
        batchId: batchID,
        department: dep,
      },
    });
    res.json(timeSlots)
  } else if (!dep && !batchID && lecID) {
    const timeSlots = await TimeTable.findAll({
      where: {
        lecturerId: lecID,
      },
    });
    res.json(timeSlots)
  }
});


// delete all time tables
const deleteAllTimeTables = asyncHandler(async (req, res) => {
  try {
    await TimeTable.destroy({
      where: {},
      truncate: true, // This will delete all records and reset the auto-incrementing primary keys
    });
    res.status(204).json({ message: "All timeTables deleted" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: error.message });
  }
});

export {
  addTimeTable,
  getAllTimeTables,
  getATimeTable,
  updateATimeTable,
  deleteATimeTable,
  dataset,
  timeSlots,
  deleteAllTimeTables
};
