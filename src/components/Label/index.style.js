import styled from "styled-components";
import { constants } from "../../utils";

export const LabelWrapper = styled.label`
  color: ${constants.darkBlueColour};
  font-size: ${(props) => props.fontSize || "12px"};
  margin-bottom: 5px;
  text-transform: uppercase;
`;
