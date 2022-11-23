import * as React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  align-items: center;
  display: flex;
  position:relative;
  justify-content:center;
    width:100%;
  max-height:400px;
`;

const STextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 10px;
  position:absolute;
  top:0;
  color:white;
`;

const SlideOne = () => (
    <SContainer>
        <STextWrapper>
            <h1>
                Header 1
            </h1>
            <p>
                A short paragraph with some descriptive text.
            </p>
        </STextWrapper>
        <img src="https://via.placeholder.com/400/3D1D73/ffffff" />
    </SContainer>
);

export default SlideOne;