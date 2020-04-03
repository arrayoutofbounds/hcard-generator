import styled from "styled-components";
import { constants } from "../../utils";

export const ButtonElement = styled.button`
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
  width: 100%;
  background-color: ${(props) =>
    props.styleClass === "primary"
      ? constants.primaryButtonColor
      : constants.secondayButtonColour};
`;
