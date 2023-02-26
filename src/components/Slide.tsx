import * as React from "react";
import styled from "styled-components";

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
  margin: 5px 10px;
  position: absolute;
  top: 0;
  color: white;
`;
interface SlideProps {
  title: string;
  description: string;
  image: string;
  redirect: string;
}
const Slide = (props: SlideProps) => (
  <SContainer onClick={() => window.location.replace(props.redirect)}>
    <STextWrapper>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </STextWrapper>
    <img src={props.image} draggable="false" />
    {/*<img src="https://via.placeholder.com/400/3D1D73/ffffff" />*/}
  </SContainer>
);

export default Slide;
