import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/layout/Home";
import SignIn from "./components/form/SignIn";
import Navbar from "./components/layout/Navbar";
import ApiState from "./components/context/api/apiState";
import EventState from "./components/context/eventAPI/eventState";
import AdminState from "./components/context/adminAPI/adminState";
import Admin from "./admin/Admin";
import ForgotPassword from "./components/form/ForgotPassword";
import ResetPassword from "./components/form/ResetPassword";
import NotFound from "./components/utils/NotFound";
import AuthRoute from "./AuthRoute";
import setAuthToken from "./components/utils/SetAuthToken";
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

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AdminState>
      <ApiState>
        <EventState>
          <Router>
            <>
              <Switch>
                <NavRoute exact path="/" component={Home} />
                <NavRoute exact path="/signIn" component={SignIn} />
                <NavRoute
                  exact
                  path="/forgotPassword"
                  component={ForgotPassword}
                />
                <NavRoute
                  path="/resetpassword/:resetPasswordToken"
                  component={ResetPassword}
                />
                <AuthRoute exact path="/admin" component={Admin} />

                <Route path="*" component={NotFound} />
              </Switch>
            </>
          </Router>
        </EventState>
      </ApiState>
    </AdminState>
  );
};
//<Route exact path="/admin" component={AdminDashboard} />
export default App;
