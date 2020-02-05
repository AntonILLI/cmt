import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import AuthContext from "./components/context/api/apiContext";

const AuthRoute = ({ component: Component, ...rest }) => {
  const ApiContext = useContext(AuthContext);
  const { isAuthenticated, loading } = ApiContext;

  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signIn" />
        )
      }
    />
  );
};

export default AuthRoute;
