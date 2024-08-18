import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from "./pages/SignIn.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Dashboard from "./components/adminComponents/Dashboard.jsx";
import Teachers from "./components/adminComponents/Teachers.jsx";
import Students from "./components/adminComponents/Students.jsx";
import TimeTables from "./components/adminComponents/TimeTables.jsx";
import AdminDashboardSubContainer from "./components/adminComponents/AdminDashboardSubContainer.jsx";
import AddTeacher from "./Forms/Admin/AddTeacher.jsx";
import AddStudent from "./Forms/Admin/AddStudent.jsx";
import AddModule from "./Forms/Admin/AddModule.jsx";
import AddBatch from "./Forms/Admin/AddBatch.jsx";
import AddLectureHall from "./Forms/Admin/AddLectureHall.jsx";
import AddCustomTime from "./Forms/Admin/AddCustomTime.jsx";
import Profile from "./components/Profile.jsx";
import LecDashboard from "./components/lecturerComponents/LecDashboard.jsx"
import LecturerDashboard from "./pages/LecturerDashboard.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import StuDashboard from "./components/studentComponents/StuDashboard.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "/admin",
        element: <AdminDashboard />,
        children: [
          {
            path: "/admin/admin-dashboard",
            element: <Dashboard />,
            children: [
              {
                path: "/admin/admin-dashboard/dashboard",
                element: <AdminDashboardSubContainer />,
              },
              {
                path: "/admin/admin-dashboard/add-teacher",
                element: <AddTeacher />,
              },
              {
                path: "/admin/admin-dashboard/add-student",
                element: <AddStudent />,
              },
              {
                path: "/admin/admin-dashboard/add-module",
                element: <AddModule />,
              },
              {
                path: "/admin/admin-dashboard/add-batch",
                element: <AddBatch />,
              },
              {
                path: "/admin/admin-dashboard/add-lec-hall",
                element: <AddLectureHall />,
              },
              {
                path: "/admin/admin-dashboard/add-custom-timeslot",
                element: <AddCustomTime />,
              },
            ],
          },
          {
            path: "/admin/teachers",
            element: <Teachers />,
          },
          {
            path: "/admin/students",
            element: <Students />,
          },
          {
            path: "/admin/time-tables",
            element: <TimeTables />,
          },
          {
            path: "/admin/profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/student",
        element: <App />,
        children: [
          {path:"/student",
            element: <StudentDashboard/>,
            children: [
              {path:"/student/profile",
                element: <Profile/>
              },
              {path:"/student/dashboard",
                element: <StuDashboard/>
              }
            ]},

        ],
      },
      {
        path: "/lecturer",
        element: <App />,
        children: [
          {path:"/lecturer",
            element: <LecturerDashboard/>,
            children: [
              {path:"/lecturer/profile",
                element: <Profile/>
              },
              {path:"/lecturer/dashboard",
                element: <LecDashboard/>
              }
            ]},

        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer/>
  </React.StrictMode>
);
