import express from 'express';
import {addStudent, deleteAStudent, getAllStudents, getAStudent, updateAStudent} from '../controller/studentController.js';


const router = express.Router()

router.post("/add-student", addStudent)
router.get("/get-all-students",getAllStudents)
router.get("/get-a-student/:_id",getAStudent)
router.put("/update-a-student/:_id",updateAStudent)
router.delete("/delete-a-student/:_id",deleteAStudent)


export default router;