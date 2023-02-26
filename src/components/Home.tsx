import { PageContainer } from "../Style";
import { Carousel } from "./Carousel";
import { ToggleButton } from "./ToggleButton";
import React from "react";
import { GameGallery } from "./GameGallery";
import { Navbar } from "./Navbar";

export const Home = () => {
  const [isGallery, setIsGallery] = React.useState(false);
  const gameArray = [
    {
      title: "Matematica Rapida",
      description:
        "Testeaza-ti aptitudinile de matematician in acest joc distractiv care te determina sa te misti cat poti de repede.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-math-chalkboard-background_23-2148154590.jpg?w=2000",
      redirect: "/math",
    },
    {
      title: "Joc Memorie",
      description:
        "Acest joc iti va stimula abilitatea de a retine informatii pe termen scurt. Vezi cat de rapid esti sub presiune",
      image: "https://via.placeholder.com/400/3D1D73/ffffff",
      redirect: "/memory",
    },
    {
      title: "Joc Scris",
      description:
        "Afla cate cuvinte poti scrie intr-un timp foarte scurt. Joaca si compara rezultatele cu prietenii tai. ",
      image: "https://via.placeholder.com/400/3D1D73/ffffff",
      redirect: "/letters",
    },
    {
      title: "Joc Curatenie",
      description: "Contribuie la curatarea planetei in acest joc distractiv.",
      image: "https://via.placeholder.com/400/3D1D73/ffffff",
      redirect: "/clean",
    },
  ];

  return (
    <>
      <div className="bg" />
      <div className="bg bg2" />
      <div className="bg bg3" />
      <Navbar />
      <PageContainer>
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
