import "./App.css";
import React from "react";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router";
import routes from "./routes/routes";
import { Project } from "./pages";


import { Modal } from "./components";
// import Task from "./pages/task";
// import Project from "./pages/project";

function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
