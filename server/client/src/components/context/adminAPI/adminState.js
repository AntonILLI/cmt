import React, { useReducer } from "react";
import axios from "axios";
import AdminContext from "./adminContext";
import AdminReducer from "./adminReducer";
import { ADMIN_USERS, ADMIN_ERROR, ADD_USERS, ADD_ERROR } from "./types";

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
      const res = await axios.post("/api/v1/users", userData);
      dispatch({ type: ADD_USERS, payload: res.data }); //response data to server
    } catch (err) {
      dispatch({
        type: ADD_ERROR,
        payload: err.response.message
      });
    }
  };

  return (
    <AdminContext.Provider
      value={{
        teams: state.teams,
        error: state.error,
        loading: state.loading,
        adminUsers,
        addUsers
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminState;
