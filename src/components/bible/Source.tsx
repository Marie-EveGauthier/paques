import styled from "styled-components";
import * as React from "react";

const StyledSource = styled.p`
  color: var(--color-green-dark);
  font-size: 0.8rem;
`;

type Props = {
  children?: React.ReactNode;
};

const Source: React.FC<Props> = ({ children }) => {
  return <StyledSource>{children}</StyledSource>;
};

export default Source;
