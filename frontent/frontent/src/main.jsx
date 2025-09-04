import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/globals.css";

import { SimulationProvider } from "./context/SimulationContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SimulationProvider>
          <App />
        </SimulationProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
