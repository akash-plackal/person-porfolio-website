import React from "react";
import styled from "styled-components";
import { size } from "../data/breakpoint";
import { NavItems } from "./styles/NavBar.styled";
import resume from "../assets/Akash_plackal_Resume.pdf";

const DropDownContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 999;
  transition: 0.2s ease-in-out;
  opacity: ${(toggle) => (toggle ? "1" : "0")};
  top: ${(toggle) => (toggle ? "0" : "-100%")};

  @media (min-width: ${size.mobileL}) {
    display: none;
  }
`;

const Dropdown = ({ toggle }) => {
  return (
    <>
      {toggle && (
        <DropDownContainer>
          <NavItems href="#home">Home</NavItems>
          <NavItems href="#work">Work</NavItems>
          <NavItems href="#contact">Contact</NavItems>
          <NavItems href={resume} download>
            Resume
          </NavItems>
        </DropDownContainer>
      )}
    </>
  );
};

export default Dropdown;
