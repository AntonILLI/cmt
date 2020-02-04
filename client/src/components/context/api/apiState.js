import React, { useReducer } from "react";
import axios from "axios";
import ApiContext from "./apiContext";
import apiReducer from "./apiReducer";
import {
  AUTH_USER,
<<<<<<< HEAD
  ADMIN_USERS,
  ADMIN_ERROR,
=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  RESET_PASSWORD,
  RESET_FAIL,
  USER_LOAD,
  USER_ERROR,
  FORGOT_PASS,
  FORGOT_FAIL
} from "./types";
import setAuthToken from "../../utils/SetAuthToken";

const ApiState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    users: null,
    user: null,
<<<<<<< HEAD
    teachers: [],
    isAuthenticated: null,
    loading: true,
    errorMessage: null
  };
=======
    isAuthenticated: null,
    loading: true,
    error: null
  };

>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
  //authUser() is run in external file,
  //type:AUTH_LOADED...which will be set as a siwtch fuc in reducer will run
  //then inside state will be chnaged(upadated)...payload:res.data---> user:action.payload

  const [state, dispatch] = useReducer(apiReducer, initialState);

  const userLoad = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/api/v1/users");
      dispatch({ type: USER_LOAD, payload: res.data });
      console.log(res.data);
    } catch (err) {
      dispatch({ type: USER_ERROR });
    }
  };

  const authUser = async () => {
    try {
      const res = await axios.get("/api/v1/auth/userlogin");
      dispatch({ type: AUTH_USER, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

<<<<<<< HEAD
  const adminUsers = async () => {
    try {
      const res = await axios.get("/api/v1/users/admin", {});
      console.log(res);
      dispatch({ type: ADMIN_USERS, payload: res.data });
    } catch (err) {
      dispatch({ type: ADMIN_ERROR });
    }
  };

=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
  const login = async userData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/v1/auth/login", userData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
<<<<<<< HEAD
      userLoad();
=======
      setAuthToken(localStorage.token);
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.error
      });
    }
  };

  const forgotPassword = async Temail => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(
<<<<<<< HEAD
        "/api/v1/auth/forgotPassword",
        Temail,
        config
      );
=======
        `/api/v1/auth/forgotPassword`,
        Temail,
        config
      );

>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
      dispatch({
        type: FORGOT_PASS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: FORGOT_FAIL,
<<<<<<< HEAD
        payload: err.response.data.success
=======
        payload: err.response.data.error
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
      });
    }
  };

  const resetPassword = async (data, resetPasswordToken) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.put(
        `/api/v1/auth/resetPassword/${resetPasswordToken}`,
        data,
        config
      );

      dispatch({
        type: RESET_PASSWORD,
        payload: res.data
      });
    } catch (err) {
<<<<<<< HEAD
      console.log("err:", err.response);
      dispatch({
        type: RESET_FAIL,
        payload: err.response.data.error
=======
      dispatch({
        type: RESET_FAIL,
        payload: err.response.data.message
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
      });
    }
  };

  const logout = () => {
    const res = axios.get("/api/v1/auth/logout");
    dispatch({ type: LOGOUT });
  };

  return (
    <ApiContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        users: state.users,
        user: state.user,
<<<<<<< HEAD
        errorMessage: state.errorMessage,
        teachers: state.teachers,
        authUser,
        userLoad,
        adminUsers,
=======
        error: state.error,
        authUser,
        userLoad,
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
        login,
        logout,
        resetPassword,
        forgotPassword
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiState;
