import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SContainer = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  max-height: 600px;
  img {
    height: 600px;
    width: 600px;
  }

`;

const StyledStartGameButton=styled.button`
  position: absolute;
  opacity:0;
  transform: translateX(-200%);
  left: 50%;
  bottom: 100px;
  padding: 10px 15px;
  border: none;
  font-family: "Russo", sans-serif;
  font-size: 30px;
  background: linear-gradient(-30deg, #0b173d 50%, #080f2b 50%);
  display: inline-block;
  overflow: hidden;
  color: #f7d4d4;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  transition:all ease-in .5s;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #858cad;
    opacity: 0;
    -webkit-transition: .2s opacity ease-in-out;
    transition: .2s opacity ease-in-out;
  }
  :hover{
    cursor:pointer;
  }

  :hover::before {
    opacity: 0.2;
  }

  span {
    position: absolute;
  }

  span:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: -webkit-gradient(linear, right top, left top, from(rgba(43, 8, 8, 0)), to(#2659d9));
    background: linear-gradient(to left, rgba(43, 8, 8, 0), #2659d9);
    -webkit-animation: 2s animateTop linear infinite;
    animation: 2s animateTop linear infinite;
  }

  span:nth-child(2) {
    top: 0;
    right: 0;
    height: 100%;
    width: 4px;
    background: -webkit-gradient(linear, left bottom, left top, from(rgba(43, 8, 8, 0)), to(#2659d9));
    background: linear-gradient(to top, rgba(43, 8, 8, 0), #2659d9);
    -webkit-animation: 2s animateRight linear -1s infinite;
    animation: 2s animateRight linear -1s infinite;
  }

  span:nth-child(3) {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: -webkit-gradient(linear, left top, right top, from(rgba(43, 8, 8, 0)), to(#2659d9));
    background: linear-gradient(to right, rgba(43, 8, 8, 0), #2659d9);
    -webkit-animation: 2s animateBottom linear infinite;
    animation: 2s animateBottom linear infinite;
  }

  span:nth-child(4) {
    top: 0;
    left: 0;
    height: 100%;
    width: 4px;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(43, 8, 8, 0)), to(#2659d9));
    background: linear-gradient(to bottom, rgba(43, 8, 8, 0), #2659d9);
    -webkit-animation: 2s animateLeft linear -1s infinite;
    animation: 2s animateLeft linear -1s infinite;
  }
`


const STextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  position: absolute;
  top: 0;
  color: white;
  max-width: 600px;
  width: 100%;
  background: rgba(8, 15, 43, 0.82);

  h1, p {
    max-width: 80%;

  }

  h1 {
    margin: 40px 0;
    font-family: "Russo", sans-serif;
    font-size: 50px;
  }

  p {
    margin: 0 0 20px 0;
    font-family: "Russo", sans-serif;
    font-size: 20px;
  }
`;
interface SlideProps {
  title: string;
  description: string;
  image: string;
  redirect: string;
}
const Slide = (props: SlideProps) => {
  const navigate = useNavigate();

  return (
    <SContainer>
      <STextWrapper>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </STextWrapper>
        <StyledStartGameButton onClick={() => navigate(props.redirect)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            START JOC</StyledStartGameButton>
      <img src={props.image} draggable="false" alt={props.title} />
    </SContainer>
  );
};

export default Slide;
