import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Router from './components/Router/Router';
import Donates from './components/Home/Donates/Donates';
import Statistics from './components/Home/Statistics/Statistics';
import Details from './components/Home/Details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {path:'/',
      element:<Router></Router>,
      loader:()=>fetch('../data.json'),
     },
      
      {path:'/donates',
      element: <Donates></Donates>},
      {path:'/details/:id',
      element: <Details></Details>,
      loader:()=>fetch('../data.json'),
    },
      
      {path:'/statistics',
      element: <Statistics></Statistics>},
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
