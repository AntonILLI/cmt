//side bar (menu icon)

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuToggle from "../nav/MenuToggle";
const Sidebar = () => {
  return (
    <>
      <MySidebar>
        <MenuToggle />
        <ul className="icons-list">
          <li>
            <Link to="/admin" className="icon-link">
              <i className="fas fa-users"></i>
            </Link>
          </li>
          <li>
            <Link to="/admin/profile" className="icon-link">
              <i className="fas fa-user"></i>
            </Link>
          </li>

          <li>
            <Link to="/admin/event" className="icon-link">
              <i className="fab fa-wpforms"></i>
            </Link>
          </li>

          <li>
            <Link to="/admin/eventTable" className="icon-link">
              <i className="fas fa-table"></i>
            </Link>
          </li>

          <li>
            <Link to="/" className="icon-link">
              <i className="fas fa-home"></i>
            </Link>
          </li>

          <li>
            <Link to="/" className="icon-link">
              <i className="fas fa-sign-out-alt"></i>
            </Link>
          </li>
        </ul>

        <div className="year">
          <p>2019</p>
        </div>
      </MySidebar>
    </>
  );
};

const MySidebar = styled.div`
  width: 8rem;
  height: 100%;
  background-color: #eee;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  .menu-icon {
    margin-top: 3rem;
    cursor: pointer;
  }

  .icons-list {
    list-style: none;
    padding: 0;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .icon-link {
    font-size: 2.5rem;
    color: #777;
    transition: color 0.3s;
  }

  .icon-link:hover {
    color: #deaa86;
  }

  .year {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #555;
  }
`;

export default Sidebar;
