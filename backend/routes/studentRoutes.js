import express from 'express';
import {addStudent, deleteAStudent, getAllStudents, getAStudent, updateAStudent,getSortedStudents} from '../controller/studentController.js';


const router = express.Router()

router.post("/add-student", addStudent)
router.get("/get-all-students",getAllStudents)
router.get("/get-a-student/:id",getAStudent)
router.put("/update-a-student/:_id",updateAStudent)
router.delete("/delete-a-student/:id",deleteAStudent)



router.get("/get-sorted-students", getSortedStudents);


export default router;