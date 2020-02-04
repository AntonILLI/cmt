//navigation bar main component slide animation and list linkin menu bar

<<<<<<< HEAD
import React, { useState, useContext } from "react";
=======
import React, { useState } from "react";
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../../images/Music.jpg";
import img2 from "../../images/Music2.jpg";
import img3 from "../../images/Music3.jpg";
<<<<<<< HEAD
import ApiContext from "../../../../components/context/api/apiContext";
=======

>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
const Navigation = () => {
  const [background, setBackground] = useState(`${img}`);

  const [font, setFont] = useState("#deaa86");

  const setStyle = (background, font) => {
    setBackground(background);
    setFont(font);
  };
<<<<<<< HEAD
  const apiContext = useContext(ApiContext);

  const { logout, loading, isAuthenticated } = apiContext;
  const handleLogout = e => {
    e.preventDefault();
    logout();
  };

  const MyNavigation = styled.div`
    position: fixed !important;
=======

  const MyNavigation = styled.div`
    position: fixed;
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
    left: -32rem;
    width: 38rem;
    height: 100%;

    background: linear-gradient(
        to top,
        rgba(34, 32, 41, 1),
        rgba(34, 32, 41, 0.8)
      ),
      url(${background}) center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 5 !important;
    transition: left 0.8s cubic-bezier(1, 0, 0, 1);

    .navigation-heading {
      font-family: "Josefin Sans", sans-serif;
      font-size: 3.5rem;
      font-weight: 300;
<<<<<<< HEAD
      margin-top: 80px;
      padding-bottom: 40px;
=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
      letter-spacing: 0.2rem;
      color: ${font};
      text-align: center;
    }
  `;

<<<<<<< HEAD
=======
  // const MySearch = styled(Form)`
  //   position: relative !important;
  //   margin-top: 20px !important;

  //   .navigation-search-input {
  //     width: 30rem !important;
  //     padding: 1rem 2rem !important;
  //     background-color: rgba(0, 0, 0, 0.3) !important;
  //     font-family: "Josefin Sans", sans-serif !important;
  //     font-size: 1.6rem !important;
  //     color: ${font}!important;
  //     letter-spacing: 0.1rem !important;
  //     outline: none !important;
  //     margin-left: 3rem !important;
  //     border: 0.1rem solid #555 !important;
  //     border-radius: 10rem !important;
  //     transition: background-color 0.3s !important;
  //   }

  //   .navigation-search-input:focus {
  //     background-color: rgba(0, 0, 0, 0.1) !important;
  //     border: solid 1px ${font} !important;
  //   }

  //   .navigation-search-btn {
  //     border: none;
  //     background-color: transparent;
  //     color: ${font};
  //     font-size: 1.7rem;
  //     position: absolute;
  //     top: 1rem;
  //     right: 5.8rem;
  //     cursor: pointer;
  //   }

  //   .navigation-search-btn:focus {
  //     outline: none !important;
  //   }
  // `;

>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
  const MyNavigationList = styled.ul`
    list-style: none;
    padding: 0;
    height: 28rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .navigation-item {
      position: relative;
    }

    .navigation-link {
      color: #fff;
      font-size: 1.8rem;
      font-weight: 400;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      text-decoration: none;
      transition: color 0.9s;
    }

    .navigation-link::before {
      content: "";
      width: 0rem;
      height: 0.1rem;
      background-color: ${font};
      position: absolute;
      top: 1rem;
      left: -4rem;
      transition: width 0.5s cubic-bezier(1, 0, 0, 1);
    }

    .navigation-link::after {
      content: "";
      width: 0rem;
      height: 0.1rem;
      background-color: ${font};
      position: absolute;
      top: 1rem;
      right: -4rem;
      transition: width 0.5s cubic-bezier(1, 0, 0, 1);
    }

    .navigation-link:hover {
      color: ${font};
    }

    .navigation-link:hover::before,
    .navigation-link:hover::after {
      width: 3.5rem;
    }
  `;

  const ButtonWrapper = styled.div`
    display: flex;
    padding: 0 !important;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 70px;
  `;
  const ColorButton = styled.button`
    margin: 10px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 200;
    outline: none;
    color: ${props => props.color};
    background-color: ${props => props.bcolor};
    border: solid 1px #eee;
    transition: border-width 0.6s linear;

    &:hover {
      background: transparent;
      color: ${props => props.bcolor};
      text-decoration: none;
      cursor: pointer;
      border-width: 2.5px;
    }
  `;

  const MyCopyright = styled.div`
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  `;

  return (
    <MyNavigation className="navigation">
      <div className="navigation-header">
        <h1 className="navigation-heading">Canterbury Music School</h1>

        {/* <MySearch className="broswe-default">
          <input
            type="text"
            className="navigation-search-input browser-default"
            placeholder="Search..."
          />
          <div className="navigation-search-btn browser-default">
            <i className="fas fa-search"></i>
          </div>
        </MySearch> */}
      </div>

      <MyNavigationList className="browser-default">
        <li className="navigation-item">
          <Link to="/admin" className="navigation-link">
            All Teachers
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/admin/profile" className="navigation-link">
            Add Teacher
          </Link>
        </li>

        <li className="navigation-item">
          <Link to="/admin/event" className="navigation-link">
            Add Event
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/admin/eventTable" className="navigation-link">
            Event Table
          </Link>
        </li>

        <li className="navigation-item ">
          <Link to="/" className="navigation-link">
            Home
          </Link>
        </li>

        <li className="navigation-item ">
<<<<<<< HEAD
          <Link
            to="/"
            onClick={e => handleLogout(e)}
            className="navigation-link"
          >
=======
          <Link to="/" className="navigation-link">
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
            log-out
          </Link>
        </li>
      </MyNavigationList>
      <ButtonWrapper>
        <ColorButton
          className="browser-default"
          color="#fdfdfd"
          bcolor="#deaa86"
          onClick={() => setStyle(`${img}`, "#deaa86")}
        >
          Theme 1
        </ColorButton>
        <ColorButton
          className="browser-default"
          color="#fdfdfd"
          bcolor="#a83255"
          onClick={() => setStyle(`${img2}`, "#a83255")}
        >
          Theme 2
        </ColorButton>

        <ColorButton
          className="browser-default"
          color="#fdfdfd"
          bcolor="#b85d1c"
          onClick={() => setStyle(`${img3}`, "#b85d1c")}
        >
          Theme 3
        </ColorButton>
      </ButtonWrapper>

      <MyCopyright className="copyright">
<<<<<<< HEAD
        <p>&copy; 2020. Canterbury Music Teachers. All Rights Reserved</p>
=======
        <p>&copy; 2019. Canterbury Music School. All Rights Reserved</p>
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
      </MyCopyright>
    </MyNavigation>
  );
};

export default Navigation;
