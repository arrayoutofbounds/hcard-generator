import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
  > Label {
    text-align: left;
  }
`;
export const InputElement = styled.input`
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 14px;
  padding: 10px;
  width: 100%;
`;
