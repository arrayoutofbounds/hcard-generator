import styled from "styled-components";
import { constants, helpers } from "../../utils";

export const DetailsFormWrapper = styled.div`
  background-color: ${constants.whiteColour};
  height: 100%;
  width: 100%;
`;

export const TitleRow = styled.div`
  text-align: left;
`;

export const PersonalDetailsRow = styled.div`
  display: flex;
  flex-direction: row;

  ${helpers.respondTo.sm`
    flex-direction: column;
  `}
`;
