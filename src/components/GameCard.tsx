import styled from "styled-components";
import {useNavigate} from "react-router-dom";
interface GameCardProps {
  title: string;
  isSinglePlayer: boolean;
  image: string;
  index: number;
  redirect: string;
  description:string;
}
const StyledGameCard = styled.div<{ image: string; index: number }>`
  height: 300px;
  width: 300px;
  border-radius: 25px;
  background-image: url(${(props) => props.image});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: 300px 300px;
  opacity: 0;
  @keyframes slide-in-anim-right-text {
    20% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  transform: translateX(150%);
  animation: slide-in-anim-right-text 0.8s ease-out forwards;

  :hover {
    -webkit-box-shadow: 4px 1px 15px -1px rgba(0, 0, 0, 0.4);
    box-shadow: 4px 1px 15px -1px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
  :nth-child(n) {
    ${(props) => `animation-delay:${(props.index - 1) / 5}s`}
  }

  transition: box-shadow 1s ease-in-out;
  :hover > div > p {
    font-size: 25px;
    text-decoration: underline;
  }
  :hover > p {
    transform:translateY(0);
  }
`;
const StyledContent = styled.div`
  
  background-color: white;
  padding: 2px;
  bottom: 0;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin: 3px;
    display: flex;
    font-family: 'Russo',sans-serif;
    font-size: 20px;
    justify-content: center;
    font-weight: 400;
    transition: all ease-in-out .3s;
  }
`;

export const StyledGameDescription=styled.p`
  width: 100%;
  height: fit-content;
  position: absolute;
  color:white;
  top: 0;
  left: 0;
  margin: 0;
  padding: 20px;
  font-size: 15px;
  font-family: 'Russo', sans-serif;
  text-align: center;
  background: rgba(44, 62, 80, 0.91);
  transform:translateY(-100%);
  transition: transform ease-out 0.3s;
  
`
export const GameCard = (props: GameCardProps) => {
  const navigate = useNavigate();
  return (
    <StyledGameCard
      image={props.image}
      index={props.index}
      onClick={() => navigate(props.redirect)}
    >
      <StyledGameDescription>{props.description}</StyledGameDescription>
      <StyledContent>
        <p>{props.title}</p>
      </StyledContent>
    </StyledGameCard>
  );
};
