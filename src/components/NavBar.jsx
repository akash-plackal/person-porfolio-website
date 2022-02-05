import React from "react";
import { Nav, NavItems, NavItemsDiv, Logo } from "./styles/NavBar.styled";

const NavBar = () => {
  return (
    <Nav>
      <Logo data-aos="slide-down" data-aos-delay="50" data-aos-duration="1500">
        Akash Plackal
      </Logo>
      <NavItemsDiv
        data-aos="slide-down"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <NavItems href="#home">Home</NavItems>
        <NavItems href="#work">Work</NavItems>
        <NavItems href="#contact">Contact</NavItems>
        <NavItems href="#resume">Resume</NavItems>
      </NavItemsDiv>
    </Nav>
  );
};

export default NavBar;
