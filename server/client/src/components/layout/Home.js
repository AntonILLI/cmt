import React, { useContext, useEffect } from "react";
import Piano from "./Piano";
import ApiContext from "../context/api/apiContext";
import EventContext from "../context/eventAPI/eventContext";
import LoadingComponent from "../loading/LoadingComponent";
import "../../css/materialize.css";
import "../../css/sliders.css";
import "../../css/slider-animations.css";
import M from "materialize-css";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

let piano = require("../../img/piano-3505109_1920.jpg");

const Card = ({ users }) => {
  return (
    <>
      {users &&
        users.map((user, i) => (
          <div key={i} className="col s12 m6">
            <div className="card hoverable">
              <div className="card-image">
                <img
                  style={{
                    height: 300,
                    objectFit: "fill",
                    overflow: "none"
                  }}
                  src={require(`../../../public/uploads/${user.photo}`)}
                  alt=""
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
  const apiContext = useContext(ApiContext);
  const eventContext = useContext(EventContext);
  const { userLoad, users, loading } = apiContext;
  const { getEvents, events } = eventContext;
  console.log("events:", events);
  useEffect(() => {
    userLoad();

    getEvents();

    //Explicitly initilize slider
    let slider = document.querySelectorAll(".slider");
    M.Slider.init(slider, {});
    //Auto init all other materialize scripts
    M.AutoInit();

    //eslint-disable-next-line
  }, []);

  var settings = {
    autoplay: 2000,
    infinite: true,
    touchDisabled: true
  };

  // if (users == null && loading) {
  //   return <LoadingComponent />;
  // }

  return (
    <div>
      <div className="parallax-container valign-wrapper">
        <div className="row container center-align">
          <h1 id="header">Canterbury Music Teachers</h1>
        </div>
        <div id="firstImage" className="parallax">
          <img
            alt=""
            src="https://cdn.pixabay.com/photo/2018/11/03/06/37/abstract-3791494_960_720.jpg"
          />
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
            <Card users={users} />
          </div>
        </div>
      </div>

      <div className="parallax-container">
        <div className="parallax">
          <img
            alt=""
            src="https://cdn.pixabay.com/photo/2016/02/29/23/15/sheet-music-1229481_960_720.jpg"
          />
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

          <Slider {...settings} className="slider-wrapper">
            {events.map((e, index) => (
              <div key={index} className="slider-content">
                <img
                  alt=""
                  src={require(`../../../public/uploads/${e.photo}`)}
                  style={{
                    width: "100%",
                    height: "100vh",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  }}
                />
                <div className="inner">
                  <h1>{e.title}</h1>
                  <p>{e.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="parallax-container">
        <div className="parallax">
          <img
            alt=""
            src="https://cdn.pixabay.com/photo/2018/08/21/17/01/violin-3621667_960_720.jpg"
          />
        </div>
      </div>

      <div className="section white">
        <div className="row container">
          <h2 className="header">Contact Us</h2>

          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col l6 m6 s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input id="first_name" type="text" className="validate" />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col l6 m6 s12">
                  <i className="material-icons prefix">phone</i>
                  <input id="icon_telephone" type="tel" className="validate" />
                  <label htmlFor="icon_telephone">Telephone</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input id="email" type="email" className="validate" />
                  <label htmlFor="email">Email</label>
                  <span
                    className="helper-text"
                    data-error="wrong"
                    data-success="right"
                  >
                    Helper text
                  </span>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea
                    id="icon_prefix2"
                    className="materialize-textarea"
                  ></textarea>
                  <label htmlFor="icon_prefix2">Message</label>
                </div>
              </div>
            </form>
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
          <Piano />
        </div>
      </div>
    </div>
  );
};

export default Home;
