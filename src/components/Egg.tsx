import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 70px;
  height: 100px;
  background-color: pink;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
`;
const Egg = () => {
  return <Wrapper />;
};

export default Egg;
