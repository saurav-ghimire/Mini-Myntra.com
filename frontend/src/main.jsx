import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Bags from './routes/bags.jsx'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './routes/home.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App />, children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/bags",
      element: <Bags />,
    }
  ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);