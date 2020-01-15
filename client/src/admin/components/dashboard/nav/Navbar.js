//Nav bar (side)

import React from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Navbar = () => {
  return (
    <MyNavbar>
      <input
        className="checkbox browser-default"
        type="checkbox"
        id="click"
        hidden
      ></input>
      <Sidebar />
      <Navigation />
    </MyNavbar>
  );
};

const MyNavbar = styled.div`
  .checkbox:checked ~ .navigation {
    left: 8rem;
  }
`;

export default Navbar;
