/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const images = [
    "/assets/slide1.png",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  const buttonStyle = {
    width: "30px",
    background: "white",
    border: "1px solid #F5333F",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }} className="ml-4 lg:ml-[43px]">
        <img src="/assets/chevron-left.svg" alt="img" />
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }} className="mr-4 lg:mr-[43px]">
        <img className="" src="/assets/chevron-right.svg" alt="img" />
      </button>
    ),
  };

  return (
    <Slide {...properties} autoplay={false}>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }}></div>
      </div>
    </Slide>
  );
};

export default Slider;
