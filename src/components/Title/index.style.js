import styled from "styled-components";
import { constants } from "../../utils";

export const TitleWrapper = styled.h1`
  margin-top: auto;
  color: ${(props) => props.inputColor || constants.darkBlueColour};
  font-size: ${(props) => props.fontSize || "28px"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  display: block;
`;
