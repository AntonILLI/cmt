import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
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
