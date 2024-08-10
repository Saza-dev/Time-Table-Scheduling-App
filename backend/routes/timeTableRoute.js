import express from 'express';
import { addTimeTable, deleteATimeTable, getAllTimeTables, getATimeTable, updateATimeTable } from '../controller/timeTableController.js';

const router = express.Router()



router.post("/add-timeTable",addTimeTable)

router.get("/get-all-timetables",getAllTimeTables)

router.get("/get-a-timetable/:_id",getATimeTable)

router.put("/update-a-timetable/:_id",updateATimeTable)

router.delete("/delete-a-timetable/:_id",deleteATimeTable)



export default router;