import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "./providers";
import { AppRoutes } from "./pages/AppRoutes";

export const App = () => {
  return (
    <Router>
      <MuiThemeProvider>
        <AppRoutes />
      </MuiThemeProvider>
    </Router>
  );
};
