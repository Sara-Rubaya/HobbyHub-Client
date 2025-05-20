import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddHobby from './Components/AddHobby.jsx';
import UpdateHobby from './Components/UpdateHobby.jsx';
import Details from './Pages/Details.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AllGroups from './Components/AllGroups/AllGroups.jsx';
const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayout,
   children:[
    {
      index:true,
      Component:Home
    },
    {
      path:'addHobby',
      Component:AddHobby,
    },
    {
      path:'updateHobby',
      Component:UpdateHobby,
    },
    {
      path:'details',
      Component:Details,
    },
    {
      path:'login',
      Component:Login
    },
    {
      path:'register',
      Component:Register
    },
    {
      path:'allGroups',
      Component:AllGroups
    }
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
