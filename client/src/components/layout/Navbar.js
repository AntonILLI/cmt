<<<<<<< HEAD
import React, { useContext, useEffect } from "react";
=======
import React, { useContext } from "react";
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
import { Link } from "react-router-dom";
import ApiContext from "../context/api/apiContext";

//import AudiotrackSharpIcon from "@material-ui/icons/AudiotrackSharp";
// import AssignmentIcon from "@material-ui/icons/Assignment";

const Navbar = () => {
  const apiContext = useContext(ApiContext);

<<<<<<< HEAD
  const { logout, authUser, isAuthenticated } = apiContext;
=======
  const { logout, isAuthenticated } = apiContext;
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb

  const handleLogout = e => {
    e.preventDefault();
    logout();
  };
<<<<<<< HEAD
  useEffect(() => {
    if (isAuthenticated) {
      authUser();
    }
  }, []);
=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb

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
                <Link to="/admin">Admin-DashBoard</Link>
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
            <Link to={"/"} className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li>
            <Link to="/admin">Admin-DashBoard</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              Sign-Out
            </Link>
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
                <Link to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
<<<<<<< HEAD

              <li>
                <Link to="/signIn">
                  {/* <AudiotrackSharpIcon /> */}
                  <span>Sign-In</span>
=======
              <li>
                <Link to="#">Components</Link>
              </li>
              <li>
                <Link href="#">Javascript</Link>
              </li>
              <li>
                <Link to="/signIn">
                  {/* <AudiotrackSharpIcon /> */}
                  <span>Sign-IN</span>
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
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
<<<<<<< HEAD
=======
          <li>
            <Link to="#">Components</Link>
          </li>
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb

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
<<<<<<< HEAD
      <ul>{localStorage.getItem("token") ? authLink : guestLink}</ul>
=======
      <ul>{isAuthenticated ? authLink : guestLink}</ul>
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
    </div>
  );
};

export default Navbar;
