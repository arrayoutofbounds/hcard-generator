import styled from "styled-components";
import { constants } from "../../../../utils";
import { RowWrapper, RowBody } from "../Row/index.style";

export const HeaderWrapper = styled.div`
  background: ${constants.darkBlueColour};
  width: 100%;
  padding: 40px 25px 25px;
  position: relative;
  box-sizing: border-box;

  > ${RowWrapper} {
    border-bottom: 0px;
    margin-top: 0;
    min-height: 30px;
  }

  span {
    color: white;
    font-size: 24px;
    padding-left: 0;
  }
`;
