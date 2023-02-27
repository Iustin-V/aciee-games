import { PageContainer } from "../Style";
import { Carousel } from "./Carousel";
import { ToggleButton } from "./ToggleButton";
import React from "react";
import { GameGallery } from "./GameGallery";
import { Navbar } from "./Navbar";
import imagineScris from './Images/tastare-rapida.webp'
import imaginePlaneta from './Images/curatare-planeta.webp'
import imagineMemorie from './Images/joc-memorie.webp'
import imagineMatematica from './Images/joc-mate.webp'
export const Home = () => {
  const [isGallery, setIsGallery] = React.useState(false);
  const gameArray = [
    {
      title: "Joc Matematica",
      description:
        "Testeaza-ti aptitudinile de matematician in acest joc distractiv care te determina sa te misti cat poti de repede.",
      image: imagineMatematica,
      redirect: "/joc-matematica",
    },
    {
      title: "Joc Memorie",
      description:
        "Acest joc iti va stimula abilitatea de a retine informatii pe termen scurt. Vezi cat de rapid esti sub presiune",
      image: imagineMemorie,
      redirect: "/joc-memorie",
    },
    {
      title: "Joc Scris",
      description:
        "Afla cate cuvinte poti scrie intr-un timp foarte scurt. Joaca si compara rezultatele cu prietenii tai. ",
      image: imagineScris,
      redirect: "/joc-scris",
    },
    {
      title: "Joc Curatenie",
      description: "Contribuie la curatarea planetei in acest joc distractiv.",
      image: imaginePlaneta,
      redirect: "/joc-curatenie",
    },
  ];

  return (
    <>
      <div className="bg" />
      <div className="bg bg2" />
      <div className="bg bg3" />
       <Navbar />
        <PageContainer isGallery={isGallery}>
          <ToggleButton
            text="Gallery mode"
            toggled={isGallery}
            setToggled={setIsGallery}
          />
          {isGallery ? (
            <GameGallery gameArray={gameArray} />
          ) : (
            <Carousel gameArray={gameArray} />
          )}
        </PageContainer>
    </>
  );
};
