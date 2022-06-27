import React from "react";
// import "./header.cs";
// import "./Style.jsx";
import Navbar from "./Style.jsx";
// import styled from "styled-components";

// const Navbar = styled.nav`
//   height: 50px;
//   border: 1px solid black;
//   background-color: blue;
//   display: flex;
//   color: white;
// `;

function Header() {
  return (
    <>
      <Navbar>
        <div>
          <h1>sunnyside</h1>
        </div>
        <div style={{ display: "flex" }}>
          <p>About</p>
          <p>Services</p>
          <p>Projects</p>
          <button>CONTACT</button>
        </div>
      </Navbar>
    </>
  );
}
export default Header;
