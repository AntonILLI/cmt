import React, { useReducer } from "react";
import axios from "axios";
import EventContext from "./eventContext";
import EventReducer from "./eventReducer";
import {
  GET_EVENT,
  GET_EVENT_ERROR,
  GET_EVENTS,
  GET_EVENTS_ERROR,
  CREATE_EVENT,
  CREATE_EVENT_ERROR,
  DELETE_EVENT,
  DELETE_EVENT_ERROR,
  UPDATE_EVENT
} from "./types";

const EventState = props => {
  const initialState = {
    events: [],
    error: null,
    loading: null
  };

  const [state, dispatch] = useReducer(EventReducer, initialState);

  const getEvents = async () => {
    try {
      const res = await axios.get("/api/v1/events", {});
      console.log(res);
      dispatch({ type: GET_EVENTS, payload: res.data });
    } catch (err) {
      dispatch({ type: GET_EVENTS_ERROR });
    }
  };

  const getEvent = async () => {
    try {
      const res = await axios.get("/api/v1/events/:id", {});
      console.log(res);
      dispatch({ type: GET_EVENT, payload: res.data });
    } catch (err) {
      dispatch({ type: GET_EVENT_ERROR });
    }
  };

  const createEvent = async userData => {
    try {
      const res = await axios.post("/api/v1/events/create", userData, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      });
      dispatch({ type: CREATE_EVENT, payload: res.data }); //response data to server
    } catch (err) {
      dispatch({
        type: CREATE_EVENT,
        payload: err.response.data.msg
      });
    }
  };

  const updateEvent = async (event, id) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.put(`/api/v1/event/${id}/update`, event, config);
      dispatch({ type: UPDATE_EVENT, payload: res.data }); //response data to server
    } catch (err) {
      dispatch({
        type: CREATE_EVENT_ERROR,
        payload: err.response.msg
      });
    }
  };

  const deleteEvent = async id => {
    try {
      await axios.delete(`/api/v1/events/${id}/delete`);

      dispatch({ type: DELETE_EVENT, payload: id });
    } catch (err) {
      dispatch({ type: DELETE_EVENT_ERROR });
    }
  };

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        error: state.error,
        loading: state.loading,
        getEvents,
        getEvent,
        createEvent,
        updateEvent,
        deleteEvent
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
