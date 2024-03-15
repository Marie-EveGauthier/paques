import styled from "styled-components";
import * as React from "react";

const Wrapper = styled.div`
  max-width: 1024px;
  padding-left: 32px;
  padding-right: 32px;
  margin-right: auto;
  margin-left: auto;
`;

type Props = {
  children?: React.ReactNode;
};

const MaxWidthWrapper = ({ children, ...delegated }: Props) => {
  return <Wrapper {...delegated}>{children}</Wrapper>;
};

export default MaxWidthWrapper;
