import styled from "styled-components";
import { lightGrayColour } from "../../utils/constants";
import { helpers } from "../../utils";

export const WrapperElement = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${lightGrayColour};
  flex: 1;

  ${helpers.respondTo.sm`
		flex-direction: column;
	`}
`;
