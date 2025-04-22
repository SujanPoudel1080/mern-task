import React from "react";
import { createBrowserRouter } from "react-router";
import { Project, Task } from "../pages";
import { projectLoader, projectPostAction } from "../actions/Projects.actions";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Project />,
    action: projectPostAction,
    loader: projectLoader,
    // errorElement: <Error />,
    // loader: clientLoader,
    // children: [
    //   {
    //     index: true,
    //     element: <LandingPage />,
    //   },
    //   {
    //     path:"page",
    //     element: <Page />,
    //   },

    //   {
    //     path: "/register",
    //     element: <Register />,
    //     action: registerAction,
    //   },
    // {
    //   path: "/dashboard",
    //   element: <DashboardLayout />,
    //   loader: dashboardLoader,
    // },
    // ],
  },
  {
    path: "/tasks",
    element: <Task />,
  },
]);

export default routes;
