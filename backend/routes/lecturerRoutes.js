import express from 'express';
import { addLecturer, getALecturer, updateALecturer,deletelecturer,getAllLecturers} from '../controller/lecturerController.js';

const router = express.Router()

router.post("/add-Lecturer", addLecturer)
router.get("/get-a-Lecturer/:_id", getALecturer)
router.get("/get-all-Lecturers", getAllLecturers)
router.put("/update-a-Lecturer/:_id", updateALecturer)
router.delete("/delete-a-Lecturer/:_id", deletelecturer)




export default router;