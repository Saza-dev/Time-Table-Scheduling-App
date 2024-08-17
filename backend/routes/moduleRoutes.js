import express from 'express';
import { addModule,allModule,getAModule,updateModule,deletemodule, lecIDs_Batch_IDs} from '../controller/moduleController.js';


const router = express.Router()


router.post("/add-Module", addModule)
router.get("/get-a-Module/:_id", getAModule)
router.get("/get-all-Module", allModule)
router.put("/update-a-Module/:_id", updateModule)
router.delete("/delete-a-Module/:_id", deletemodule)

router.get("/get-lec-batch-IDs",lecIDs_Batch_IDs)

export default router;