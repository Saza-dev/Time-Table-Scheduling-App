import asyncHandler from "express-async-handler";
import Lecturer from "../models/lecturerModel.js";
import Student from "../models/studentModel.js";

const getAUser = asyncHandler(async (req, res) => {
  const { user, pass } = req.query; // Extract user and pass from the query parameters
  
  let userType = "";

  if (!user || !pass) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  try {
    if (user == "admin" && pass == "admin") {
      userType = "admin"
      return res.status(200).json({
        message: "User found",
        user: "admin",
        type : userType
      })

    } else {

    
    // First, try to find the user in the lecturer model
    let foundUser = await Lecturer.findOne({
      where: {
        lecid: user,
      },
    });
    userType = "teacher"

    if (!foundUser) {
      // If the user is not found in the lecturer model, search in the student model
      foundUser = await Student.findOne({
        where: { studentId: user },
      });
      userType = "student"
    }

    // If user is found in either model, return the user
    if (foundUser) {
      return res.status(200).json({
        message: "User found",
        user: foundUser,
        type : userType
      });
    }
  }

    // If no user is found in both models, return a not found message
    return res.status(404).json({ message: "User not found" });
  } catch (error) {
    // Handle any errors that occur during the query process
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

export { getAUser };
