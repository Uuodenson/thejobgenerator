import { StrictMode } from "react";
import "./App.css";
import AppRoutes from "./components/nav/routes";

function App() {
  return (
    <>
      <div className="bg-slate-100">
        <StrictMode>
          <AppRoutes></AppRoutes>
        </StrictMode>
      </div>
    </>
  );
}

export default App;
