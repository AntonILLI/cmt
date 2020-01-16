import React, { useEffect, useState } from "react";

export const SetAuthContext = React.createContext();
export default ({ children }) => {
  const prevAuth = window.localStorage.getItem("auth") || false;
  const prevAuthBody = window.localStorage.getItem("authBody") || null;
  const [authenticated, setAuthenticated] = useState(prevAuth);
  const [authBody, setAuthBody] = useState(prevAuthBody);
  useEffect(() => {
    window.localStorage.setItem("authenticated", authenticated);
    window.localStorage.setItem("authBody", authBody);
  }, [authenticated, authBody]);

  const defaultContext = {
    authenticated,
    setAuthenticated,
    authBody,
    setAuthBody
  };
  return (
    <SetAuthContext.Provider value={defaultContext}>
      {children}
    </SetAuthContext.Provider>
  );
};

// import axios from "axios";
// import React, { useEffect, useState } from 'react';

// const setAuthToken = token => {
//   if (token) {
//     //global default setting headers
//     axios.defaults.headers.common["token"] = token;
//   } else {
//     delete axios.defaults.headers.common["token"];
//   }
// };

// export default setAuthToken;
