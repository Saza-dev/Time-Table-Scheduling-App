import express from "express";
import { Op } from 'sequelize';
import {
  addTimeTable,
  dataset,
  deleteATimeTable,
  getAllTimeTables,
  getATimeTable,
  updateATimeTable,
  timeSlots,
} from "../controller/timeTableController.js";
import { geneticAlgorithm } from "../controller/geneticAlgorithm.js";
import LectureHall from "../models/lecHallModel.js";
import Batch from "../models/batchModel.js";
import Module from "../models/moduleModel.js";
import timeTable from "../models/timeTableModel.js";

const router = express.Router();

router.post("/add-timeTable", addTimeTable);

router.get("/get-all-timetables", getAllTimeTables);

router.get("/get-a-timetable/:_id", getATimeTable);

router.put("/update-a-timetable/:_id", updateATimeTable);

router.delete("/delete-a-timetable/:_id", deleteATimeTable);

router.get("/datasetIDs", dataset);

router.get("/get-timeSlots", timeSlots);

// Route to generate a timetable
router.get("/generate-timetable", async (req, res) => {

  const del = await timeTable.destroy({
    where: {}, 
    force: true,
  });
  console.log(`${del} rows deleted from timeTable`);

  
  // dataSets
  const lecHalls = await LectureHall.findAll();
  const batches = await Batch.findAll();
  const modules = await Module.findAll();

  // Transform the batches and modules into the lectures format
  const lectures = modules.map((mod, index) => ({
    lecID: index + 1, // Generate a unique ID for each lecture
    moduleName: mod.dataValues.name,
    batch: mod.dataValues.batchid, // Assuming batchid maps directly to the batch name
    studentCount:
      batches.find(
        (batch) => batch.dataValues.batchId === mod.dataValues.batchid
      )?.dataValues.noOfStudents || 0,
    department: mod.dataValues.department,
    lecturer: mod.dataValues.lectureid, // Placeholder for lecturer name, adjust based on your requirements
  }));

  const timeslots = [
    'Monday 9.00', 'Monday 10.00', 'Monday 11.00', 'Monday 12.00', 'Monday 13.00', 'Monday 14.00', 'Monday 15.00', 'Monday 16.00',
    'Tuesday 9.00', 'Tuesday 10.00', 'Tuesday 11.00', 'Tuesday 12.00', 'Tuesday 13.00', 'Tuesday 14.00', 'Tuesday 15.00', 'Tuesday 16.00',
    'Wednesday 9.00', 'Wednesday 10.00', 'Wednesday 11.00', 'Wednesday 12.00', 'Wednesday 13.00', 'Wednesday 14.00', 'Wednesday 15.00', 'Wednesday 16.00',
    'Thursday 9.00', 'Thursday 10.00', 'Thursday 11.00', 'Thursday 12.00', 'Thursday 13.00', 'Thursday 14.00', 'Thursday 15.00', 'Thursday 16.00',
    'Friday 9.00', 'Friday 10.00', 'Friday 11.00', 'Friday 12.00', 'Friday 13.00', 'Friday 14.00', 'Friday 15.00', 'Friday 16.00',
];

  const halls = lecHalls.map((hall) => ({
    hallName: hall.name,
    capacity: hall.seating_capacity,
  }));

  const popSize = 50;
  const generations = 100;
  const bestSolution = geneticAlgorithm(popSize, generations, halls, lectures,timeslots);
  res.json(bestSolution);
});

export default router;
