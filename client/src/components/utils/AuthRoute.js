import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { SetAuthContext } from "../../components/utils/SetAuthContext";

export default ({ render, ...rest }) => {
  const { authenticated } = useContext(SetAuthContext);
  return (
    <Route
      {...rest}
      render={() => (authenticated ? render() : <Redirect to="singIn" />)}
    />
  );
};
