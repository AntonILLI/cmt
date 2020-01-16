import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../context/api/apiContext";

//import AudiotrackSharpIcon from "@material-ui/icons/AudiotrackSharp";
// import AssignmentIcon from "@material-ui/icons/Assignment";

const Navbar = () => {
  const apiContext = useContext(ApiContext);

  const { logout, isAuthenticated } = apiContext;

  const handleLogout = e => {
    e.preventDefault();
    logout();
  };

  const authLink = (
    <>
      <header>
        <nav className="brown darken-4">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              Logo
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li>
                <Link to="#">Components</Link>
              </li>
              <li>
                <Link to="/" onClick={handleLogout}>
                  Sing-Out
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li>
            <Link to="#">Components</Link>
          </li>
          <li>
            <Link to="logout">Sign-Out</Link>
          </li>
        </ul>
      </header>
    </>
  );

  const guestLink = (
    <>
      <header>
        <nav className="brown darken-4">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              Logo
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li>
                <Link to="#">Components</Link>
              </li>
              <li>
                <Link href="#">Javascript</Link>
              </li>
              <li>
                <Link to="signIn">
                  {/* <AudiotrackSharpIcon /> */}
                  <span>Sign-IN</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li>
            <Link to="#">Components</Link>
          </li>

          <li>
            <Link to="signIn">
              {/* <AudiotrackSharpIcon /> */}
              <span>Sign-IN</span>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );

  return (
    <div>
      <ul>{isAuthenticated ? authLink : guestLink}</ul>
    </div>
  );
};

export default Navbar;
