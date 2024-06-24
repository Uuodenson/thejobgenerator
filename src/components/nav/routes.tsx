import React from "react";
import { HashRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";

export const AppRoutes: React.FC = () => (
  <Router>
    <HomePage></HomePage>
  </Router>
);

export default AppRoutes;
