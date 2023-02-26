import styled from "styled-components";
import React from "react";

const StyledSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  :before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    border-radius: 34px;
  }
  input:checked + span {
    background-color: #2196f3;
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const StyledText = styled.p<{ color: string }>`
  color: ${(props) => props.color};
  font-family: "Russo", serif;
  font-size: 50px;
  margin: 0;
  transition: color 0.5s;
  letter-spacing: 2px;
  text-shadow: 2px 2px black;
`;
const ToggleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  flex-direction: row;
  padding: 15px;
  gap: 15px;
  position: absolute;
  right: 0;
  z-index: 2;
`;
interface ToggleButtonProps {
  text: string;
  toggled: boolean;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ToggleButton = (props: ToggleButtonProps) => {
  // const [toggled, setToggled] = React.useState(false);

  const handleCheckBox = () => {
    props.setToggled(!props.toggled);
  };

  return (
    <ToggleButtonContainer>
      <StyledText color={props.toggled ? "#2196f3" : "white"}>
        {props.text}
      </StyledText>
      <StyledSwitch>
        <input type="checkbox" onChange={handleCheckBox} />
        <StyledSlider />
      </StyledSwitch>
    </ToggleButtonContainer>
  );
};
