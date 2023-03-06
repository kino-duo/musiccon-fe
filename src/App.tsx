import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "./hocs/MuiThemeProvider";
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
