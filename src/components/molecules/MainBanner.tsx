import React from "react";
import testDog1 from "../../assets/test/testDog1.png";
import Typography from "@mui/material/Typography";

// [Todo] MainBanner 구현하기
export const MainBanner = () => {
  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <img src={testDog1} style={{ height: "100%" }} />
      <Typography sx={{ fontSize: 40 }}> &nbsp; 배너 부분입니다.</Typography>
    </div>
  );
};
