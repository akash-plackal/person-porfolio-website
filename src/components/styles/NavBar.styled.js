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
  font-family: "Poppins", sans-serif;
  color: #001142;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #001142;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
