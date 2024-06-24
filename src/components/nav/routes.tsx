import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Aufgaben from "./Aufgaben";
import People from "./People";
import Out from "./Closeout";
import NotFoundPage from "./NotFoundPage";

const router = createHashRouter([
  {
    path: "/thejobgenerator",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "aufgaben",
    element: <Aufgaben />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "people",
    element: <People />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "ausschließen",
    element: <Out />,
    errorElement: <NotFoundPage />,
  },
]);

export const AppRoutes: React.FC = () => <RouterProvider router={router} />;

export default AppRoutes;
