import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './MainLayout/Layout';
import Home from './Pages/Home';
import Dashborad from './Pages/Dashborad';
import Statistics from './Pages/Statistics';
import Testimonials from './Pages/Testimonials';
import NotFound from './Pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }, 
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      }, 
      {
        path: "/dashboard", 
        element: <Dashborad></Dashborad>
      },
      {
        path: "/testimonials", 
        element: <Testimonials></Testimonials>
      },
    ]
  },
  {
    path:"*", 
    element: <NotFound></NotFound>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
