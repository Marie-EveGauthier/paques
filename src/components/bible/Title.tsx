import styled from "styled-components";
import * as React from "react";

const StyledTitle = styled.p`
  color: var(--color-green-dark);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

type Props = {
  children?: React.ReactNode;
};

const Title: React.FC<Props> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
