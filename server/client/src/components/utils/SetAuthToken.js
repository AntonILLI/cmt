import axios from "axios";

const setAuthToken = token => {
  if (token) {
    //global default setting headers with [x-auth-token] like waht i did in the back end
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
