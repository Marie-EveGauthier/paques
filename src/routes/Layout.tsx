import styled from "styled-components";
import { Outlet } from "react-router-dom";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Header from "../components/Header";

const Footer = styled.footer`
  position: fixed;
  bottom: 0%;
`;

export const Layout = () => {
  return (
    <MaxWidthWrapper>
      <Header />
      <Outlet />
      <Footer>
        <p>Fait avec amour</p>
      </Footer>
    </MaxWidthWrapper>
  );
};
