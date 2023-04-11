import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from './Components/Portfolio/';
import Calculator from './Components/Calculator/';
import Rick from './Components/Rick/';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Portfolio",
    element: <Portfolio />,
  },
  {
    path: "/Calculator",
    element: <Calculator />, 
  },
  {
    path: "/Rick&morty",
    element: <Rick />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
