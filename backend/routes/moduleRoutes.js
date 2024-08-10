import express from 'express';
import { addModule,allModule,getAModule,updateModule,deletemodule} from '../controller/moduleController.js';


const router = express.Router()


router.post("/add-Module", addModule)
router.get("/get-a-Module/:_id", getAModule)
router.get("/get-all-Module", allModule)
router.put("/update-a-Module/:_id", updateModule)
router.delete("/delete-a-Module/:_id", deletemodule)

export default router;