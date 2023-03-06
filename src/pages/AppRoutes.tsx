import { Route, Routes as ReactRoutes } from "react-router-dom";

// Pages
import { Main } from "./Main";

// Global Component
import { MainHeader } from "../components/organisms/MainHeader";

export const AppRoutes = () => {
  return (
    <>
      <MainHeader />
      <ReactRoutes>
        <Route path="/" element={<Main />} />
      </ReactRoutes>
    </>
  );
};
