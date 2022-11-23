import { PageContainer } from "../Style";
import { Carousel } from "./Carousel";
import { ToggleButton } from "./ToggleButton";
import React from "react";
import { GameGallery } from "./GameGallery";

export const Home = () => {
  const [isGallery, setIsGallery] = React.useState(false);
  return (
    <>
      <PageContainer>
        <ToggleButton
          text="Gallery"
          toggled={isGallery}
          setToggled={setIsGallery}
        />
        {isGallery ? <GameGallery /> : <Carousel />}
      </PageContainer>
    </>
  );
};
