import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../context/api/apiContext";

//import AudiotrackSharpIcon from "@material-ui/icons/AudiotrackSharp";
// import AssignmentIcon from "@material-ui/icons/Assignment";

const Navbar = () => {
  const apiContext = useContext(ApiContext);

  const { logout, user, authUser, isAuthenticated } = apiContext;
  useEffect(() => {
    authUser();
    // eslint-disable-next-line
  }, []);
  const handleLogout = e => {
    e.preventDefault();
    logout();
  };

  const authLinks = (
    <>
      <div>
        {user && (
          <div>
            {user.map((u, i) => (
              <div key={i}>Hello {u.firstname}</div>
            ))}
          </div>
        )}
      </div>
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
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="admin/dashboard">Dashboard</a>
              </li>
              <li>
                <Link to="login">
                  {/* <AudiotrackSharpIcon /> */}
                  <span>Sign-IN</span>
                </Link>
              </li>
              <li>
                <Link to="/" onClick={handleLogout}>
                  Logout
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
            <a href="badges.html">Components</a>
          </li>
          <li>
            <Link to="admin/dashboard">Javascript</Link>
          </li>
          <li>
            <Link to="login">
              {/* <AudiotrackSharpIcon /> */}
              <span>Sign-IN</span>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );

  const guestLinks = (
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
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">Javascript</a>
              </li>
              <li>
                <Link to="login">
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
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="">DashBaord</a>
          </li>
          <li>
            <Link to="login">
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
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

export default Navbar;
