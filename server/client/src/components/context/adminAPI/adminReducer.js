import { ADMIN_USERS, ADMIN_ERROR, ADD_USERS } from "./types";

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
        teams: [action.payload.data, ...state.teams],
        loading: false
      };

    default:
      return state;
  }
};
