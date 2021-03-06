import {
  ADMIN_USERS,
  ADMIN_ERROR,
  ADMIN_USER,
  ADD_ERROR,
  ADD_USERS,
  DELETE_USER,
  UPDATE_USER
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case ADMIN_USERS:
      return {
        ...state,
        teachers: action.payload.data,
        loading: true,
        error: null
      };

    case ADD_USERS:
      return {
        ...state,
        teachers: action.payload.data,
        loading: false
      };
    case ADMIN_USER:
      return {
        ...state,
        teacher: [action.payload.data],
        loading: false,
        error: null
      };
    case UPDATE_USER:
      return {
        ...state,
        teachers: state.teachers.map(t =>
          t._id === action.payload._id ? action.payload : t
        ),
        loading: false
      };

    case DELETE_USER:
      return {
        ...state,
        teachers: state.teachers.filter(t => t.id !== action.payload),
        loading: false,
        user: action.payload.data
      };

    case ADD_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
