import React from "react";
import SidebarDrawer from "./components/SidebarDrawer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import User from "./components/User";
import Blogs from "./components/Blogs";
import BlogsId from "./components/BlogsId";
import Home from "./components/Home";
import Login from "./components/Login";
import Notes from "./components/Notes"; // ✅ Added Notes component
import Pictures from "./components/Pictures"; // ✅ Added Pictures component
import PrivateRoute from "./components/PrivateRoute";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";

// Layout shown only after login
const PrivateLayout = () => {
  return (
    <>
      <Navbar />
      <SidebarDrawer />
      <Outlet />
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />, // ✅ App starts with the Login page
  },
  {
    path: "/",
    element: <PrivateLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
      {
        path: "user",
        element: (
          <PrivateRoute>
            <User />
          </PrivateRoute>
        ),
      },
      {
        path: "blogs",
        element: (
          <PrivateRoute>
            <Blogs />
          </PrivateRoute>
        ),
      },
      {
        path: "blogs/:id",
        element: (
          <PrivateRoute>
            <BlogsId />
          </PrivateRoute>
        ),
      },
      {
        path: "notes",
        element: (
          <PrivateRoute>
            <Notes />
          </PrivateRoute>
        ),
      },
      {
        path: "pictures",
        element: (
          <PrivateRoute>
            <Pictures />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />, // ✅ Redirect unknown paths to login
  },
]);
