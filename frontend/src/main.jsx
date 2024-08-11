import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './pages/SignIn.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import Dashboard from './components/adminCoponents/Dashboard.jsx'
import Teachers from './components/adminCoponents/Teachers.jsx'
import Students from './components/adminCoponents/Students.jsx'
import TimeTables from './components/adminCoponents/TimeTables.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<SignIn/>
      },
      {
        path:"/admin-dashboard",
        element:<AdminDashboard/>,
        children:[
          {
            path:"/admin-dashboard",
            element:<Dashboard/>
          },
          {
            path:"/admin-dashboard/teachers",
            element:<Teachers/>
          },
          {
            path:"/admin-dashboard/students",
            element:<Students/>
          },
          {
            path:"/admin-dashboard/time-tables",
            element:<TimeTables/>
          },
        ]
      },
      {
        path:"/student-dashboard",
        element:<App/>,
        children:[]
      },
      {
        path:"/lecturer-dashboard",
        element:<App/>,
        children:[]
      },
    ]
  },


]) 




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
