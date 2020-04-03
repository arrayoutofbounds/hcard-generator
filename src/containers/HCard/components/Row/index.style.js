import styled from "styled-components";
import { constants } from "../../../../utils";

export const RowWrapper = styled.div`
  border-bottom: 1px solid ${constants.grayColour};
  margin-top: 15px;
  padding-bottom: 5px;
  display: flex;
  width: 100%;
`;

export const RowLabel = styled.span`
  text-align: left;
  color: ${constants.darkBlueColour};
  display: inline-block;
  font-size: 12px;
  width: 65px;
  text-transform: uppercase;
  display: ${(props) => props.hide && "none"};
`;

export const RowBody = styled.div`
  padding-left: 5px;
`;
