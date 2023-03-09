import { Route, Routes as ReactRoutes } from "react-router-dom";

// Pages
import { Main } from "./Main";
import { SignIn } from "./sign/SignIn";

export const AppRoutes = () => {
  return (
    <>
      <ReactRoutes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
      </ReactRoutes>
    </>
  );
};
