import React from "react";
import { Empty } from "../../../components/atoms";
import { FormLayout } from "../../../components/templates/FormLayout";
import { PageLayout } from "../../../components/templates/PageLayout";
import { Typography, Stack, Divider } from "@mui/material";
import { useSignIn } from "./hook";
import { IdField, SaveIdCheckBox } from "./components";
import { ButtonCTA, ButtonSmall } from "../../../components/atoms";
import { PwField } from "./components/PwField";

// [Error] Vercel의 배포 시점에 페이지가 렌더링이 안됨
export const SignIn = () => {
  const { reg, onSubmit, setValue, toggleSaveId, navigate } = useSignIn();
  return (
    <PageLayout>
      <PageLayout.Title>
        <Typography variant="h1">Sign In</Typography>
      </PageLayout.Title>
      <PageLayout.Body>
        <FormLayout onSubmit={onSubmit}>
          <IdField useControllerProps={reg.email} setValue={setValue} />
          <Empty height="3rem" />
          <PwField label="PASSWORD" useControllerProps={reg.password} />
          <SaveIdCheckBox toggleSaveId={toggleSaveId} />
          <Empty height="2rem" />
          <ButtonCTA type="submit">로그인</ButtonCTA>
        </FormLayout>
        <Empty height="2rem" />
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
          <ButtonSmall>아이디 찾기</ButtonSmall>
          <ButtonSmall>비밀번호 찾기</ButtonSmall>
          <ButtonSmall>회원가입</ButtonSmall>
        </Stack>
      </PageLayout.Body>
    </PageLayout>
  );
};
