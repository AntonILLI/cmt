import React from "react";
import ReactDOM from "react-dom";
import SetAuthContext from "./components/utils/SetAuthContext";
import App from "./App";

ReactDOM.render(
  <SetAuthContext>
    <App />
  </SetAuthContext>,
  document.getElementById("root")
);
