import {
  ADMIN_USERS,
  ADMIN_ERROR,
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
        teams: action.payload.data,
        loading: false
      };

    case ADD_USERS:
      return {
        ...state,
        teams: action.payload.data,
        loading: false
      };
    case UPDATE_USER:
      return {
        ...state,
        contacts: state.teams.map(team =>
          team._id === action.payload._id ? action.payload : team
        ),
        loading: false
      };

    case DELETE_USER:
      return {
        ...state,
        teams: state.teams.filter(team => team.id !== action.payload),
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
