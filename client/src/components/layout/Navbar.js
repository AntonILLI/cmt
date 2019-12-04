import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../../components/api/apiContext";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AudiotrackSharpIcon from "@material-ui/icons/AudiotrackSharp";
// import AssignmentIcon from "@material-ui/icons/Assignment";
import SvgIcon from "@material-ui/core/SvgIcon";
import { lightBlue, deepOrange } from "@material-ui/core/colors";

const Navbar = () => {
  const apiContext = useContext(ApiContext);

  const { logout, user, authUser, isAuthenticated } = apiContext;
  // const [isAdmin, setisAdmin] = useState([]);
  // const CheckIsAdmin = setisAdmin(user.filter(x => x === true));

  useEffect(() => {
    authUser();
    //  CheckIsAdmin();
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
              <div key={i}>Hello {u.isAuth && u.firstname}</div>
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
    <header>





              <nav className="brown darken-4">
                <div className="nav-wrapper">
                  <a href="#!" className="brand-logo">Logo</a>
                  <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                  <ul className="right hide-on-med-and-down">
                    <li>
                    <Link className="nav-link">
                    Home <span className="sr-only">(current)</span>
                    </Link>
                    </li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
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
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li>
                  <Link to="login">
                    {/* <AudiotrackSharpIcon /> */}
                    <span>Sign-IN</span>
                  </Link>
                </li>
              </ul>




















      {/* <div className="d-flex justify-content-center">
        <nav className="navbar fixed-top navbar-toggleable-md navbar-dark bg-primary">
          <div className="container">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav1"
              aria-controls="navbarNav1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to="/">
              {" "}
              CMT
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav1">
              <ul className="navbar-nav mr-auto">
                <li classNameName="nav-item active">
                  <Link className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                  <Link to="login">
                    <AudiotrackSharpIcon />
                    <span>Sign-IN</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Features</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Pricing</Link>
                </li>
                <li className="nav-item dropdown btn-group">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </Link>
                  <div
                    className="dropdown-menu dropdown"
                    aria-labelledby="dropdownMenu1"
                  >
                    <a className="dropdown-item">Action</a>
                    <a className="dropdown-item">Another action</a>
                    <a className="dropdown-item">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div> */}
    </header>
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
