import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slide from "./Slide";

const StyledCarousel = styled.div`
  text-align: center;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 0 0 0;
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

export const Carousel = (props: {
  gameArray: {
    title: string;
    description: string;
    image: string;
    redirect: string;
  }[];
}) => {
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
        {props?.gameArray?.map((gameData, index) => {
          return (
            <Slide
              title={gameData.title}
              description={gameData.description}
              image={gameData.image}
              redirect={gameData.redirect}
            />
          );
        })}
      </Slider>
    </StyledCarousel>
  );
};
