import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: 3rem;
  padding: 2rem;
`;

export const Logo = styled.h3`
  color: #001142;
  font-family: "poppins", sans-serif;
  font-weight: 500;
`;

export const NavItemsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 19rem;
  padding-left: 2rem;
`;

export const NavItems = styled.a`
  font-family: "poppins", sans-serif;
  color: #001142;
  font-weight: 500;
  text-decoration: none;
`;
