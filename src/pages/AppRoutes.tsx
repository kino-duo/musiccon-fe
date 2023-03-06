import { Route, Routes as ReactRoutes } from "react-router-dom";

// Pages
import { Main } from "./Main";

// Global Component
import { MainHeader } from "../components/organisms/MainHeader";
import { MainContainer } from "../components/containers/MainContainer";

export const AppRoutes = () => {
  return (
    <>
      <MainHeader />
      <MainContainer>
        <ReactRoutes>
          <Route path="/" element={<Main />} />
        </ReactRoutes>
      </MainContainer>
    </>
  );
};
