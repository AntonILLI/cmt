import React, { useReducer } from "react";
import axios from "axios";
import ApiContext from "./apiContext";
import apiReducer from "./apiReducer";
import {
  AUTH_USER,
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

const ApiState = props => {
  const initialState = {
    users: null,
    user: null,
    isAuthenticated: null,
    loading: true,
    error: null
  };

  //authUser() is run in external file,
  //type:AUTH_LOADED...which will be set as a siwtch fuc in reducer will run
  //then inside state will be chnaged(upadated)...payload:res.data---> user:action.payload

  const [state, dispatch] = useReducer(apiReducer, initialState);

  const userLoad = async () => {
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
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.message
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
        `/api/v1/auth/forgotPassword`,
        Temail,
        config
      );
      dispatch({
        type: FORGOT_PASS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: FORGOT_FAIL,
        payload: err.response.data.message
      });
    }
  };

  const resetPassword = async (resetToken, password) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(
        `/api/v1/auth/resetPassword/:${resetToken}`,
        password,
        config
      );
      dispatch({
        type: RESET_PASSWORD,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: RESET_FAIL,
        payload: err.response.data.message
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
        error: state.error,
        authUser,
        userLoad,
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
