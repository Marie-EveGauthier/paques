import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)<{ fontSize?: string }>`
  display: flex;
  gap: 4px;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.8rem")};

  color: var(--color-white);
  background-color: var(--color-yellow);
  border-radius: 100px;

  padding: 0.3em 1.2em;
  margin: 5px;
`;

const EasterLink = ({ to, children, fontSize }) => {
  return (
    <StyledLink to={to} fontSize={fontSize}>
      {children}
    </StyledLink>
  );
};

export default EasterLink;
