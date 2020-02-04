//footer

import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
import { screenSmallerThan } from "../../globals/Util";
// function Copyright() {
//   return (
//     <p variant="body2" color="textSecondary" align="center">
//       {new Date().getFullYear()}
//       {"."}
//     </p>
//   );
// }
=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb

const Footer = () => {
  return (
    <MyFooter>
      <div className="footer-part">
        <div className="copyright-text">
          <p>
<<<<<<< HEAD
            Copyright &copy; 2020. Canterbury Music Teachers. All Rights
=======
            Copyright &copy; 2019. Canterbury Music Teachers. All Rights
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
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
<<<<<<< HEAD
  ${screenSmallerThan.giant`
   flex-direction: column;
`}
  ${screenSmallerThan.phone`
     display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;

`}
=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb

  .copyright-text {
    font-size: 1.5rem;
    color: #aaa;
  }
<<<<<<< HEAD
  ${screenSmallerThan.phone`
   font-size:1rem;

`}
=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
`;
const MyText = styled.div`
  font-size: 1.7rem;
  color: #bbb;
<<<<<<< HEAD
  ${screenSmallerThan.phone`
   font-size:0.7rem;

`}
=======

>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
  .text-icon {
    font-size: 2.3rem;
    margin: 0.6rem;
    color: tomato;
  }
`;

export default Footer;
