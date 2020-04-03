import React from "react";
import {
  DetailsFormWrapper,
  TitleRow,
  DetailsRow,
  Action,
} from "./index.style";
import Form from "../../components/Form";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Section from "../../components/Section";
import Button from "../../components/Button";

export default function DetailsForm(props) {
  function onSubmit(event) {
    event.preventDefault();
  }

  function fieldChange({ target }) {
    const { id, value } = target;
    console.log(id, value);
  }

  function triggerFileUpload() {}

  return (
    <DetailsFormWrapper>
      <Form onSubmit={onSubmit}>
        <TitleRow>
          <Title fontSize="34px" fontWeight="bold">
            hCard Builder
          </Title>
        </TitleRow>

        <Section name="PERSONAL DETAILS">
          <DetailsRow>
            <Input
              type="text"
              label="GIVEN NAME"
              name="givenName"
              onChange={fieldChange}
            />
            <Input
              type="text"
              label="SURNAME"
              name="surname"
              onChange={fieldChange}
            />
          </DetailsRow>

          <DetailsRow>
            <Input
              type="email"
              label="EMAIL"
              name="email"
              onChange={fieldChange}
            />
            <Input
              type="number"
              label="PHONE"
              name="phone"
              onChange={fieldChange}
            />
          </DetailsRow>
        </Section>

        <Section name="ADDRESS">
          <DetailsRow>
            <Input
              type="text"
              label="HOUSE NAME OR #"
              name="houseName"
              onChange={fieldChange}
            />
            <Input
              type="text"
              label="STREET"
              name="street"
              onChange={fieldChange}
            />
          </DetailsRow>

          <DetailsRow>
            <Input
              type="text"
              label="SUBURB"
              name="suburb"
              onChange={fieldChange}
            />
            <Input
              type="text"
              label="STATE"
              name="state"
              onChange={fieldChange}
            />
          </DetailsRow>

          <DetailsRow>
            <Input
              type="text"
              label="POSTCODE"
              name="postcode"
              onChange={fieldChange}
            />
            <Input
              type="text"
              label="COUNTRY"
              name="country"
              onChange={fieldChange}
            />
          </DetailsRow>
        </Section>

        <Action>
          <Button
            styleClass="secondary"
            type="button"
            onClick={triggerFileUpload}
            text="Upload Avatar"
          />
          <Button styleClass="primary" type="submit" text="Create hCard" />
        </Action>
      </Form>
    </DetailsFormWrapper>
  );
}
