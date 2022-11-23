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
  padding: 60px;
`;
const gameArr = [
  { title: "Snake", isSinglePlayer: true, image: SnakePic },
  { title: "Snake", isSinglePlayer: true, image: SnakePic },
  { title: "Snake", isSinglePlayer: true, image: SnakePic },
  { title: "Snake", isSinglePlayer: true, image: SnakePic },
  { title: "Snake", isSinglePlayer: true, image: SnakePic },
  { title: "Snake", isSinglePlayer: true, image: SnakePic },
  { title: "Snake", isSinglePlayer: true, image: SnakePic },
  { title: "Snake", isSinglePlayer: true, image: SnakePic },
  { title: "Snake", isSinglePlayer: true, image: SnakePic },
  { title: "Snake", isSinglePlayer: true, image: SnakePic },
  { title: "Snake", isSinglePlayer: true, image: SnakePic },
  { title: "Snake", isSinglePlayer: true, image: SnakePic },
];
const games = gameArr.map((game,index) => {
  return (
    <GameCard
      title={game.title}
      isSinglePlayer={game.isSinglePlayer}
      image={game.image}
      index={index}
    />
  );
});
export const GameGallery = () => {
  return <StyledGallery>{games} </StyledGallery>;
};
