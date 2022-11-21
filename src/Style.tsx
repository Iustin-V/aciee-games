import styled from "styled-components";

export const StyledWrapper = styled.div`
  overflow-x: hidden;
  font-family: "Lucida Grande", Tahoma, Verdana, Arial, sans-serif;
  background-color: #fafafa;
`;
export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin: auto;
  max-width: 800px;
  flex-direction: column;
`;

export const MainTitle = styled.p`
  font-size: 56px;
  color: #103354;
  font-weight: 700;
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
