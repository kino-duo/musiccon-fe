import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

// [...] 페이지 추가될 때마다 매 번 일일이 추가해주어야 함...
export const Menu = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="row" spacing={0.5}>
      <Button color="inherit">프로듀서 컨택</Button>
      <Button color="inherit">TEST 1</Button>
      <Button color="inherit">TEST 2</Button>
      <Button color="inherit" onClick={() => navigate("/sign-in")}>
        SIGN IN
      </Button>
    </Stack>
  );
};
