import styled from "styled-components";
import { constants } from "../../utils";

export const SectionWrapper = styled.div`
  margin-top: 30px;
`;

export const SectionTitle = styled.span`
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid ${constants.darkGrayColour};
  color: ${constants.darkGrayColour};
  display: block;
  font-size: 10px;
  text-transform: uppercase;
`;
