import asyncHandler from "express-async-handler";
import lecturerModel from "../models/lecturerModel.js"

// add lecturer

const addLecturer = asyncHandler(async(req,res)=>{

    const {lecid, name, department, contactDetails} = req.body;

    const newLecturer = lecturerModel.build({
        'lecid': lecid,
        'name': name,
        'department' : department,
        'contactDetails' : contactDetails

      
    })

    try {
        await newLecturer.save();
        res.status(201).json(newLecturer);
    } catch (error) {
        res.json(error);
    }
})

// get a lecturer

const getALecturer = asyncHandler(async(req,res)=>{

    const lecturerId = req.params._id;

    const lecturer = await lecturerModel.findOne({
        where: {
            lecid: lecturerId
        }
    })

    res.status(200).json(lecturer);
})

//get all lecturers

const getAllLecturers = asyncHandler(async(req,res)=>{

    const Lecturers = await lecturerModel.findAll()
    res.json(Lecturers);
})

// update a lecturer
const updateALecturer = asyncHandler(async(req,res)=>{

    const lecturerId = req.params._id;   
    
    const lecturer = await lecturerModel.findOne({
        where: {
            lecid: lecturerId
        }
    })
    

    
    
    const updatedFields = {};
    if (req.body.name !== undefined) {
        updatedFields.name = req.body.name;
    }
    if (req.body.department !== undefined) {
        updatedFields.department = req.body.department;
    }
    if (req.body.contactDetails !== undefined) {
        updatedFields.contactDetails = req.body.contactDetails;
    }

   

    await lecturer.set(updatedFields);

    await lecturer.save();
    
    res.status(200).json(lecturer);

})

// delete a lecturer
const deletelecturer = asyncHandler(async(req,res)=>{

    const lecturerId = req.params._id; 

    const lecturer = await lecturerModel.findOne({
        where: {
            lecid: lecturerId
        }
    })

    await lecturer.destroy();

    res.status(204).json({message: 'lecturer deleted'});
})



export {addLecturer,getALecturer,updateALecturer,deletelecturer,getAllLecturers}