import React, { useReducer } from "react";
import axios from "axios";
import AdminContext from "./adminContext";
import AdminReducer from "./adminReducer";
import {
  ADMIN_USERS,
  ADMIN_ERROR,
  ADD_USERS,
  ADD_ERROR,
  DELETE_USER,
  DELETE_ERROR,
  UPDATE_USER,
  UPDATE_ERROR
} from "./types";

const AdminState = props => {
  const initialState = {
    teams: {},
    error: null,
    loading: null
  };

  const [state, dispatch] = useReducer(AdminReducer, initialState);

  const adminUsers = async () => {
    try {
      const res = await axios.get("/api/v1/users/admin");
      console.log(res.data);
      dispatch({ type: ADMIN_USERS, payload: res.data });
    } catch (err) {
      dispatch({ type: ADMIN_ERROR });
    }
  };

  const addUsers = async userData => {
    try {
      const res = await axios.post("/api/v1/users", userData, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      });
      dispatch({ type: ADD_USERS, payload: res.data }); //response data to server
    } catch (err) {
      dispatch({
        type: ADD_ERROR,
        payload: err.response.data.msg
      });
    }
  };

  const updateUser = async team => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.put(`/api/v1/users/${team._id}`, team, config);
      dispatch({ type: UPDATE_USER, payload: res.data }); //response data to server
    } catch (err) {
      dispatch({
        type: UPDATE_ERROR,
        payload: err.response.msg
      });
    }
  };

  const deleteUser = async id => {
    try {
      await axios.delete(`/api/v1/users/${id}`);

      dispatch({ type: DELETE_USER, payload: id });
    } catch (err) {
      dispatch({ type: DELETE_ERROR });
    }
  };

  return (
    <AdminContext.Provider
      value={{
        teams: state.teams,
        error: state.error,
        loading: state.loading,
        adminUsers,
        addUsers,
        updateUser,
        deleteUser
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminState;
