import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import RegisterHook from "./components/form/RegisterHook";
import SignIn from "./components/form/SignIn";
import Navbar from "./components/layout/Navbar";
import ApiState from "./components/api/apiState";

const NavRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      <div>
        <Navbar />
        <Component {...props} />
      </div>
    )}
  />
);

const App = () => {
  return (
    <ApiState>
      <Router>
        <Fragment>
          <div className="container">
            <Switch>
              <NavRoute exact path="/" component={Home} />
              <NavRoute exact path="/register" component={RegisterHook} />
              <NavRoute exact path="/login" component={SignIn} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ApiState>
  );
};

export default App;
