import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Menu } from "../molecules";
import { appColor } from "../constants/appColor";
import { breakPoints } from "../constants/breakPoints";

export const MainHeader = () => {
  return (
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
        <Typography>Musiccon</Typography>

        <Menu />
      </Toolbar>
    </div>
  );
};
