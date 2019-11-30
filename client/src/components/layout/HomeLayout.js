import React from "react";
import p_natasha_profile from "../../img/p_natasha_profile.jpg";
import singing_kids from "../../img/singing-kids.jpg";
import violin from "../../img/violin-lesson2.jpg";
import voice from "../../img/voice-lesson3.jpg";
import anna from "../../img/p_anna_profile.jpg";
import trombon from "../../img/trombon3.jpg";
let piano = require("../../img/piano-3505109_1920.jpg");

const styles = {
  container: {
    backgroundImage: `url(${piano})`,
    backgroundSize: "cover",
    minHeight: 325,
    paddingTop: 6.5
  }
};

const HomeLayout = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid" style={styles.container}>
        <div className="container" style={{ color: "ivory" }}>
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>

      <div className="row m-0">
        <div className="d-flex justify-content-center col-md-8">
          <div className="card-deck">
            <div
              className="card border-dark text-center"
              style={{ width: "45rem" }}
            >
              <img
                className="card-img-top"
                src={p_natasha_profile}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Teacher's Name</h5>
                <p className="d-md-none d-lg-block card-text font-italic font-weight-light">
                  "With supporting text below as a natural lead-in to additional
                  content."
                </p>
              </div>
              <a href="#" className="btn btn-primary btn-lg btn-block m-0">
                Get in touch
              </a>
            </div>

            <div
              className="card border-dark text-center"
              style={{ width: "45rem" }}
            >
              <img className="card-img-top" src={anna} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Teacher's Name</h5>
                <p className="d-md-none d-lg-block card-text font-italic font-weight-light">
                  "With supporting text below as a natural lead-in to additional
                  content."
                </p>
              </div>
              <a href="#" className="btn btn-primary btn-lg btn-block m-0">
                Get in touch
              </a>
            </div>

            <div
              className="card border-dark text-center"
              style={{ width: "45rem" }}
            >
              <img
                className="card-img-top"
                src={trombon}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Teacher's Name</h5>
                <p className="d-md-none d-lg-block card-text font-italic font-weight-light">
                  "With supporting text below as a natural lead-in to additional
                  content."
                </p>
              </div>
              <a href="#" className="btn btn-primary btn-lg btn-block m-0">
                Get in touch
              </a>
            </div>
          </div>
        </div>

        <aside className="col-md-4 blog-sidebar">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={voice} alt="First slide" />
                <div className="carousel-caption">
                  <a to="/">
                    <h5 style={{ color: "ivory" }}>Event name</h5>
                  </a>
                  <p>Event description</p>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={singing_kids}
                  alt="Second slide"
                />
                <div className="carousel-caption">
                  <a href="/">
                    <h5 style={{ color: "ivory" }}>Event name</h5>
                  </a>
                  <p>Event description</p>
                </div>
              </div>

              <div className="carousel-item">
                <img className="d-block w-100" src={violin} alt="Third slide" />
                <div className="carousel-caption">
                  <a href="#">
                    <h5 style={{ color: "ivory" }}>Event name</h5>
                  </a>
                  <p>Event description</p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </aside>
      </div>
    </>
  );
};
export default HomeLayout;
