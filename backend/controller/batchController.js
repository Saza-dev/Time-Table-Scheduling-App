import asyncHandler from "express-async-handler"
import Batch from "../models/batchModel.js"
import Student from "../models/studentModel.js";

// add a Batch
const addBatch = asyncHandler(async(req,res)=>{

    const {batchID, year, numStudents,  dep} = req.body;

    const newBatch = Batch.build({
        'batchId':batchID,
        'year': year,
        'noOfStudents':  numStudents,
        'department': dep
    })

    try {
        await newBatch.save();
        res.status(200).json({
            success: true,
            message: "Batch added successfully",
            data: newBatch,
          });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to add Batch Details",
            error: error.message,
          });
    }
})

// get all batches
const getAllBatches = asyncHandler(async(req,res)=>{

        const batches = await Batch.findAll();
        res.json(batches)
})

// get a batch
const getABatch = asyncHandler(async (req, res) => {
    const batchId = req.params._id;

    const batch = await Batch.findOne({
        where: { batchId: batchId }
    });

    const students = await Student.findAll({
        where:{batchId:batchId}
    })

    const data = {
        batch: batch,
        students:students
    }

    res.status(200).json(data);
});

// update a Batch
const updateABatch = asyncHandler(async(req,res)=>{

    const batchId= req.params._id;   
    
    const batch = await Batch.findOne({
        where: {
            batchId: batchId
        }
    })

    const updatedFields = {};

    if (req.body.year !== undefined) {
        updatedFields.year = req.body.year;
    }
    if (req.body.noOfStudents !== undefined) {
        updatedFields.noOfStudents = req.body.noOfStudents;
    }
    if (req.body.department !== undefined) {
        updatedFields.department = req.body.department;
    }

    await batch.set(updatedFields);

    await batch.save();
    
    res.status(200).json(batch);

})


// delete a batch
const deleteABatch = asyncHandler(async(req,res)=>{

    const batchId = req.params._id; 

    const batch = await Batch.findOne({
        where: {
            batchId: batchId
        }
    })

    await batch.destroy();

    res.status(204).json({message: 'batch deleted'});
})

// get only batch IDs
const getAllBatchIDs = asyncHandler(async(req,res)=>{
    const batches = await Batch.findAll();
    const batchIds = batches.map(batch => batch.dataValues.batchId);
    res.json(batchIds)
})


export {addBatch,getAllBatches,getABatch,updateABatch,deleteABatch,getAllBatchIDs }