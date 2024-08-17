import asyncHandler from "express-async-handler"
import LectureHall from "../models/lecHallModel.js"

// add a lec hall
const addLecHall = asyncHandler(async(req,res)=>{

    const {hallID, hallName, capacity, facilities,} = req.body;

    const newLecHall = LectureHall.build({
        'id': hallID,
        'name': hallName,
        'seating_capacity': capacity,
        'facilities': facilities,
        'Availability': true
    })

    try {
        await newLecHall.save();
        res.status(200).json({
            success: true,
            message: "Batch added successfully",
            data: newLecHall,
          });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to add Lecture hall",
            error: error.message,
          })
    }
})

// get all lec halls
const getAllLecHalls = asyncHandler(async(req,res)=>{

        const lecHalls = await LectureHall.findAll();
        console.log(lecHalls)
        res.json(lecHalls)
})

// get a lecture hall
const getALecHall = asyncHandler(async(req,res)=>{

    const lecHallId = req.params._id;

    const lecHall = await LectureHall.findOne({
        where: {
            id: lecHallId
        }
    })

    res.status(200).json(lecHall);
})


// update a lec hall
const updateALecHall = asyncHandler(async(req,res)=>{

    const lecHallId = req.params._id;   
    
    const lecHall = await LectureHall.findOne({
        where: {
            id: lecHallId
        }
    })

    const updatedFields = {};
    if (req.body.name !== undefined) {
        updatedFields.name = req.body.name;
    }
    if (req.body.seating_capacity !== undefined) {
        updatedFields.seating_capacity = req.body.seating_capacity;
    }
    if (req.body.facilities !== undefined) {
        updatedFields.facilities = req.body.facilities;
    }
    if (req.body.Availability !== undefined) {
        updatedFields.Availability = req.body.Availability;
    }

    await lecHall.set(updatedFields);

    await lecHall.save();
    
    res.status(200).json(lecHall);

})


// delete a lec hall
const deleteALecHall = asyncHandler(async(req,res)=>{

    const lecHallId = req.params._id; 

    const lecHall = await LectureHall.findOne({
        where: {
            id: lecHallId
        }
    })

    await lecHall.destroy();

    res.status(204).json({message: 'lecture hall deleted'});
})




export {addLecHall,getAllLecHalls,getALecHall,updateALecHall,deleteALecHall }