import styled from "styled-components";
import * as React from "react";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-green-dark);
  border: 5px dotted var(--color-green-dark);
  background-color: var(--color-yellow);
  padding: 1rem;
`;

type Props = {
  children?: React.ReactNode;
};

const Wrapper: React.FC<Props> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
