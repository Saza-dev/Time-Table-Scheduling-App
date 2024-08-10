import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './pages/SignIn.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'

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
        children:[]
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
