import axios from "axios";

const setAuthToken = token => {
  if (token) {
    //global default setting headers
    axios.defaults.headers.common["token"] = token;
  } else {
    delete axios.defaults.headers.common["token"];
  }
};

export default setAuthToken;
