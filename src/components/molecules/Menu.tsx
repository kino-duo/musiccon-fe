import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const Menu = () => {
  return (
    <Stack direction="row" spacing={0.5}>
      <Button color="inherit">프로듀서 컨택</Button>
      <Button color="inherit">TEST 1</Button>
      <Button color="inherit">TEST 2</Button>
      <Button color="inherit">SIGN IN</Button>
    </Stack>
  );
};
