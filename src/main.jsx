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
import AuthProvider from './Context/AuthProvider.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AllGroups from './Components/AllGroups/AllGroups.jsx';
import GroupDetails from './Components/GroupDetails/GroupDetails.jsx';
import CreateGroup from './Components/Create Group/CreateGroup.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import MyGroups from './Components/MyGroups/MyGroups.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import UpdateGroup from './Components/UpdateGroup.jsx';
const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayout,
   children:[
    {
      index:true,
      loader: () => fetch('http://localhost:3000/groups'),
      Component:Home
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
    },
    {
       path:'/group/:id',
       element:<PrivateRoute>
        <GroupDetails></GroupDetails>
       </PrivateRoute>
    },
    {
      path:'createGroup',
     Component: CreateGroup
    },
   {
    path:'myGroups',
    element:<PrivateRoute>
      <MyGroups></MyGroups>
    </PrivateRoute>
   },
   {
    path:'aboutUs',
    Component: AboutUs
   },
   {
    path:'updateGroup',
    element: <PrivateRoute>
      <UpdateGroup></UpdateGroup>
    </PrivateRoute>
   },
   {
    path:'groupDetails',
    Component:GroupDetails
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
