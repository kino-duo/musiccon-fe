import React from "react";
import Typography from "@mui/material/Typography";
import { PageLayout } from "../../../components/templates/PageLayout";
import { Empty } from "../../../components/atoms";

export const SignIn = () => {
  return (
    <PageLayout>
      {/* [Todo] 헤더 부분 컴파운드 컴포넌트로 만들기 */}
      <PageLayout.Title>
        <Typography variant="h1">로그인</Typography>
      </PageLayout.Title>
      <PageLayout.Body>
        <Typography>ssssssss</Typography>
        <Typography>ssssssss</Typography>
        <Typography>ssssssss</Typography>
        <Typography>ssssssss</Typography>
        <Typography>ssssssss</Typography>
      </PageLayout.Body>
    </PageLayout>
  );
};
