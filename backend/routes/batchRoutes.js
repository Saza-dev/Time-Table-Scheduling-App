import express from 'express';
import { addBatch, deleteABatch, getABatch, getAllBatches, updateABatch } from '../controller/batchController.js';



const router = express.Router()

router.post("/add-batch", addBatch)
router.get("/get-all-batches",getAllBatches)
router.get("/get-a-batch/:_id",getABatch)
router.put("/update-a-batch/:_id",updateABatch)
router.delete("/delete-a-batch/:_id",deleteABatch)


export default router;