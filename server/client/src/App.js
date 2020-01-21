import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/layout/Home";
import SignIn from "./components/form/SignIn";
import Navbar from "./components/layout/Navbar";
import ApiState from "./components/context/api/apiState";
import EventState from "./components/context/eventAPI/eventState";
import AdminState from "./components/context/adminAPI/adminState";
import Auth from "./components/utils/AuthRoute";
import Admin from "./admin/Admin";
import NotFound from "./components/utils/NotFound";

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
        <EventState>
          <Router>
            <>
              <Switch>
                <NavRoute exact path="/" component={Home} />
                <NavRoute exact path="/signIn" component={SignIn} />
                <Auth path="/admin" component={Admin} />
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
