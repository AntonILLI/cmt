import { ADMIN_USERS, ADMIN_ERROR } from "./types";

export default (state, action) => {
  switch (action.type) {
    case ADMIN_USERS:
      return {
        ...state,
        teams: action.payload.data,
        loading: false
      };

    default:
      return state;
  }
};
