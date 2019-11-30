import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_USER,
  AUTH_ERROR,
  USER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED
} from "../types";

//state management

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        users: action.payload
      };

    case AUTH_USER:
      return {
        ...state,
        //user: state.user.filter(u => u !== action.payload),
        user: [action.payload],
        isAuthenticated: true,
        loading: true
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false,
        loading: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    case REGISTER_FAIL:
    case USER_ERROR:
    case AUTH_ERROR:
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };

    default:
      return state;
  }
};
