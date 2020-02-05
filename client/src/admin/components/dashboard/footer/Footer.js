//footer

import React from "react";
import styled from "styled-components";
import { screenSmallerThan } from "../../globals/Util";
// function Copyright() {
//   return (
//     <p variant="body2" color="textSecondary" align="center">
//       {new Date().getFullYear()}
//       {"."}
//     </p>
//   );
// }

const Footer = () => {
  return (
    <MyFooter>
      <div className="footer-part">
        <div className="copyright-text">
          <p>
            Copyright &copy; 2020. Canterbury Music Teachers. All Rights
            Reserved
          </p>
        </div>

        <MyText>
          <p>
            Made With
            <i className="fas fa-heart text-icon"></i>
            by <span>Team Aspire 2</span>
          </p>
        </MyText>
      </div>
    </MyFooter>
  );
};

const MyFooter = styled.footer`
  margin-left: 8rem;
  height: 60px;

  .footer-part {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #111;
    padding: 0 4rem;
    height: 60px;
    margin-top: 10px;
  }
  ${screenSmallerThan.giant`
   flex-direction: column;
`}
  ${screenSmallerThan.phone`
     display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;

`}

  .copyright-text {
    font-size: 1.5rem;
    color: #aaa;
  }
  ${screenSmallerThan.phone`
   font-size:1rem;

`}
`;
const MyText = styled.div`
  font-size: 1.7rem;
  color: #bbb;
  ${screenSmallerThan.phone`
   font-size:0.7rem;

`}
  .text-icon {
    font-size: 2.3rem;
    margin: 0.6rem;
    color: tomato;
  }
`;

export default Footer;
