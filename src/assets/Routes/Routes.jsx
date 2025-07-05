import React from 'react';

import {
  createBrowserRouter,
} from "react-router";

import Root from '../../pages/Roots/Root';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Home from '../../pages/Home/Home';


export const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello World asdfasd</div>,
    //element: <Root/>, 
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,

    children:[
        {
            index:true,
            path:"/",
            Component:Home
        }
    ]
    
  },
]);