import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import AdminLogin from '../pages/Home/Server/AdminLogin/AdminLogin';
import UserLogin from '../pages/Home/Client/UserLogin/UserLogin';

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
            path: '/adminlogin',
            element: <AdminLogin></AdminLogin>,
        }
      ]
    },
    
  ]);
