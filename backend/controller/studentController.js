import asyncHandler from "express-async-handler"
import Student from '../models/studentModel.js'


// add a Student
const addStudent = asyncHandler(async(req,res)=>{

    const { stuID, stuName, dep,  contact, batchID} = req.body;

    console.log(req.body)

    const newStudent = Student.build({
        'studentId':stuID,
        'name':stuName,
        'department': dep,
        'contactDetails':  contact,
        'batchId':batchID
    })

    try {
        await newStudent.save();
        res.status(200).json({
            success: true,
            message: "Student added successfully",
            data: newStudent,
          });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to add Student Details",
            error: error.message,
          });
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

const studentId = req.params.id; 

if (!studentId) {
    return res.status(400).json({ message: "Student ID is required" });
  }

  try {
    const student = await Student.findOne({
      where: {
        studentId: studentId,
      },
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    await student.destroy();
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }

})


// get students sorting dep and batch
const getSortedStudents = asyncHandler(async(req,res)=>{
    const { dep, batchID } = req.query.data
    
    const students = await Student.findAll({
        where: {
            batchId: batchID,
            department:dep
        }
    })
    res.json(students)
})


export {addStudent,getAllStudents,getAStudent,updateAStudent,deleteAStudent,getSortedStudents};