import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slide from "./Slide";

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
        <Slide
          title="Joc Matematica"
          description="Testeaza-ti aptitudinile de matematician in acest joc distractiv care te determina sa te misti cat poti de repede."
          image="https://img.freepik.com/premium-vector/cartoon-math-chalkboard-background_23-2148154590.jpg?w=2000"
          redirect='/math'
        />
        <Slide
          title="Joc Memorie"
          description="Acest joc iti va stimula abilitatea de a retine informatii pe termen scurt. Vezi cat de rapid esti sub presiune"
          image="https://via.placeholder.com/400/3D1D73/ffffff"
          redirect='/memory'

        />
        <Slide
          title="Joc Scris"
          description="Afla cate cuvinte poti scrie intr-un timp foarte scurt. Joaca si compara rezultatele cu prietenii tai. "
          image="https://via.placeholder.com/400/3D1D73/ffffff"
          redirect='/letters'

        />
        <Slide
          title="Joc Curatenie"
          description="Contribuie la curatarea planetei in acest joc distractiv."
          image="https://via.placeholder.com/400/3D1D73/ffffff"
          redirect='/clean'

        />

      </Slider>
    </StyledCarousel>
  );
};
