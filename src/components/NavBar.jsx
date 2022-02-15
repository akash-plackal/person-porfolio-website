import React from "react";
import {
  Nav,
  NavItems,
  NavItemsDiv,
  Logo,
  HamMenu,
} from "./styles/NavBar.styled";
import resume from "../assets/Akash_plackal_Resume.pdf";
import "./styles/hamburger.css";

const NavBar = ({ toggle, setToggle }) => {
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
        <NavItems href={resume} download>
          Resume
        </NavItems>
      </NavItemsDiv>

      <HamMenu
        className={toggle ? "is-active hamburger" : "hamburger"}
        id="hamburger-1"
        onClick={() => setToggle(!toggle)}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </HamMenu>
    </Nav>
  );
};

export default NavBar;
