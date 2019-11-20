import React, { useReducer } from "react";
import axios from "axios";
import ApiContext from "./apiContext";
import apiReducer from "./apiReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_USER,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  USER_ERROR
} from "../types";

const ApiState = props => {
  const initialState = {
    users: [],
    isAuthenticated: null,
    loading: true,
    error: null
  };

  //api props action contorl

  //what is reducer and action
  //when exported function such as authUser() is run in external file,
  //type:AUTH_LOADED...which will be set as a siwtch fuc in reducer will run
  //then inside state will be chnaged(upadated)...payload:res.data---> user:action.payload

  const [state, dispatch] = useReducer(apiReducer, initialState);

  const userLoad = async () => {
    try {
      const res = await axios.get("/api/user");

      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: USER_ERROR });
    }
  };

  const authUser = async () => {
    try {
      const res = await axios.get("/api/user/auth");
      dispatch({ type: AUTH_USER, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  const register = async userData => {
    try {
      const res = await axios.post("/api/user/register", userData);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      // authUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.message
      });
    }
  };

  const login = async userData => {
    try {
      const res = await axios.post("/api/user/login", userData);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      // authUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.message
      });
    }
  };

  const logout = () => {
    const res = axios.get("/api/user/logout");
    dispatch({ type: LOGOUT });
  };

  return (
    <ApiContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        users: state.users,
        error: state.error,
        authUser,
        userLoad,
        login,
        logout,
        register
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};
// userLoad,
export default ApiState;
