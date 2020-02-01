import React, { useState, useEffect, useContext } from "react";

import EventTable from "../dashboard/eventTable";
import AbsoluteWrapper from "../globals/AbsoluteWrapper";
import EventContext from "../../../components/context/eventAPI/eventContext";

const EventTableList = ({ location }) => {
  const eventContext = useContext(EventContext);

  const { getEvents, events, deleteEvent, loading, error } = eventContext;
  console.log("events:", events);

  useEffect(() => {
    getEvents();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <AbsoluteWrapper>
        <EventTable
          events={events}
          deleteEvent={deleteEvent}
          location={location}
        />
      </AbsoluteWrapper>
    </>
  );
};

export default EventTableList;
