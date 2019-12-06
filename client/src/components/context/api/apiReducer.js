import {
  AUTH_USER,
  AUTH_ERROR,
  USER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  UPDATE_USER,
  UPDATE_ERROR,
  DELETE_USER,
  DELETE_ERROR
} from "./types";

//state management

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        users: action.payload.data,
        isAuthenticated: true,
        loading: false
      };

    case AUTH_USER:
      return {
        ...state,

        //user: state.user.filter(u => u !== action.payload),
        user: [action.payload],
        isAuthenticated: false,
        loading: false
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    case USER_ERROR:
    case AUTH_ERROR:
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        users: null,
        error: action.payload
      };
    // case UPDATE_USER:
    //   return {
    //     ...state,
    //     users: state.users.map(user => {
    //       user._id === action.payload._id ? action.payload : user;
    //     }),
    //     loading: false
    //   };

    case DELETE_USER:
      return {
        ...state,
        users: state.data.filter(user => user.id !== action.id),
        loading: false,
        user: action.payload.data
      };

    default:
      return state;
  }
};
