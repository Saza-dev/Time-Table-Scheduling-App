import express from 'express';
import { addLecturer, getALecturer, updateALecturer,getAllLecturers, deleteLecturer} from '../controller/lecturerController.js';

const router = express.Router()

router.post("/add-Lecturer", addLecturer)
router.get("/get-a-Lecturer/:id", getALecturer)
router.get("/get-all-Lecturers", getAllLecturers)
router.put("/update-a-Lecturer/:_id", updateALecturer)
router.delete("/delete-a-Lecturer/:id", deleteLecturer)




export default router;