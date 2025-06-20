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

import GroupDetails from './Components/GroupDetails/GroupDetails.jsx';
import CreateGroup from './Components/Create Group/CreateGroup.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import MyGroups from './Components/MyGroups/MyGroups.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import UpdateGroup from './Components/UpdateGroup.jsx';
import AllGroups from './Components/AllGroups.jsx';
import Error from './Components/error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayout,
   children:[
    {
      index:true,
      loader: () => fetch('https://hobby-hub-server-rho.vercel.app/groups'),
      Component:Home
    },
    {
      path:'/*',
      Component: Error
    },
    {
      path: '/all-groups',
      loader:() => fetch('https://hobby-hub-server-rho.vercel.app/groups'),
      Component: AllGroups
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
       path:'/group/:id',
       loader: ({params}) => fetch(`https://hobby-hub-server-rho.vercel.app/groups/${params.id}`),
       element:<PrivateRoute>
        <GroupDetails></GroupDetails>
       </PrivateRoute>
    },
    {
      path:'createGroup',
     Component: CreateGroup
    },
   {
  path: 'myGroups',
  element: <PrivateRoute><MyGroups /></PrivateRoute>,
  
},
   {
    path:'aboutUs',
    Component: AboutUs
   },
   {
    path:'updateGroup/:id',
    loader: ({params}) => fetch(`https://hobby-hub-server-rho.vercel.app/groups/${params.id}`),
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
