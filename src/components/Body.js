import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/Home",
      element: <Browse />,
    },
    {
      path: "/",
      element: <Login />,
    },
  ]);
  
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default Body;
