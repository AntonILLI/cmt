import React from "react";

import EventTable from "../dashboard/eventTable";
import AbsoluteWrapper from "../globals/AbsoluteWrapper";
import { useParams } from "react-router";
const EventTableList = ({ location }) => {
  const { id } = useParams();

  return (
    <>
      <AbsoluteWrapper>
        <EventTable userId={id} location={location} />
      </AbsoluteWrapper>
    </>
  );
};

export default EventTableList;
