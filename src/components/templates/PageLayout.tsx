import React from "react";
import styled from "@emotion/styled";
import { getChildrenByName } from "../../lib/util/getChildrenByName";
import { isEmpty } from "../../lib/util/isEmpty";
import { Empty } from "../atoms";

type Props = { children: React.ReactNode };

const Main = ({ children }: Props) => {
  const [TitleComponenets] = getChildrenByName(children, "Title");
  const arrayBodyComponenets = getChildrenByName(children, "Body");

  return (
    <>
      <Empty height="2rem" />
      {!!TitleComponenets && TitleComponenets}
      <Empty height="2rem" />
      {isEmpty(arrayBodyComponenets) || arrayBodyComponenets}
    </>
  );
};

const Title = ({ children }: Props) => {
  return <div style={{ display: "flex", justifyContent: "center" }}>{children}</div>;
};

// [Todo] Body 부분을 없앨 수 있지 않을까?
const Body = ({ children }: Props) => {
  return <>{children}</>;
};

export const PageLayout = Object.assign(Main, { Title, Body });
