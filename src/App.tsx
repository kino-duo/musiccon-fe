import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "./hocs/MuiThemeProvider";
import { AppRoutes } from "./pages/AppRoutes";

// Global Component
import { MainHeader } from "./components/organisms/MainHeader";
import { MainContainer } from "./components/containers/MainContainer";

export const App = () => {
  return (
    <>
      <Router>
        <MainHeader />
        <MuiThemeProvider>
          <MainContainer>
            <AppRoutes />
          </MainContainer>
        </MuiThemeProvider>
      </Router>
    </>
  );
};
