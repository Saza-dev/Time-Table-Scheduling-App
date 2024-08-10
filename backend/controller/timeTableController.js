import asyncHandler from "express-async-handler";

import TimeTable from "../models/timeTableModel.js"


// add time table
const addTimeTable = asyncHandler(async(req,res)=>{
    const {timeTableId,timeSlot,batchId,lecturerId,moduleId,hallId} = req.body

    const newTimeTable = TimeTable.build({
        'timeTableId':timeTableId,
        'timeSlot':timeSlot,
        'batchId':batchId,
        'lecturerId':lecturerId,
        'moduleId':moduleId,
        'hallId':hallId
    })

    try {
        await newTimeTable.save()
        res.status(201).json(newTimeTable);
    } catch (error) {
        res.json(error);
    }

})


// get all time tables

const getAllTimeTables = asyncHandler(async(req,res)=>{

    const TimeTables = await TimeTable.findAll();
    res.json(TimeTables)

})


// get a time table 
const getATimeTable = asyncHandler(async (req, res) => {

    const timeTableID = req.params._id;
    
    const timeTable = await TimeTable.findOne({
        where: { timeTableID: timeTableID }
    });
    
    res.status(200).json(timeTable);
    });

// update a Time Table
const updateATimeTable = asyncHandler(async(req,res)=>{

    const timeTableID = req.params._id;
    
    const timeTable = await TimeTable.findOne({
        where: { timeTableID: timeTableID }
    });
    
    const updatedFields = {};
    
    if (req.body.timeSlot !== undefined) {
        updatedFields.timeSlot = req.body.timeSlot;
    }
    if (req.body.batchId !== undefined) {
        updatedFields.batchId = req.body.batchId;
    }
    if (req.body.lecturerId !== undefined) {
        updatedFields.lecturerId = req.body.lecturerId;
    }
    if (req.body.moduleId !== undefined) {
        updatedFields.moduleId = req.body.moduleId;
    }
    if (req.body.hallId !== undefined) {
        updatedFields.hallId = req.body.hallId;
    }
    
    await timeTable.set(updatedFields);
    
    await timeTable.save();
    
    res.status(200).json(timeTable);
    
    })


// delete a timeTable
const deleteATimeTable = asyncHandler(async(req,res)=>{

    const timeTableID = req.params._id;
    
    const timeTable = await TimeTable.findOne({
        where: { timeTableID: timeTableID }
    });
    
    await timeTable.destroy();
    
    res.status(204).json({message: 'timeTable deleted'});
})




export {addTimeTable,getAllTimeTables,getATimeTable,updateATimeTable,deleteATimeTable}