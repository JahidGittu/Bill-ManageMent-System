
// index.jsx বা main.jsx
import './App.css'
import React from 'react'
import { StrictMode } from 'react'
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

// Example Components for Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children: [
      {
        path: '',
        element: <HomeLayouts></HomeLayouts>
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/bills",
    element: (
      <PrivateRoutes>
        <Bill></Bill>
      </PrivateRoutes>
    ),
    loader: () => fetch('/Bills.json')
  },
  {
    path: "/profile",
    element: (
      <PrivateRoutes>
        <Profile></Profile>
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
