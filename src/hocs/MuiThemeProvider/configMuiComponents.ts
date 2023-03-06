import { Components } from "@mui/material";
import { appColor } from "../../components/constants/appColor";

export const configMuiComponents: Components = {
  // default css setting
  MuiCssBaseline: {
    styleOverrides: {
      "html, body": { height: "100%", width: "100%", backgroundColor: appColor.backGround },
    },
  },
};
