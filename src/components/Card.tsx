import styled from "styled-components";

const Wrapper = styled.div`
  margin: var(--space-xl) 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Franklin;
`;

const EasterCard = styled.div`
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  transform: perspective(2000px);
  transition: all.5s;

  &:hover {
    transform: perspective(2000px) rotate(2deg);
  }
`;

const CardFront = styled.div`
  position: relative;
  background-color: var(--color-green-light);
  width: 200px;
  height: 200px;
  transform-origin: left;
  transition: all.5s;
  box-shadow: inset 30px 10px 100px rgba(0, 0, 0.1), 0 0 50px rgba(0, 0, 0, 0.1);

  ${EasterCard}:hover & {
    transform: rotateY(-160deg);
    box-shadow: 0 10px 100px rgba(0, 0, 0, 0.1);
  }
`;

const Bottom = styled.div`
  position: absolute;
  color: var(--color-white);
  background-color: var(--color-pink);
  width: 200px;
  height: 60px;
  bottom: 0;
  z-index: 7;
  display: flex;
  justify-content: center;
  align-items: center;

  ${EasterCard}:hover & {
    display: none;
  }
`;

const EasterBunny = styled.div``;
const Head = styled.div``;
const EarLeft = styled.div``;
const EarRight = styled.div``;
const Paws = styled.div``;

const CardInside = styled.div`
  position: absolute;
  background-color: var(--color-green-light);
  width: 200px;
  height: 200px;
  z-index: -2;
  left: 0;
  top: 0;
  box-shadow: inset 30px 10px 100px rgba(0, 0, 0.1), 0 0 50px rgba(0, 0, 0, 0.1);
`;

const Wishes = styled.div``;
const EasterEggs = styled.div``;
const Eggs = styled.div``;
const Basket = styled.div``;

const Card = ({ date }: { date: string }) => {
  return (
    <Wrapper>
      <EasterCard>
        <CardFront>
          <Bottom>{date}</Bottom>
          <EasterBunny>
            <Head></Head>
            <EarLeft></EarLeft>
            <EarRight></EarRight>
            <Paws></Paws>
          </EasterBunny>
        </CardFront>
        <CardInside>
          <Wishes></Wishes>
          <EasterEggs>
            <Eggs></Eggs>
            <Basket></Basket>
          </EasterEggs>
        </CardInside>
      </EasterCard>
    </Wrapper>
  );
};
export default Card;
