import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledBackButton = styled.button`
  z-index: 10;
  position: absolute;
  top: 50px;
  left: 50px;
  padding: 20px 10px;
  background-color: #2070bf;
  border: none;
  border-radius: 15px;
  color: white;
  font-family: "Russo", serif;
  text-align: center;
  font-size: 20px;
  animation-duration: 1s;
  animation-name: backslidein;



  @keyframes backslidein {
    0% {
      transform: translateX(-200px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  :hover {
    opacity: 0.7;
  }
`;
export const BackButton = () => {
  const navigate = useNavigate();
  const text = "< Inapoi";
  return (
    <StyledBackButton onClick={() => navigate("/")}>{text}</StyledBackButton>
  );
};
