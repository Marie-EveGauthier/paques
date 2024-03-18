import styled from "styled-components";
import { Outlet } from "react-router-dom";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Header from "../components/Header";

const Wrapper = styled.div`
  background-color: var(--color-green-light);
  height: 100vh;
`;

const Footer = styled.footer`
  position: relative;
  padding: 64px;
  color: var(--color-green-dark);
`;

export const Layout = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Header />
        <Outlet />
        <Footer>
          <p>Fait avec amour</p>
        </Footer>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

// var(--color-dark-light)
