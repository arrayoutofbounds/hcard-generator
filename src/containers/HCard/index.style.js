import styled from "styled-components";
import { helpers } from "../../utils";

export const HCardWrapper = styled.div`
  width: 100%;
  margin-left: 45px;
  margin-right: 25px;
  background: white;

  ${helpers.respondTo.sm`
    margin: 0 auto;
  `}
`;
