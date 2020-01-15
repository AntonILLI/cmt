//Event Table Page

import React, { useState } from "react";
import styled from "styled-components";
import Table from "../Table";
import EventImg from "../EventImg";
import img from "../../images/Sample.jpg";
import RemoveIcon from "../svg-icons/Remove";
import EditIcon from "../svg-icons/Edit";
import Modal from "styled-react-modal";
import EditForm from "../form/EditForm";

import { secoundryColor, setColor } from "../../globals/colors";

const Main = styled.div`
  height: 100%;
  padding: 20px 8px 0px 8px;
  margin: 0 5rem 8rem 8rem;
`;
//flex direction row is default
const TitleCol = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  margin-left: 8px;
`;

const ABtn = styled.div`
  cursor: pointer;
  background-color: transparent;
  outline: none !important;
  border: none !important;
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
height: 70%;
width: 70%;
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

const users = [
  {
    id: 1,
    title: "this week's event",
    description: "weekly music lesson for free",
    img: "",
    postBy: "3days ago"
  },
  {
    id: 2,
    title: "next week's event",
    description: "music festival",
    img: `${img}`,

    postBy: "3days ago"
  },
  {
    id: 3,
    title: "next month's event",
    description: "piano competition",
    img: `${img}`,
    postBy: "3days ago"
  },
  {
    id: 4,
    title: "this week's event",
    description: "weekly music lesson for free",
    img: "",
    postBy: "3days ago"
  },
  {
    id: 5,
    title: "next week's event",
    description: "music festival",
    img: `${img}`,
    postBy: "3days ago"
  },
  {
    id: 6,
    title: "next month's event",
    description: "piano competition",
    img: `${img}`,
    postBy: "3days ago"
  }
];
// background-color:#d8d8d852;
const rowConfig = {
  uniqueKey: "id",
  css: `
  height:73px;
  &:hover{
    background-color: ${secoundryColor};
  }`,
  onClick: (e, item) => console.log("the row of item has been clicked", item)
};

const EventTable = ({ location }) => {
  // console.log(location.search);
  const params = new URLSearchParams(location.search);
  // console.log(params);

  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  // useEffect(() => {
  //   setIsOpen(isOpen);
  //   //eslint-disable-next-line
  // }, [isOpen]);

  const toggleModal = e => {
    setIsOpen(!isOpen);
  };

  const closeModal = e => {
    setIsOpen(false);
  };
  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1);
    }, 10);
  };

  const beforeClose = () => {
    return new Promise(resolve => {
      setOpacity(0);
      setTimeout(resolve, 200);
    });
  };

  // const params = id;

  const columns = {
    title: {
      key: "title",
      label: "Title",
      content: items => (
        <TitleCol>
          <EventImg img={items.img} title={items.title} />
          <Title>{items.title}</Title>
        </TitleCol>
      )
    },
    description: {
      key: "description",
      label: "Description",
      width: 700,
      hideOnPhone: true
    },
    postBy: {
      key: "postBy",
      label: "Post Date",
      hideOnTablet: true
    },
    editLink: {
      key: "EditLink",
      label: "Edit",
      content: item => (
        <div>
          <ABtn onClick={toggleModal}>
            <EditIcon color={setColor.primaryColor} />
          </ABtn>

          <div>
            <MyModalWrapper
              isOpen={isOpen}
              toggle={setIsOpen}
              onBackgroundClick={toggleModal}
              onEscapeKeydown={toggleModal}
              afterOpen={afterOpen}
              beforeOpen={beforeClose}
              opacity={opacity}
              backgroundProps={{ opacity }}
            >
              <MyModal>
                <EditForm onClick={closeModal} />
              </MyModal>
            </MyModalWrapper>
          </div>
        </div>
      )
    },
    removeLink: {
      key: "RemoveLink",
      label: "Delete",
      content: item => (
        <ABtn onClick={() => console.log(item.title)}>
          <RemoveIcon color={setColor.removeColor} />
        </ABtn>
      )
    }
  };

  return (
    <Main>
      <MyTitle>
        <h1 className="common-heading">Event List</h1>
        <div className="underline">
          <div className="small-underline"></div>
          <div className="big-underline"></div>
        </div>
      </MyTitle>

      <Table
        currentPage={params.has("page") ? parseInt(params.get("page")) : 1}
        totalPages={10}
        basePageLink="/admin/eventTable"
        columns={columns}
        data={users}
        rowConfig={rowConfig}
      />
    </Main>
  );
};

export default EventTable;
