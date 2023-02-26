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
  background: rgba(0, 0, 0, 0.86);
  
  h1, p {
    max-width: 80%;
    
  }
  h1 {
    margin:40px 0;
    font-family: "Russo", sans-serif;
    font-size:50px;
  }

  p {
    margin:0 0 20px 0;
    font-family: "Russo", sans-serif;
    font-size:20px;
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
    <SContainer onClick={() => navigate(props.redirect)}>
      <STextWrapper>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </STextWrapper>
      <img src={props.image} draggable="false" />
    </SContainer>
  );
};

export default Slide;
