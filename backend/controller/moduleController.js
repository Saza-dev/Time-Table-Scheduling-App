import asyncHandler from "express-async-handler";
import moduleModel from "../models/moduleModel.js"
import batch from "../models/batchModel.js";
import lecturer from "../models/lecturerModel.js"

//add a module
const addModule = asyncHandler(async(req,res)=>{
    const {moduleID,  moduleName, dep, credits,lecID, batchID} = req.body;

    const newModule = moduleModel.build({
        'moduleid': moduleID,
        'name':  moduleName,
        'department' : dep,
        'credits' : credits,
        'lectureid': lecID,
        'batchid': batchID
    })

    try {
        await newModule.save();
        res.status(200).json({
            success: true,
            message: "Module added successfully",
            data: newModule,
          });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Failed to add Module Details",
            error: error.message,
          });
    }
})

//get all module

const allModule = asyncHandler(async(req,res)=>{
    const Modules = await moduleModel.findAll()
    res.json(Modules);
})

//get a module

const getAModule = asyncHandler(async(req,res)=>{

    const moduleId = req.params._id;

    const module = await moduleModel.findOne({
        where: {
            moduleid: moduleId
        }
    })

    res.status(200).json(module);
})

//update module

const updateModule = asyncHandler(async(req,res)=>{

    const moduleId = req.params._id;   
    
    const module = await moduleModel.findOne({
        where: {
            moduleid: moduleId
        }
    })
    

    
    
    const updatedFields = {};
    if (req.body.name !== undefined) {
        updatedFields.name = req.body.name;
    }
    if (req.body.department !== undefined) {
        updatedFields.department = req.body.department;
    }
    if (req.body.credits !== undefined) {
        updatedFields.credits = req.body.credits;
    }
    if (req.body.lectureid !== undefined) {
        updatedFields.lectureid = req.body.lectureid;
    }
    if (req.body.batchid !== undefined) {
        updatedFields.batchid = req.body.batchid;
    }

   

    await module.set(updatedFields);

    await module.save();
    
    res.status(200).json(module);

})

// delete a module

const deletemodule = asyncHandler(async(req,res)=>{

    const moduleId = req.params._id; 

    const module = await moduleModel.findOne({
        where: {
            moduleid: moduleId
        }
    })

    await module.destroy();

    res.status(204).json({message: 'Module deleted'});
})


// data from other tables
const lecIDs_Batch_IDs = asyncHandler(async(req,res)=>{


    const lecturers = await lecturer.findAll();
    const batches = await batch.findAll();
    const data = {
        lecturers: lecturers.map(lecturer => lecturer.dataValues.lecid),
        batches: batches.map(batch => batch.dataValues.batchId)
    }

    res.json(data);
})


export {addModule,allModule,getAModule,updateModule,deletemodule, lecIDs_Batch_IDs}