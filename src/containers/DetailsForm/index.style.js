import styled from "styled-components";
import { constants, helpers } from "../../utils";
import Input from "../../components/Input";

export const DetailsFormWrapper = styled.div`
  background-color: ${constants.whiteColour};
  height: 100%;
  width: 100%;
`;

export const TitleRow = styled.div`
  text-align: left;
`;

export const DetailsRow = styled.div`
  display: flex;
  flex-direction: row;

  &:first-of-type {
    margin-top: 10px;
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
