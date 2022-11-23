import styled from "styled-components";
interface GameCardProps {
  title: string;
  isSinglePlayer: boolean;
  image: string;
  index: number;
}
const StyledGameCard = styled.div<{ image: string; index: number }>`
  height: 300px;
  width: 300px;
  border-radius: 25px;
  background-image: url(${(props) => props.image});
  box-shadow: 2px 2px black;
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
  }
  :nth-child(n) {
    ${(props) => `animation-delay:${(props.index - 1) / 5 }s`}
  }

  transition: box-shadow 1s ease-in-out;
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
  }
`;
export const GameCard = (props: GameCardProps) => {
  return (
    <StyledGameCard image={props.image} index={props.index}>
      <StyledContent>
        <p>Title: {props.title}</p>
        <p>{props.isSinglePlayer ? "SinglePlayer" : "MultiPlayer"}</p>
      </StyledContent>
    </StyledGameCard>
  );
};
