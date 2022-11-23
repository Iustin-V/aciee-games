import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideOne from "./Slide";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "150px",
      pauseOnHover:true,
      autoplay:true,
      autoplaySpeed:5000,
    };
    return (
      <div style={{ textAlign: "center", maxWidth: "800px",width: "100%",margin:"0 auto",padding:"40px 0"  }}>
        <Slider {...settings}>
          <SlideOne />
          <SlideOne />
          <SlideOne />
          <SlideOne />
        </Slider>
      </div>
    );
  }
}
