import React, { useContext, useState, useEffect } from "react";
import EditForm from "../dashboard/form/EditForm";
import { Modal } from "./Modal";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import EventContext from "../../../components/context/eventAPI/eventContext";

function EventCallModal() {
  const eventContext = useContext(EventContext);
  const { getEvents, events, loading, error } = eventContext;

  useEffect(() => {
    getEvents();
    //eslint-disable-next-line
  }, []);

  const { id } = useParams();
  console.log("idis", id);
  // console.log("history:", history);

  const Evalue = events.filter(e => e._id === id);

  // console.log("value:", Tvalue);
  return (
    <div>
      <MyModalWrapper
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <MyModal>
          <EditForm Evalue={Evalue} id={id} />
        </MyModal>
      </MyModalWrapper>
    </div>
  );
}

const MyModalWrapper = styled(Modal)`
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  position: absolute;
  outline: none;
  overflow: auto;
  border-radius: 4px;
`;
export const MyModal = styled.div`
  position: absolute;
  margin: 10rem;
  background-color: #fff;
`;
export default EventCallModal;
