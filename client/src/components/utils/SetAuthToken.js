import axios from "axios";

const setAuthToken = token => {
  if (token) {
<<<<<<< HEAD
=======
    //global default setting headers with [x-auth-token] like waht i did in the back end
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
