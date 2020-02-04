import React, { useLocation, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingComponent from "./components/loading/LoadingComponent";
// import Home from "./components/layout/Home";
// import SignIn from "./components/form/SignIn";
// import Navbar from "./components/layout/Navbar";
import ApiState from "./components/context/api/apiState";
import EventState from "./components/context/eventAPI/eventState";
import AdminState from "./components/context/adminAPI/adminState";
// import Admin from "./admin/Admin";
// import ForgotPassword from "./components/form/ForgotPassword";
// import ResetPassword from "./components/form/ResetPassword";
import NotFound from "./components/utils/NotFound";
import AuthRoute from "./AuthRoute";
import setAuthToken from "./components/utils/SetAuthToken";

const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/layout/Home")), 1000);
  });
});

const SignIn = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/form/SignIn")), 1000);
  });
});

const Navbar = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/layout/Navbar")), 1000);
  });
});

const Admin = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./admin/Admin")), 500);
  });
});

const ForgotPassword = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/form/ForgotPassword")), 1000);
  });
});

const ResetPassword = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/form/ResetPassword")), 1000);
  });
});

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
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  return (
    <ApiState>
      <AdminState>
        <EventState>
          <Router>
            <Suspense
              fallback={
                <div>
                  <LoadingComponent />
                </div>
              }
            >
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
                <AuthRoute path="/admin" component={Admin} />

                <Route path="*" component={NotFound} />
              </Switch>
            </Suspense>
          </Router>
        </EventState>
      </AdminState>
    </ApiState>
  );
};
//<Route exact path="/admin" component={AdminDashboard} />
export default App;
