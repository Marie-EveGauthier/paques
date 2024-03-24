import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";

import Egg from "./Egg";
import EasterLink from "./EasterLink";

/** source: https://lenadesign.org/2022/02/26/css-easter-bunny-foldable-easter-card/#google_vignette
 * but as we need a smaller card, we adopt the 2 / 3 smallThan
 * hence all the calc()
 *
 */
const ratio = 66; // 2 / 3

const Wrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  margin-left: 224px;
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
    transform: perspective(2000px) rotate(1 deg);
  }
`;

const CardFront = styled.div`
  position: relative;
  background-color: var(--color-beige);
  width: 200px;
  height: 200px;
  transform-origin: left;
  transition: all.5s;
  box-shadow: inset 30px 10px 100px rgba(0, 0, 0, 0.1),
    0 0 50px rgba(0, 0, 0, 0.1);

  ${EasterCard}:hover & {
    transform: rotateY(-160deg);
    box-shadow: 7px 0px 5px 0px rgba(0, 0, 0, 0.3),
      inset 2px 0px 15px 0px rgba(0, 0, 0, 0.1);
  }
`;

const InsideText = styled.div`
  display: none;

  ${EasterCard}:hover & {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    transform: rotateY(160deg);
  }
`;

const Name = styled.p`
  color: var(--color-green);
  font-size: 2rem;
  font-weight: 700;
`;

const Bottom = styled.div`
  position: absolute;
  color: var(--color-white);
  font-weight: 600;
  background-color: var(--color-red);
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

const EasterBunny = styled.div`
  position: absolute;

  ${EasterCard}:hover & {
    display: none;
  }
`;

const Head = styled.div`
  position: absolute;
  background-color: var(--color-white);
  width: ${`calc(130px * ${ratio} / 100)`};
  height: ${`calc(150px * ${ratio} / 100)`};
  border-radius: 50%;
  top: ${`calc(130px * ${ratio} / 100)`};
  left: ${`calc(85px * ${ratio} / 100)`};
  z-index: 5;

  &:before {
    position: absolute;
    content: "";
    background-color: #333;
    width: ${`calc(25px * ${ratio} / 100)`};
    height: ${`calc(25px * ${ratio} / 100)`};
    border-radius: 50%;
    top: ${`calc(40px * ${ratio} / 100)`}; // 20px; // 40px
    left: ${`calc(30px * ${ratio} / 100)`}; // 12px; // 30px
    box-shadow: ${`calc(45px * ${ratio} / 100) 0 #333`}; //45px
  }

  &:after {
    content: "";
    position: absolute;
    background-color: white;
    border-radius: 50%;
    width: ${`calc(10px * ${ratio} / 100)`};
    height: ${`calc(10px * ${ratio} / 100)`};
    left: ${`calc(35px * ${ratio} / 100)`}; // 15px; // 35px;
    top: ${`calc(50px * ${ratio} / 100)`}; // 27px; // 50px;
    box-shadow: ${`calc(45px * ${ratio} / 100) 0 white`}; //45px
  }
`;

const EarLeft = styled.div`
  position: absolute;
  &:before,
  &:after {
    content: "";
    position: absolute;
    border-radius: 55% 45% 70% 30% / 30% 30% 70% 70%;
    transform: rotate(-20deg);
  }

  &:before {
    height: ${`calc(145px * ${ratio} / 100)`};
    width: ${`calc(35px * ${ratio} / 100)`};
    background-color: var(--color-white);
    top: ${`calc(10px * ${ratio} / 100)`}; //10px;
    left: ${`calc(90px * ${ratio} / 100)`}; // 90px;
  }

  &:after {
    background-color: #f7d9d1;
    width: ${`calc(20px * ${ratio} / 100)`}; //10px;
    height: ${`calc(130px * ${ratio} / 100)`}; //130px;
    top: ${`calc(27px * ${ratio} / 100)`}; //10px;
    left: ${`calc(100px * ${ratio} / 100)`};

    box-shadow: inset -3px -3px rgba(0, 0, 0, 0.1);
  }
`;
const EarRight = styled(EarLeft)`
  &:before,
  &:after {
    transform: rotate(20deg);
  }

  &:before {
    left: ${`calc(180px * ${ratio} / 100)`};
  }

  &:after {
    left: ${`calc(183px * ${ratio} / 100)`};
  }
`;

const Paws = styled.div`
  position: absolute;
  background-color: #f7d9d1;
  width: ${`calc(25px * ${ratio} / 100)`};
  height: ${`calc(15px * ${ratio} / 100)`};
  border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
  top: ${`calc(193px * ${ratio} / 100)`};
  left: ${`calc(137px * ${ratio} / 100)`};
  z-index: 10;
  box-shadow: inset 0 -3px rgba(0, 0, 0, 0.1);

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: var(--color-white);
    border-radius: 50%;
    width: ${`calc(50px * ${ratio} / 100)`};
    height: ${`calc(50px * ${ratio} / 100)`};
    box-shadow: inset -3px -3px rgba(0, 0, 0, 0.1);
    top: ${`calc(-10px * ${ratio} / 100)`};
  }

  &:before {
    left: ${`calc(-80px * ${ratio} / 100)`};
  }

  &:after {
    left: ${`calc(50px * ${ratio} / 100)`};
  }
`;

const CardInside = styled.div`
  position: absolute;
  background-color: var(--color-beige);
  width: 200px;
  height: 200px;
  z-index: -2;
  left: 0;
  top: 0;
  box-shadow: 7px 0px 5px 0px rgba(0, 0, 0, 0.3),
    inset 2px 0px 15px 0px rgba(0, 0, 0, 0.1);
`;

const Wishes = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  flex-direction: column;
`;

const Event = styled.p`
  color: var(--color-green);
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`;

const EggWrapper = styled.div`
  display: none;
  position: absolute;
  bottom: 80px;
  right: 30px;
  transform: rotate(5deg);

  ${EasterCard}:hover & {
    display: block;
  }
`;

const Card = ({ date, content }: { date: string; content: any }) => {
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
          <InsideText>
            <Name>{content.name}</Name>
          </InsideText>
        </CardFront>
        <CardInside>
          <Wishes>
            <Event>{content.event}</Event>
            <EasterLink to={`/cocos/${content.order}`}>
              En savoir plus <FaArrowRightLong />
            </EasterLink>
          </Wishes>
        </CardInside>
        <EggWrapper>
          <Egg />
        </EggWrapper>
      </EasterCard>
    </Wrapper>
  );
};
export default Card;
