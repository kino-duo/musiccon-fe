import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { ButtonSmall } from "../atoms/ButtonSmall";

// [...] 페이지 추가될 때마다 매 번 일일이 추가해주어야 함...
export const Menu = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="row" spacing={0.5}>
      <ButtonSmall>프로듀서 컨택</ButtonSmall>
      <ButtonSmall>TEST 1</ButtonSmall>
      <ButtonSmall>TEST 2</ButtonSmall>
      <ButtonSmall onClick={() => navigate("/sign-in")}>SIGN IN</ButtonSmall>
    </Stack>
  );
};
