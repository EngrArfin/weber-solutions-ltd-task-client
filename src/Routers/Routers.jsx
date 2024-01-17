import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";

import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import AdminLogin from '../pages/Home/Server/AdminLogin/AdminLogin';
import UserLogin from '../pages/Home/Client/UserLogin/UserLogin';
import UploadPage from '../pages/Home/Client/UploadPage/UploadPage';
import PhotoAccept from '../pages/Home/Client/PhotoAccept/PhotoAccept';
import CreateUser from '../pages/Home/Server/CreateUser/CreateUser';
import UserList from '../pages/Home/Server/UserList/UserList';
import PhotoNotAccepted from '../pages/Home/Client/PhotoNotAccepted/PhotoNotAccepted';

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
        element: <PhotoNotAccepted></PhotoNotAccepted>,
      },
      
      {
        path: '/adminlogin',
        element: <AdminLogin></AdminLogin>,
      },
      {
        path: '/createuser',
        element: <CreateUser></CreateUser>,
      },
      {
        path: '/userlist',
        element: <UserList></UserList>,
      }

    ]
  },

]);
