import React, { useContext, useEffect, Component } from "react";
import Piano from "./Piano";
import ContactForm from "./ContactForm";
import ApiContext from "../context/api/apiContext";

import "../../css/materialize.css";
import M from "materialize-css";
let piano = require("../../img/piano-3505109_1920.jpg");

const Card = () => {
  const apiContext = useContext(ApiContext);
  const { userLoad, users, loading, error } = apiContext;

  useEffect(() => {
    userLoad();

    //eslint-disable-next-line
  }, []);

  return (
    <>
      {users &&
        users.map((user, i) => (
          <div className="col s12 m6">
            <div className="card hoverable">
              <div className="card-image">
                <img
                  style={{
                    height: 300,
                    objectFit: "fill",
                    overflow: "none"
                  }}
                  src={require(`../../img/${user.photo}`)}
                />
                <span className="card-title">
                  <blockquote>
                    <p className="bold flow-text">
                      {`${user.firstname} ${user.lastname}`}
                    </p>
                  </blockquote>
                </span>
                <button
                  href=""
                  className="tooltipped btn-large btn-floating halfway-fab waves-effect waves-light brown darken-4 pulse scale-transition"
                  data-position="top"
                  data-tooltip="Hello!"
                >
                  <i className="material-icons">audiotrack</i>
                </button>
              </div>
              <div className="card-content">
                <p>{user.description}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

const Home = () => {
  useEffect(() => {
    //Explicitly initilize slider
    let slider = document.querySelectorAll(".slider");
    M.Slider.init(slider, {});
    //Auto init all other materialize scripts
    M.AutoInit();
    //eslint-disable-next-line
    let modal = document.querySelectorAll('.modal');
    console.log(modal);
    M.Modal.init(modal, { 
      dismissible: false,
      })
  }, []);

  return (
    <div>
      <div className="parallax-container valign-wrapper">
        <div className="row container center-align">
          <h1 id="header">Canterbury Music Teachers</h1>
        </div>
        <div id="firstImage" className="parallax">
          <img src="https://cdn.pixabay.com/photo/2018/11/03/06/37/abstract-3791494_960_720.jpg" />
        </div>
      </div>

      <div className="section white">
        <div className="row container">
          <h2 className="header">Our Teachers</h2>
          <p className="grey-text text-darken-3 lighten-3">
            Parallax is an effect where the background content or image in this
            case, is moved at a different speed than the foreground content
            while scrolling.
          </p>

          <div className="row">
            <Card />
          </div>
        </div>
      </div>

      <div className="parallax-container">
        <div className="parallax">
          <img src="https://cdn.pixabay.com/photo/2016/02/29/23/15/sheet-music-1229481_960_720.jpg" />
        </div>
      </div>

      <div className="section white">
        <div className="row container">
          <h2 className="header">News and Events</h2>
          <p className="grey-text text-darken-3 lighten-3">
            Parallax is an effect where the background content or image in this
            case, is moved at a different speed than the foreground content
            while scrolling.
          </p>

          <div className="slider">
            <ul className="slides">
              <li>
                <img src="https://cdn.pixabay.com/photo/2017/03/05/19/54/concert-2119610_960_720.jpg" />
                <div className="caption center-align">
                  <h3>This is our big Tagline!</h3>
                  <h5 className="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                  <a href="#">Link</a>
                </div>
              </li>
              <li>
                <img src="https://cdn.pixabay.com/photo/2017/07/28/15/40/trombone-2548982_960_720.jpg" />
                <div className="caption left-align">
                  <h3>Left Aligned Caption</h3>
                  <h5 className="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                  <a href="#">Link</a>
                </div>
              </li>
              <li>
                <img src="https://cdn.pixabay.com/photo/2014/12/07/15/03/orchestra-559759_960_720.jpg" />
                <div className="caption right-align">
                  <h3>Right Aligned Caption</h3>
                  <h5 className="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                  <a href="#">Link</a>
                </div>
              </li>
              <li>
                <img src="https://cdn.pixabay.com/photo/2015/05/23/21/05/cello-780980_960_720.jpg" />
                <div className="caption center-align">
                  <h3>This is our big Tagline!</h3>
                  <h5 className="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                  <a href="#">Link</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="parallax-container">
        <div className="parallax">
          <img src="https://cdn.pixabay.com/photo/2018/08/21/17/01/violin-3621667_960_720.jpg" />
        </div>
      </div>

      <div className="section white">
        <div className="row container">
          <h2 className="header">Contact Us</h2>

          <div className="row">

          <ContactForm />

          </div>
        </div>
      </div>

      <footer className="page-footer brown darken-4">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2019 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>

      <div className="section white">
        <div className="row container">
        </div>
      </div>
    </div>
  );
};

export default Home;