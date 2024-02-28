import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Bags from './routes/bags.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './routes/home.jsx';
import {Provider} from 'react-redux';
import myntraStore from './store/index.js';
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
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);