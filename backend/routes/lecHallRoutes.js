import express from 'express';
import { addLecHall, getAllLecHalls, getALecHall,updateALecHall,deleteALecHall } from '../controller/lecHallController.js';


const router = express.Router()

router.post("/add-LecHall", addLecHall)
router.get("/get-all-LecHalls",getAllLecHalls)
router.get("/get-a-LecHall/:_id",getALecHall)
router.put("/update-a-LecHall/:_id",updateALecHall)
router.delete("/delete-a-LecHall/:_id",deleteALecHall)


export default router;