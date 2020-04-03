import styled from "styled-components";
import { constants, helpers } from "../../utils";

export const DetailsFormWrapper = styled.div`
  background-color: ${constants.whiteColour};
  height: 100%;
  width: 100%;

  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

export const TitleRow = styled.div`
  text-align: left;
`;

export const DetailsRow = styled.div`
  display: flex;
  flex-direction: row;

  &:first-of-type {
    margin-top: 15px;
  }

  > * {
    &:not(:first-child) {
      margin-left: 15px;
    }
  }

  ${helpers.respondTo.sm`
    flex-direction: column;
  `}
`;

export const Action = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 35px;

  > * {
    &:not(:first-child) {
      margin-left: 15px;
    }
  }
`;
