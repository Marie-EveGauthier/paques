import styled from "styled-components";
import { getCurrentYear } from "./utils/datesFinder";

const Wrapper = styled.header`
  font-family: Caslon;
  font-size: var(--space-xl);
  color: var(--color-green);
  padding-top: 3rem;
  text-align: center;
`;
const Title = styled.h1``;

const Header = () => {
  const year = getCurrentYear();
  return (
    <Wrapper>
      <Title>{`La chasse aux cocos de ${year}`}</Title>
    </Wrapper>
  );
};

export default Header;
