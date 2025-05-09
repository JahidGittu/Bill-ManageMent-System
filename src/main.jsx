// Main.jsx or index.jsx
import './App.css'
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router'

import Bill from './Pages/Bills'
import Profile from './Pages/Profile'
import Route from './Router/Route'
import AuthLayouts from './Layouts/AuthLayouts'
import Login from './Pages/Login'
import Register from './Pages/Register'
import AuthProvider from './Provider/AuthProvider'
import HomeLayouts from './Layouts/HomeLayouts'
import PrivateRoutes from './Provider/PrivateRoutes'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "",
        element: <HomeLayouts />
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayouts />,
    children: [
      {
        path: "login", // ✅ শুধুমাত্র path: "login"
        element: <Login />
      },
      {
        path: "register", // ✅ শুধুমাত্র path: "register"
        element: <Register />
      }
    ]
  },
  {
    path: "/bills",
    element: (
      <PrivateRoutes>
        <Bill />
      </PrivateRoutes>
    ),
    loader: () => fetch('/Bills.json')
  },
  {
    path: "/profile",
    element: (
      <PrivateRoutes>
        <Profile />
      </PrivateRoutes>
    )
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
