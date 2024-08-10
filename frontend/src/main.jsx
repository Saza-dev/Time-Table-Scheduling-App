import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './components/SignIn.jsx'
import Register from './components/Register.jsx'


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
        path:"/register",
        element:<Register/>
      },
    ]
  },
  {
    path:"/admin-dashboard",
    element:<App/>,
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
]) 




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
