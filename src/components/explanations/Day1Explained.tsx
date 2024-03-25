import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Day1Explained = () => {
  return (
    <Wrapper>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/p-Vmc8Gfyyc?si=WNglolIXOH3TFHYt"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Wrapper>
  );
};

export default Day1Explained;
