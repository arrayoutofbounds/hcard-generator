import styled from "styled-components";
import { constants, helpers } from "../../utils/";

export const WrapperElement = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${constants.lightGrayColour};
  flex: 1;

  ${helpers.respondTo.sm`
		flex-direction: column;
	`}
`;
