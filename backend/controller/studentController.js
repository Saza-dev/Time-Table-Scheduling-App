import asyncHandler from "express-async-handler"
import Student from '../models/studentModel.js'


// add a Student
const addStudent = asyncHandler(async(req,res)=>{

    const {studentId, name, department,  contactDetails,batchId} = req.body;

    const newStudent = Student.build({
        'studentId':studentId,
        'name': name,
        'department': department,
        'contactDetails':  contactDetails,
        'batchId':batchId
    })

    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.json(error);
    }
})

// get all students
const getAllStudents = asyncHandler(async(req,res)=>{

    const Students = await Student.findAll();
    res.json(Students)
})

// get a Student
const getAStudent = asyncHandler(async (req, res) => {
const studentId = req.params._id;

const student = await Student.findOne({
    where: { studentId: studentId }
});

res.status(200).json(student);
});

// update a Student
const updateAStudent = asyncHandler(async(req,res)=>{

const studentId= req.params._id;   

const student = await Student.findOne({
    where: {
        studentId: studentId
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
if (req.body.batchId !== undefined) {
    updatedFields.batchId = req.body.batchId;
}

await student.set(updatedFields);

await student.save();

res.status(200).json(student);

})


// delete a student
const deleteAStudent = asyncHandler(async(req,res)=>{

const studentId = req.params._id; 

const student = await Student.findOne({
    where: {
        studentId: studentId
    }
})

await student.destroy();

res.status(204).json({message: 'student deleted'});
})


export {addStudent,getAllStudents,getAStudent,updateAStudent,deleteAStudent};