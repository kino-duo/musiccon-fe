import { Route, Routes as ReactRoutes } from "react-router-dom";

// Pages
import { Main } from "./Main";

export const AppRoutes = () => {
  return (
    <>
      <ReactRoutes>
        <Route path="/" element={<Main />} />
      </ReactRoutes>
    </>
  );
};
