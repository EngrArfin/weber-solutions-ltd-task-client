import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";

import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import AdminLogin from '../pages/Home/Server/AdminLogin/AdminLogin';
import UserLogin from '../pages/Home/Client/UserLogin/UserLogin';
import UploadPage from '../pages/Home/Client/UploadPage/UploadPage';
import PhotoNotAccept from '../pages/Home/Client/Client/PhotoNotAccept/PhotoNotAccept';
import PhotoAccept from '../pages/Home/Client/PhotoAccept/PhotoAccept';
import CreateUser from '../pages/Home/Server/CreateUser/CreateUser';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/userlogin',
        element: <UserLogin></UserLogin>,
      },
      {
        path: '/upload',
        element: <UploadPage></UploadPage>,
      },
      {
        path: '/photoaccept',
        element: <PhotoAccept></PhotoAccept>,
      },
      {
        path: '/photonotaccept',
        element: <PhotoNotAccept></PhotoNotAccept>,
      },
      
      {
        path: '/adminlogin',
        element: <AdminLogin></AdminLogin>,
      },
      {
        path: '/createuser',
        element: <CreateUser></CreateUser>,
      }

    ]
  },

]);
