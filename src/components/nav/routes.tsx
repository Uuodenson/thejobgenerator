import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Aufgaben from "./Aufgaben";
import People from "./People";
import Out from "./Closeout";
import NotFoundPage from "./NotFoundPage";

export const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <HomePage></HomePage>
    </Routes>
  </Router>
);

export default AppRoutes;
