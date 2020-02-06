//Event Table Page

import React from "react";
import styled from "styled-components";
import Table from "../Table";
import Modal from "styled-react-modal";
import { secoundryColor } from "../../globals/colors";

const Main = styled.div`
  height: 100%;
  padding: 20px 8px 0px 8px;
  margin: 0 5rem 18rem 8rem;
`;

const MyTitle = styled.div`
  padding: 5rem;
  text-align: center;
  color: #b85d1c;

  .common-heading {
    font-size: 4rem;
    font-weight: 300;
    letter-spacing: 0.2rem;
  }

  .small-underline {
    width: 9rem;
    height: 0.1rem;
    background-color: #b85d1c;
    margin: 0 auto 1rem auto;
  }

  .big-underline {
    width: 9rem;
    height: 0.1rem;
    margin: auto;
    background-color: #b85d1c;
  }
`;

export const MyModalWrapper = Modal.styled`
display: flex;
justify-content:space-between;
z-index: 1000;
height: 75%;
width: 78%;
position: absolute;
left: 15%;
right: 20%;
top: 10rem;
bottom: 0;
border-radius: 1rem;
opacity: ${props => props.opacity};
background-color: rgba(255,255,255,0.75);

`;

export const MyModal = styled.div`
  position: absolute;
  left: 2rem;
  right: 2rem;
  top: 2rem;
  bottom: 2rem;
  margin-top: 1rem;
  background-color: #fff;
  box-shadow: 0 0 7px 0 rgba(0, 0, 97, 0.5);
  overflow: auto;
  border-radius: 4px;
  outline: none;
`;

const rowConfig = {
  uniqueKey: "id",
  css: `
  height:73px;
  &:hover{
    background-color: ${secoundryColor};
  }`,
  onClick: (e, item) => console.log("the row of item has been clicked", item)
};

const EventTable = ({ location, events, deleteEvent }) => {
  // console.log('id:',id)
  // console.log(location.search);
  const params = new URLSearchParams(location.search);
  // console.log(params);

  // const [isOpen, setIsOpen] = useState(false);
  // const [opacity, setOpacity] = useState(0);

  // useEffect(() => {
  //   setIsOpen(isOpen);
  //   //eslint-disable-next-line
  // }, [isOpen]);

  // const toggleModal = e => {
  //   setIsOpen(!isOpen);
  // };

  // const closeModal = e => {
  //   setIsOpen(false);
  // };
  // const afterOpen = () => {
  //   setTimeout(() => {
  //     setOpacity(1);
  //   }, 10);
  // };

  // const beforeClose = () => {
  //   return new Promise(resolve => {
  //     setOpacity(0);
  //     setTimeout(resolve, 200);
  //   });
  // };

  // const params = id;

  return (
    <Main>
      <MyTitle>
        <h1 className="common-heading">Event List</h1>
        <div className="underline">
          <div className="small-underline"></div>
          <div className="big-underline"></div>
        </div>
      </MyTitle>

      <Table data={events} deleteEvent={deleteEvent} rowConfig={rowConfig} />
    </Main>
  );
};

{
  /* currentPage={params.has("page") ? parseInt(params.get("page")) : 1} */
}
{
  /* totalPages={10}
        basePageLink="/admin/eventTable" */
}

export default EventTable;
