import React from "react";
import TeditForm from "../dashboard/form/TeditForm";
import { Modal } from "./Modal";
import styled from "styled-components";

function CallModal({ onClose }) {
  return (
    <div>
      <MyModalWrapper
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <MyModal>
          <TeditForm onClose={onClose} />
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
  box-shadow: 0 0 20px 0 rgba(0, 0, 97, 0.5);
  overflow: auto;
  border-radius: 4px;
`;
export const MyModal = styled.div`
  position: absolute;
  margin: 10rem 28rem 20rem 10rem;
  background-color: #fff;
`;
export default CallModal;
