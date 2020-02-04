import {
  AUTH_USER,
<<<<<<< HEAD
  ADMIN_USERS,
=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
  AUTH_ERROR,
  USER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOAD,
  RESET_PASSWORD,
<<<<<<< HEAD
  RESET_FAIL,
  FORGOT_PASS,
  FORGOT_FAIL
=======
  FORGOT_PASS
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
} from "./types";

//state management

export default (state, action) => {
  switch (action.type) {
    case USER_LOAD:
      return {
        ...state,
        users: action.payload.data,
<<<<<<< HEAD
        isAuthenticated: false,
=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
        loading: false
      };

    case AUTH_USER:
      return {
        ...state,
        user: [action.payload.data],
        isAuthenticated: false,
        loading: false
      };

<<<<<<< HEAD
    case ADMIN_USERS:
      return {
        ...state,
        teachers: action.payload.data,
        loading: false,
        error: null
      };

=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
<<<<<<< HEAD
        loading: false
=======
        loading: true
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
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
<<<<<<< HEAD
    case USER_ERROR:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case FORGOT_FAIL:
    case RESET_FAIL:
=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
<<<<<<< HEAD
        errorMessage: action.payload
      };
    // case FORGOT_FAIL:
    // case RESET_FAIL:
    //   return {
    //     ...state,
    //     errorData: [action.payload]
    //   };
=======
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
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb

    default:
      return state;
  }
};
