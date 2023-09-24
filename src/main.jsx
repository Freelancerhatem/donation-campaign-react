import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {path:'/donation',
      element: 'this is donation'},
      {path:'/details',
      element: 'this is details'},
      {path:'/statistics',
      element: 'this is statistics'},
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
