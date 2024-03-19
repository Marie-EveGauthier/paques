import styled from "styled-components";
import { FaArrowLeftLong } from "react-icons/fa6";

import EasterLink from "../components/EasterLink";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperLink = styled.nav`
  width: fit-content;
  margin-top: 2rem;
`;

const Coco = () => {
  return (
    <Wrapper>
      <WrapperLink>
        <EasterLink to="/" fontSize="1.2rem">
          <FaArrowLeftLong /> Retour aux cocos
        </EasterLink>
      </WrapperLink>
    </Wrapper>
  );
};

export default Coco;
