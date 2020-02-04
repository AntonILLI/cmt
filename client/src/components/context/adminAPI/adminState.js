import React, { useReducer } from "react";
import axios from "axios";
import AdminContext from "./adminContext";
import AdminReducer from "./adminReducer";
import {
  ADMIN_USERS,
  ADMIN_ERROR,
  ADMIN_USER,
  ADD_USERS,
  ADD_ERROR,
  DELETE_USER,
  DELETE_ERROR,
  UPDATE_USER,
  UPDATE_ERROR
} from "./types";

const AdminState = props => {
  const initialState = {
    // auth: localStorage.getItem("token"),
    teachers: [],
    error: null,
    loading: null,
    teacher: []
  };

  const [state, dispatch] = useReducer(AdminReducer, initialState);

  const adminUsers = async () => {
    // if (localStorage.token) {
    //   setAuthToken(localStorage.token);
    // }
    try {
      const res = await axios.get("/api/v1/users/admin", {});
      console.log(res);
      dispatch({ type: ADMIN_USERS, payload: res.data });
    } catch (err) {
      dispatch({ type: ADMIN_ERROR });
    }
  };

  const adminUser = async id => {
    const res = await axios.get(`/api/v1/users/${id}`, {});
    console.log(res);
    dispatch({ type: ADMIN_USER, payload: res.data });
  };

  const addUsers = async userData => {
    try {
      const res = await axios.post("/api/v1/users/create", userData, {
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

  //pass the params in the router as ObjectId in backend
  //findByAndUpdate will identify the passed params ==== ObjectId of Users
  //params form callModal, map find teachrs.id which will be matching data
  const updateUser = async (teacher, params) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.put(
        `/api/v1/users/${params}/update`,
        teacher,
        config
      );
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
      await axios.delete(`/api/v1/users/${id}/delete`);

      dispatch({ type: DELETE_USER, payload: id });
    } catch (err) {
      dispatch({ type: DELETE_ERROR });
    }
  };

  return (
    <AdminContext.Provider
      value={{
        teachers: state.teachers,
        error: state.error,
        loading: state.loading,
        teacher: state.teacher,
        adminUsers,
        adminUser,
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
