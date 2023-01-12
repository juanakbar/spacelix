import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Error/404.jsx';
import Home from './Pages/Home.jsx';
import Networking from './Pages/Tutorial/Linux/Networking/Index.jsx';
import Tutorial from './Pages/Tutorial/Tutorial.jsx';
import ComingSoon from './Error/ComingSoon.jsx';
import Linux from './Pages/Tutorial/Linux/Index.jsx';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/tutorial/linux/networking",
        element: <Networking />,
    },
    {
        path: "/tutorial",
        element: <Tutorial />,
    },
    {
        path: "/tutorial/webdev",
        element: <ComingSoon />,
    },
    {
        path: "/tutorial/linux/",
        element: <Linux />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
