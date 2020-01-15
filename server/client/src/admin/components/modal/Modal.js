import React, { useRef, useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

const Context = React.createContext();

export function ModalProviders({ children }) {
  const modalRef = useRef();
  const [context, setContext] = useState();

  // make sure re-render is triggered after initial
  // render so that modalRef exists
  useEffect(() => {
    setContext(modalRef.current);
  }, []);

  return (
    <Container>
      <Context.Provider value={context}>{children}</Context.Provider>
      <div ref={modalRef} />
    </Container>
  );
}

export function Modal({ onClose, children, ...props }) {
  const modalNode = useContext(Context);

  return modalNode
    ? ReactDOM.createPortal(
        <Overlay>
          <Dialog {...props}>
            {children}
            <div onClick={onClose} />
          </Dialog>
        </Overlay>,
        modalNode
      )
    : null;
}

const fadeIn = keyframes`from { opacity: 0; }`;

const Container = styled.div`
  position: relative;
  z-index: 0;
`;

const Overlay = styled.div`
  animation: ${fadeIn} 100ms ease-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 200vh;
  background: rgba(0, 0, 0, 0.3);
`;

const Dialog = styled.div`
  background-image: linear-gradient(
    to left bottom,
    #43cea2,
    #00b5b3,
    #0099bb,
    #007ab4,
    #185a9d
  );
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  z-index: 10;
`;
