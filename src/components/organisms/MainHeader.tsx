import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Menu } from "../molecules";
import { appColor } from "../constants/appColor";
import { breakPoints } from "../constants/breakPoints";
import { useNavigate } from "react-router-dom";
import { Empty } from "../atoms";

export const MainHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: appColor.black,
          opacity: 0.9,
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            // [Temp] 재사용 많이 될 것 같음
            display: "flex",
            justifyContent: "space-between",
            color: appColor.white,
            width: "100%",
            maxWidth: breakPoints.lg,
          }}
        >
          <Button color="inherit" onClick={() => navigate("/")}>
            Musiccon
          </Button>

          <Menu />
        </Toolbar>
      </div>
      <Empty height="3rem" />
    </>
  );
};
