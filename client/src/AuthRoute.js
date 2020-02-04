import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import AuthContext from "./components/context/api/apiContext";
<<<<<<< HEAD

const AuthRoute = ({ component: Component, ...rest }) => {
  const ApiContext = useContext(AuthContext);
  const { isAuthenticated, loading } = ApiContext;
=======
import Auth2Context from "./components/context/adminAPI/adminContext";

const AuthRoute = ({ component: Component, ...rest }) => {
  const ApiContext = useContext(AuthContext);
  const { isAuthenticated } = ApiContext;
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb

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

<<<<<<< HEAD
=======
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

>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
export default AuthRoute;
