import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { getLoggedUser } from './App'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from './pages/Home'
import SquareCalculator from './pages/SquareCalculator'
import TrapezoidCalculator from './pages/TrapezoidCalculator'
import TriangleCalculator from './pages/TriangleCalculator'
import Signin from './pages/Signin'
import Login from './pages/Login'
import Logout from './pages/Logout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} id="root" loader={getLoggedUser}>
      <Route index element={<Home />} />
      <Route path="square" element={<SquareCalculator />} />
      <Route path="triangle" element={<TriangleCalculator />} />
      <Route path="trapezoid" element={<TrapezoidCalculator />} />
      <Route path="signin" element={<Signin />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
