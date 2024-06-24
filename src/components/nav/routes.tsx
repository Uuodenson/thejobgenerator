import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import Aufgaben from "./Aufgaben";
import People from "./People";
import Out from "./Closeout";
import NotFoundPage from "./NotFoundPage";

export const AppRoutes: React.FC = () => {
  return (
    <>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/aufgaben" element={<Aufgaben />} />
      <Route path="/people" element={<People />} />
      <Route path="/out" element={<Out />} />
      <Route path="*" element={<NotFoundPage />} />
    </>
  );
};

export default AppRoutes;
