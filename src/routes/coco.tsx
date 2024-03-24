import styled from "styled-components";
import { useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PhotoProvider, PhotoView } from "react-photo-view";

import data from "../data.json";

import EasterLink from "../components/EasterLink";
import Day1 from "../components/bible/day1";
import Day1Explained from "../components/bible/day1Explained";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperLink = styled.nav`
  width: fit-content;
  margin-top: 2rem;
`;

const WrapperCoco = styled.div`
  margin-top: 4rem;
  display: flex;
`;

const Title = styled.h1`
  color: var(--color-green);
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
`;
const Subtitle = styled.h2`
  color: var(--color-green);
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  text-align: right;
  font-size: 0.8rem;
  justify-content: space-evenly;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const ImagesWrapper = styled.div<{ $quantity: number }>`
  display: grid;
  gap: var(--g);
  width: ${({ $quantity }) =>
    `calc(${$quantity}) * var(--s) + (${$quantity} - 1) * var(--g)`};
  /* height: calc(var(--n) * var(--s) + (var(--n) - 1) * var(--g)); */
  grid-template-columns: ${({ $quantity }) => `repeat(${$quantity},auto)`};

  --n: 3; /* number of rows*/
  --m: 4; /* number of columns */
  --s: 150px; /* control the size */
  --g: 10px; /* control the gap */
  --f: 1.5; /* control the scale factor */
`;

const Image = styled.img``;

const FigCaption = styled.figcaption`
  caption-side: bottom;
  color: var(--color-green);
  margin-top: 6px;
  margin-bottom: 1rem;
`;

const BibleWrapper = styled.div``;
const Explanation = styled.div``;

const Error = styled.p`
  color: var(--color-red);
  font-size: 1.5rem;
  text-align: center;
  margin: 2rem;
`;

const renderComponent = (name: string): JSX.Element => {
  const mapNameToComponent = {
    Day1: Day1,
    Day1Explained: Day1Explained,
    // Day2: Day2,
    // Day3: Day3,
    // Day4: Day4,
    // Day5: Day5,
    // Day6: Day6,
    // Day7: Day7,
    // Day8: Day8,
  };

  const Component = mapNameToComponent[name];

  if (!Component) return null;
  return <Component />;
};

const Coco = () => {
  let { cocoId } = useParams();
  const currentData = data.find((d) => d.order === Number(cocoId));

  console.log("currentData", currentData);
  return (
    <Wrapper>
      <WrapperLink>
        <EasterLink to="/" fontSize="1.2rem">
          <FaArrowLeftLong /> Retour aux cocos
        </EasterLink>
      </WrapperLink>
      <WrapperCoco></WrapperCoco>
      {currentData ? (
        <>
          <Title>{currentData.name}</Title>
          <Subtitle>{currentData.event}</Subtitle>
          <PhotoProvider>
            <ImagesWrapper $quantity={currentData.artwork.length}>
              {currentData.artwork.map((art) => (
                <PhotoView key={art.src} src={art.src}>
                  <Figure>
                    <ImageWrapper>
                      <Image src={art.src} />
                    </ImageWrapper>

                    <FigCaption>
                      <p>
                        {art.artist}, <em>{art.title}</em>, {art.date}
                      </p>
                      <p>{art.techniqueAndSize}</p>
                      <p>{art.collection}</p>
                    </FigCaption>
                  </Figure>
                </PhotoView>
              ))}
            </ImagesWrapper>
          </PhotoProvider>
          <BibleWrapper>
            {renderComponent(currentData.bibleComponent)}
          </BibleWrapper>

          <Explanation>
            Difficile à comprendre ?
            <br />
            Selon moi, les textes de la Bible ressemblent souvent à des messages
            codés.
            <br />
            Reprenons donc, mais en déchiffrant les codes.
          </Explanation>
        </>
      ) : (
        <Error>Oups... Le lapin de Pâques n'est pas passé par ici</Error>
      )}
    </Wrapper>
  );
};

export default Coco;
