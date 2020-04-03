import React from "react";
import {
  DetailsFormWrapper,
  TitleRow,
  PersonalDetailsRow,
} from "./index.style";
import Form from "../../components/Form";
import Title from "../../components/Title";
import Input from "../../components/Input";

export default function DetailsForm(props) {
  function onSubmit(event) {
    event.preventDefault();
  }

  function fieldChange({ target }) {
    const { id, value } = target;
    console.log(id, value);
  }

  return (
    <DetailsFormWrapper>
      <Form onSubmit={onSubmit}>
        <TitleRow>
          <Title fontSize="34px" fontWeight="bold">
            hCard Builder
          </Title>
        </TitleRow>

        <PersonalDetailsRow>
          <Input
            type="text"
            label="GIVEN NAME"
            name="givenName"
            onChange={fieldChange}
          />
        </PersonalDetailsRow>
      </Form>
    </DetailsFormWrapper>
  );
}
