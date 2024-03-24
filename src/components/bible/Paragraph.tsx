import styled from "styled-components";
import * as React from "react";

const StyledParagraph = styled.p`
  color: var(--color-green-dark);
  text-align: justify;
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 1.3;
`;

type Props = {
  children?: React.ReactNode;
};

const Paragraph: React.FC<Props> = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export default Paragraph;
