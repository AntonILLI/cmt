import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import SignIn from "./components/form/SignIn";
import Navbar from "./components/layout/Navbar";
import ApiState from "./components/context/api/apiState";
import AdminState from "./components/context/adminAPI/adminState";
import "./css/style.css";
import 'materialize-css/dist/css/materialize.min.css';
// import AdminDashboard from "./components/admin/adminDashboard";
import Admin from "../src/admin/layouts/Admin";
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
    <AdminState>
    <ApiState>
      <Router>
        <Fragment>
          {/* <div className="container"> */}
            <Switch>
              <NavRoute exact path="/" component={Home} />
              <NavRoute exact path="/login" component={SignIn} />
              <Route path="/admin" component={Admin} />
            </Switch>

          </Fragment>
        </Router>
      </ApiState>
    </AdminState>

  );
};
//<Route exact path="/admin" component={AdminDashboard} />
export default App;
