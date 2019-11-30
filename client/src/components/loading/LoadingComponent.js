import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
//import ReactLoading from "react-loading";
//import "bootstrap/dist/css/bootstrap.css";
import * as musicData from "./music.json";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: musicData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const style = {
  backgroundColor: "#303030",
  color: "white"
};

const LaodingComponent = () => {
  return (
    <div style={style}>
      <FadeIn>
        <div className="d-flex justify-content-center align-items-center">
          <h1>Loading.....</h1>
          <Lottie options={defaultOptions} height={800} width={"100%"} />
        </div>
      </FadeIn>
    </div>
  );
};
export default LaodingComponent;
