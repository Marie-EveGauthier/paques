import styled from "styled-components";
import { GoHeartFill } from "react-icons/go";

const Wrapper = styled.footer`
  margin-top: auto;
  padding: 3rem 0;
  color: var(--color-green-dark);

  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 4px;
`;

const Footer = () => {
  return (
    <Wrapper>
      Fait avec <GoHeartFill color="var(--color-pink-dark)" /> et un goût de
      chocolat 🐥
    </Wrapper>
  );
};

export default Footer;
