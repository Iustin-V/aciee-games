import { PageContainer } from "../Style";
import { Carousel } from "./Carousel";
import { ToggleButton } from "./ToggleButton";
import React from "react";
import { GameGallery } from "./GameGallery";
import {Navbar} from "./Navbar";

export const Home = () => {
  const [isGallery, setIsGallery] = React.useState(false);
  return (
    <>
        <Navbar />
      <PageContainer>
        <ToggleButton
          text="Gallery mode"
          toggled={isGallery}
          setToggled={setIsGallery}
        />
        {isGallery ? <GameGallery /> : <Carousel />}
      </PageContainer>
    </>
  );
};
