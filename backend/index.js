import express from 'express';
import envs from 'dotenv';
import cors from "cors"
import cookieParser from 'cookie-parser';
import lecHallRoute from './routes/lecHallRoutes.js'
import batchRoute from './routes/batchRoutes.js'
import studentRoute from './routes/studentRoutes.js'
import lecturerRoute from './routes/lecturerRoutes.js'
import timeTableRoute from './routes/timeTableRoute.js'
import moduleRoute from './routes/moduleRoutes.js'
import loginRoute from './routes/loginRoutes.js'


import { sequelize , connectToDb } from './config/db.js';

const app = express();
const dotenv = envs.config();
const PORT = process.env.PORT || 4000;


// Internal Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors())


// Routes
app.use("/api/v1/lectureHall", lecHallRoute);
app.use("/api/v1/batch",batchRoute)
app.use("/api/v1/student",studentRoute)
app.use("/api/v1/lecturer", lecturerRoute)
app.use("/api/v1/timeTable", timeTableRoute)
app.use("/api/v1/module", moduleRoute)
app.use("/api/v1/login", loginRoute)



// middlewares
// app.use(notFound);
// app.use(errorHandler);

app.listen(PORT,async ()=>{
    console.log(`Server is running on port ${PORT}`);
    await connectToDb();
});