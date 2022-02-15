import React from "react";
import styled from "styled-components";
import { size } from "../data/breakpoint";
import { NavItems } from "./styles/NavBar.styled";
import resume from "../assets/Akash_plackal_Resume.pdf";

const DropDownContainer = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
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

const DropDownLinks = styled(NavItems)`
  font-size: 50px;
  line-height: 85px;
  font-weight: 600;
`;

const Dropdown = ({ toggle, setToggle }) => {
  const clickHandler = () => setToggle(!toggle);

  return (
    <>
      {toggle && (
        <DropDownContainer>
          <DropDownLinks href="#home" onClick={clickHandler}>
            Home
          </DropDownLinks>
          <DropDownLinks href="#work" onClick={clickHandler}>
            Work
          </DropDownLinks>
          <DropDownLinks href="#contact" onClick={clickHandler}>
            Contact
          </DropDownLinks>
          <DropDownLinks href={resume} download>
            Resume
          </DropDownLinks>
        </DropDownContainer>
      )}
    </>
  );
};

export default Dropdown;
