import {
  GET_EVENTS,
  GET_EVENT,
  GET_EVENT_ERROR,
  GET_EVENTS_ERROR,
  CREATE_EVENT,
  CREATE_EVENT_ERROR,
  DELETE_EVENT,
  UPDATE_EVENT
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_EVENT:
      return {
        ...state,
        event: [action.payload.data],
        loading: false
      };

    case GET_EVENTS:
      return {
        ...state,
        events: action.payload.data,
        loading: false
      };

    case CREATE_EVENT:
      return {
        ...state,
        event: [action.payload.data],
        loading: false
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map(e =>
          e._id === action.payload._id ? action.payload : e
        ),
        loading: false
      };

    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(e => e.id !== action.payload),
        loading: false,
        user: action.payload.data
      };
    case GET_EVENT_ERROR:
    case CREATE_EVENT_ERROR:
    case GET_EVENTS_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
