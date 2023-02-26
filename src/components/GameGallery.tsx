import styled from "styled-components";
import { GameCard } from "./GameCard";
import SnakePic from "././Images/snake.jpg";
const StyledGallery = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 35px;
  padding: 100px 60px 40px;
`;

const Games = (
  gameArray: {
    title: string;
    description: string;
    image: string;
    redirect: string;
  }[]
) =>
  gameArray.map((game, index) => {
    return (
      <GameCard
        title={game.title}
        isSinglePlayer={false}
        image={game.image}
        redirect={game.redirect}
        index={index}
      />
    );
  });
export const GameGallery = (props: {
  gameArray: {
    title: string;
    description: string;
    image: string;
    redirect: string;
  }[];
}) => {
  return <StyledGallery>{Games(props.gameArray)} </StyledGallery>;
};
