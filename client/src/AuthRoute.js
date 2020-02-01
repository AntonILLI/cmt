import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import AuthContext from "./components/context/api/apiContext";
import Auth2Context from "./components/context/adminAPI/adminContext";

const AuthRoute = ({ component: Component, ...rest }) => {
  const ApiContext = useContext(AuthContext);
  const { isAuthenticated } = ApiContext;

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

export const AdminRoute = ({ component: Component, ...rest }) => {
  const AdminContext = useContext(Auth2Context);
  const { isAuthenticated } = AdminContext;

  return (
    <Route
      {...rest}
      render={Rprops =>
        !isAuthenticated ? <Redirect to="/admin" /> : <Component {...Rprops} />
      }
    />
  );
};

export default AuthRoute;
