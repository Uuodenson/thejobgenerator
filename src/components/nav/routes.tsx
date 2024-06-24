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
      <Route path="/" element={<HomePage />} />
      <Route path="/aufgaben" element={<Aufgaben />} />
      <Route path="/people" element={<People />} />
      <Route path="/ausschließen" element={<Out />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
