import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Aufgaben from "./Aufgaben";
import People from "./People";
import Out from "./Closeout";
import NotFoundPage from "./NotFoundPage";
import { HashRouter as Router } from "react-router-dom";

export const AppRoutes: React.FC = () => (
  <Router basename="/thejobgenerator">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aufgaben" element={<Aufgaben />} />
      <Route path="/people" element={<People />} />
      <Route path="/ausschließen" element={<Out />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
