
import React from 'react';

import {
  createBrowserRouter,
} from "react-router";

import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Root from '../pages/Roots/Root';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: ()=>fetch('booksData.json'),
        path: "/",
        Component: Home,
      },
    ],
  },
]);



// export const router = createBrowserRouter([
//   {
//     path: "/",
//     // element: <div>Hello World asdfasd</div>,
//     //element: <Root/>, 
//     Component:Root,
//     errorElement:<ErrorPage></ErrorPage>,

//     children:[
//         {
//             index:true,
//             path:"/",
//             Component:Home
//         }
//     ]
    
//   },
// ]);