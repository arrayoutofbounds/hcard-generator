import styled from "styled-components";
import { helpers, constants } from "../../utils";

export const HCardWrapper = styled.div`
  width: 100%;
  margin-left: 45px;
  margin-right: 25px;
  background: white;

  ${helpers.respondTo.sm`
    margin: 0 auto;
  `}
`;

export const Preview = styled.div`
  background-color: ${constants.lightGrayColour};
  text-align: right;
  width: 100%;
  padding-bottom: 10px;
  font-weight: bold;
  color: ${constants.grayColour};
`;
