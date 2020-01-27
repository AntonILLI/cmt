//event table , table component

import React from "react";

import { setColor } from "../../globals/colors";
import styled, { css } from "styled-components"; //css
import { screenSmallerThan } from "../../globals/Util";
import TablePagination from "../TablePagination";
import { rgba } from "polished";
import EventImg from "../EventImg";
import RemoveIcon from "../svg-icons/Remove";
import { Link } from "react-router-dom";
import EditIcon from "../svg-icons/Edit";
import Moment from "react-moment";
import "moment-timezone";
const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`;
const T = styled.table`
  width: 100%;
  border-collapse: collapse;
  /* space between columns title */
  tbody:before {
    content: "-";
    display: block;
    line-height: 0.6em;
    color: transparent;
  }
`;

const Th = styled.th`
  color: ${setColor.textColor};
  font-size: 18px;
  font-weight: 700;
  margin: 20px 8px 8px 8px;
  text-align: ${props => (props.align ? props.align : "left")};
  width: ${props => props.width && `${props.width}px`};
  ${props => props.css && css(...props.css)};
  ${screenSmallerThan.desktop`
    ${props => props.hidenOnDesktop && `display:none`}
  `}
   ${screenSmallerThan.tablet`
    ${props => props.hidenOnTablet && `display:none`}
  `}
     ${screenSmallerThan.phone`
    ${props => props.hidenOnPhone && `display:none`}
  `}

`;

const Tr = styled.tr`
  border-bottom: 2px solid ${rgba(151, 151, 151, 50)};
  ${props => props.css && css(...props.css)};
`;
const Td = styled.td`
  padding: 2px;
  font-size: 17px;
  ${props => props.css && css(...props.css)};
  ${screenSmallerThan.desktop`
    ${props => props.hidenOnDesktop && `display:none`}
  `}
   ${screenSmallerThan.tablet`
    ${props => props.hidenOnTablet && `display:none`}
  `}
     ${screenSmallerThan.phone`
    ${props => props.hidenOnPhone && `display:none`}
  `}


`;

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

const Table = ({
  data,
  deleteEvent,
  rowConfig: { uniqueKey = "id", css, onClick },
  currentPage,
  totalPages,
  basePageLink
}) => {
  //column

  const columns = {
    title: {
      key: "title",
      label: "Title",
      content: items => (
        <TitleCol>
          <EventImg
            img={require(`../../../../../public/uploads/${items.photo}`)}
            title={items.title}
          />
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
    createdAt: {
      key: "createBy",
      label: "Post Date",
      hideOnTablet: true,
      content: items => <Moment format="D MMM YYYY">{items.createdAt}</Moment>
    },
    editLink: {
      key: "EditLink",
      label: "Edit",
      content: item => (
        /* <div>
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
        </div> */
        <Link to={`/admin/eventModalPage/${item._id}`}>
          <EditIcon color={setColor.primaryColor} />
        </Link>
      )
    },
    removeLink: {
      key: "RemoveLink",
      label: "Delete",
      content: item => (
        <>
          <ABtn onClick={() => deleteEvent(item._id)}>
            <RemoveIcon color={setColor.removeColor} />
          </ABtn>
        </>
      )
    }
  };

  const headerColumns = () =>
    Object.keys(columns).map(key => (
      <Th
        key={key}
        align={columns[key].align}
        width={columns[key].width}
        css={columns[key].css}
        hideOnDesktop={columns[key].hideOnDesktop}
        hideOnTablet={columns[key].hideOnTablet}
        hideOnPhone={columns[key].hideOnPhone}
      >
        {columns[key].label}
      </Th>
    ));

  //data   fetch the data to columns//each row(td,tr) has id
  //arrow function dont use apply() apply refer to this but arrow always means to this in the function
  const content = (item, key) =>
    columns[key].content ? columns[key].content(item) : item[key];
  const cell = (item, key) => (
    <Td
      css={columns[key].css}
      key={key}
      hideOnDesktop={columns[key].hideOnDesktop}
      hideOnTablet={columns[key].hideOnTablet}
      hideOnPhone={columns[key].hideOnPhone}
    >
      {content(item, key)}
    </Td>
  );
  const row = item => (
    <Tr key={item[uniqueKey]} css={css} onClick={e => onClick(e, item)}>
      {Object.keys(columns).map(key => cell(item, key))}
    </Tr>
  );

  return (
    <Main>
      <T>
        <thead>
          <tr>{headerColumns()}</tr>
        </thead>
        <tbody>{data.map(item => row(item))}</tbody>
      </T>
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePageLink={basePageLink}
      />
    </Main>
  );
};

export default Table;
