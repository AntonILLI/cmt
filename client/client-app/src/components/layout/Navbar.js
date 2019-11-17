import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Navbar extends Component {
  state = {
    page: [
      {
        name: "Home",
        linkTo: "/",
        public: true
      }
    ],
    user: [
      {
        name: "Log in",
        linkTo: "/user/login",
        public: true
      },
      {
        name: "Register",
        linkTo: "/user/register",
        public: true
      },
      {
        name: "Log out",
        linkTo: "/user/logout",
        public: false
      }
    ]
  };

  logoutUser() {
    const request = axios
      .post("/api/users/logout")
      .then(response => response.data);
    return request;
  }

  logoutHandler = () => {
    this.logoutUser().then(response => {
      if (response.payload.success) {
        this.props.history.push("/");
      }
    });
  };
  render() {
    return (
      <Fragment>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </Fragment>
    );
  }
}
export default Navbar;
