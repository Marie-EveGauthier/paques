import styled from "styled-components";
import { Outlet } from "react-router-dom";

import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  background-color: var(--color-green-light);
  height: 100%;
  min-height: 100vh;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Header />
        <Outlet />
        <Footer />
      </MaxWidthWrapper>
    </Wrapper>
  );
};
