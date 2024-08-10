import asyncHandler from "express-async-handler";
import moduleModel from "../models/moduleModel.js"

//add a module
const addModule = asyncHandler(async(req,res)=>{
    const {moduleid, name, department, credits,lectureid} = req.body;

    const newModule = moduleModel.build({
        'moduleid': moduleid,
        'name': name,
        'department' : department,
        'credits' : credits,
        'lectureid': lectureid

      
    })

    try {
        await newModule.save();
        res.status(201).json(newModule);
    } catch (error) {
        res.json(error);
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


export {addModule,allModule,getAModule,updateModule,deletemodule}