import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideOne from "./Slide";
import styled from "styled-components";

const StyledCarousel = styled.div`
  text-align: center;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 70px 0;
  opacity: 0;
  transform: translateY(30%);
  @keyframes slide-in-anim {
    20% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: slide-in-anim 0.8s ease-out forwards;

`;

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "150px",
    pauseOnHover: true,
    autoplay: false,
    autoplaySpeed: 5000,
  };
  return (
    <StyledCarousel>
      <Slider {...settings}>
        <SlideOne />
        <SlideOne />
        <SlideOne />
        <SlideOne />
      </Slider>
    </StyledCarousel>
  );
};
