//event table pagination component
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { setColor } from "../../globals/colors";
import { screenSmallerThan } from "../../globals/Util";
import Right from "../svg-icons/Right";
import Left from "../svg-icons/Left";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 60px;
`;
const PaginationLink = styled(Link)`
  font-size: 17px;
  margin: 0px 6px;
  color: #009688;
  display: flex;
  text-decoration: none;
  align-items: center;
  ${props =>
    props.disabled &&
    `
opacity:0.5;
pointer-events:none;
cursor:default;
`};
  ${screenSmallerThan.phone`
span{
  dispaly:none;
}
`}
`;
const PageLink = styled(Link)`
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 16.5px;
  font-weight: 700;
  margin: 0px 8px;
  text-decoration: none;
  border-radius: 6px;
  text-align: center;
  ${props =>
    props.selected
      ? `
  color:#ffffff;
  background-color:${setColor.primaryColor}!important;
`
      : `
color:${setColor.primaryColor}!important;
background-color:${setColor.secoundryColor}!important;
`}
`;

const ThreeBullet = styled.strong`
  font-size: 20px;
  color: #878787;
  font-weight: 700;
`;

const TablePagination = ({ currentPage, totalPages, basePageLink }) => {
  let putBullet = false;
  const elements = [];
  if (totalPages <= 1) {
    return null;
  }
  if (totalPages > 3) {
    elements.push(
      <PaginationLink
        key="back"
        to={`${basePageLink}?page=${currentPage - 1}`}
        disabled={currentPage === 1}
      >
        <Left color="#009688" />
        <span>Back</span>
      </PaginationLink>
    );
  }

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === currentPage ||
      i === totalPages ||
      i === currentPage - 1 ||
      i === currentPage + 1 ||
      i === currentPage + 2 ||
      (i === 1 && currentPage + 4 > totalPages)
    ) {
      elements.push(
        <PageLink
          key={i}
          to={`${basePageLink}?page=${i}`}
          selected={i === currentPage}
        >
          {i}
        </PageLink>
      );
    } else if (!putBullet && totalPages > 3 && elements.length > 1) {
      elements.push(<ThreeBullet key="bullet">...</ThreeBullet>);
      putBullet = true;
    }
  }
  if (totalPages > 3) {
    elements.push(
      <PaginationLink
        key="next"
        to={`${basePageLink}?page=${currentPage + 1}`}
        disabled={currentPage === 1}
      >
        <Right color="#009688" />
        <span>Next</span>
      </PaginationLink>
    );
  }
  return <Main>{elements}</Main>;
};

export default TablePagination;
