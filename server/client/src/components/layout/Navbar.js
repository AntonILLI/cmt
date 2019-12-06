import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../context/api/apiContext";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
//import AudiotrackSharpIcon from "@material-ui/icons/AudiotrackSharp";
// import AssignmentIcon from "@material-ui/icons/Assignment";
import SvgIcon from "@material-ui/core/SvgIcon";
import { lightBlue, deepOrange } from "@material-ui/core/colors";

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
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  const authLinks = (
    <Fragment>
      <div>
        {user && (
          <div>
            {user.map((u, i) => (
              <div key={i}>Hello {u.firstname}</div>
            ))}
          </div>
        )}
      </div>
      <Link to="/">
        <HomeIcon
          color="primary"
          fontSize="large"
          component={svgProps => {
            return (
              <svg {...svgProps}>
                <defs>
                  <linearGradient id="gradient1">
                    <stop offset="30%" stopColor={lightBlue[200]} />
                    <stop offset="70%" stopColor={deepOrange[500]} />
                  </linearGradient>
                </defs>
                {React.cloneElement(svgProps.children[0], {
                  fill: "url(#gradient1)"
                })}
              </svg>
            );
          }}
        />
        Home
      </Link>
      <Link to="/admin">
        <ExitToAppIcon />
        <span>DashBoard</span>
      </Link>

      <Link to="/" onClick={handleLogout}>
        <ExitToAppIcon />
        <span>Logout</span>
      </Link>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link to="/">
        <HomeIcon
          color="primary"
          fontSize="large"
          component={svgProps => {
            return (
              <svg {...svgProps}>
                <defs>
                  <linearGradient id="gradient1">
                    <stop offset="30%" stopColor={lightBlue[200]} />
                    <stop offset="70%" stopColor={deepOrange[500]} />
                  </linearGradient>
                </defs>
                {React.cloneElement(svgProps.children[0], {
                  fill: "url(#gradient1)"
                })}
              </svg>
            );
          }}
        />
        Home
      </Link>
      <Link to="login">
        <ExitToAppIcon />
        <span>Login</span>
      </Link>

      <Link to="/" onClick={handleLogout}>
        <ExitToAppIcon />
        <span>Logout</span>
      </Link>
    </Fragment>
  );

  return (
    <div>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

export default Navbar;
// <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
// {user.map((u, i) => {
//   return <ul key={i}>{u.isAdmin ? authLinks : guestLinks}</ul>;
// })}
/* <Link to="/">
                  <HomeIcon
                    color="primary"
                    fontSize="large"
                    component={svgProps => {
                      return (
                        <svg {...svgProps}>
                          <defs>
                            <linearGradient id="gradient1">
                              <stop offset="30%" stopColor={lightBlue[200]} />
                              <stop offset="70%" stopColor={deepOrange[500]} />
                            </linearGradient>
                          </defs>
                          {React.cloneElement(svgProps.children[0], {
                            fill: "url(#gradient1)"
                          })}
                        </svg>
                      );
                    }}
                  />
                  Home
                </Link> */
