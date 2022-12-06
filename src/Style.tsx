import styled from "styled-components";

export const StyledWrapper = styled.div`
  overflow-x: hidden;
  font-family: "Lucida Grande", Tahoma, Verdana, Arial, sans-serif;
  background:transparent;
`;
export const PageContainer = styled.div`
  height: fit-content;
  background-color: #ffffff;
  min-height:calc(100vh - 161px);
  
`;

export const MainTitle = styled.div`
  font-size: 56px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  background-color: #2070bf;
  font-weight: 700;
  font-family: 'Codec',serif;

`;
export const MainPageText = styled.div`
  color: whitesmoke;
  text-shadow: 1px 1px black;
  font-size: 23px;
  border-radius: 25px;
  border: 5px solid black;
  width: fit-content;
  padding: 15px;
  background-color: whitesmoke; ;
`;
