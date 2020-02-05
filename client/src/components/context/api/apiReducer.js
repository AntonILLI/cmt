import {
  AUTH_USER,
  ADMIN_USERS,
  AUTH_ERROR,
  USER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOAD,
  RESET_PASSWORD,
  RESET_FAIL,
  FORGOT_PASS,
  FORGOT_FAIL
} from "./types";

//state management

export default (state, action) => {
  switch (action.type) {
    case USER_LOAD:
      return {
        ...state,
        users: action.payload.data,
        isAuthenticated: false,
        loading: false
      };

    case AUTH_USER:
      return {
        ...state,
        user: [action.payload.data],
        isAuthenticated: false,
        loading: false
      };

    case ADMIN_USERS:
      return {
        ...state,
        teachers: action.payload.data,
        loading: false,
        error: null
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case FORGOT_PASS:
      return {
        ...state,
        users: action.payload.data
      };
    case RESET_PASSWORD:
      return {
        ...state,
        users: action.payload.data
      };
    case USER_ERROR:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case FORGOT_FAIL:
    case RESET_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        errorMessage: action.payload
      };
    // case FORGOT_FAIL:
    // case RESET_FAIL:
    //   return {
    //     ...state,
    //     errorData: [action.payload]
    //   };

    default:
      return state;
  }
};
