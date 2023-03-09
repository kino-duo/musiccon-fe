import { TypographyOptions } from "@mui/material/styles/createTypography";
import { appColor } from "./appColor";

export const configTypography: TypographyOptions = {
  fontFamily: ["SpoqaHanSansNeo-Regular", "sans-serif"].join(","),
  h1: { fontSize: 80, color: appColor.primary, fontFamily: "Jua" },
  h2: { fontSize: 26, color: appColor.primary, fontFamily: "Jua" },
  body1: {
    fontSize: 18,
    letterSpacing: "1px",
  },
  body2: { fontSize: 18, fontWeight: 500 },
  button: { fontSize: 18, letterSpacing: "1px", color: appColor.white },
};
