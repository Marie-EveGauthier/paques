import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: flex;
  gap: 4px;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.8rem;

  color: var(--color-white);
  background-color: var(--color-yellow);
  border-radius: 100px;

  padding: 0.3em 1.2em;
  margin: 5px;
`;

const EasterLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default EasterLink;
