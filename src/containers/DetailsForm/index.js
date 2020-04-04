import React, { useRef } from "react";
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
  const inputFile = useRef(null);

  function onSubmit(event) {
    event.preventDefault();
    inputFile.current.click();
  }

  function onAvatarUpload(event) {
    event.preventDefault();
  }

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
              onChange={props.handleFieldChange}
            />
            <Input
              type="text"
              label="SURNAME"
              name="surname"
              onChange={props.handleFieldChange}
            />
          </DetailsRow>

          <DetailsRow>
            <Input
              type="email"
              label="EMAIL"
              name="email"
              onChange={props.handleFieldChange}
            />
            <Input
              type="number"
              label="PHONE"
              name="phone"
              onChange={props.handleFieldChange}
            />
          </DetailsRow>
        </Section>

        <Section name="ADDRESS">
          <DetailsRow>
            <Input
              type="text"
              label="HOUSE NAME OR #"
              name="houseName"
              onChange={props.handleFieldChange}
            />
            <Input
              type="text"
              label="STREET"
              name="street"
              onChange={props.handleFieldChange}
            />
          </DetailsRow>

          <DetailsRow>
            <Input
              type="text"
              label="SUBURB"
              name="suburb"
              onChange={props.handleFieldChange}
            />
            <Input
              type="text"
              label="STATE"
              name="state"
              onChange={props.handleFieldChange}
            />
          </DetailsRow>

          <DetailsRow>
            <Input
              type="text"
              label="POSTCODE"
              name="postcode"
              onChange={props.handleFieldChange}
            />
            <Input
              type="text"
              label="COUNTRY"
              name="country"
              onChange={props.handleFieldChange}
            />
          </DetailsRow>
        </Section>

        <Action>
          <Button
            styleClass="secondary"
            type="button"
            onClick={onAvatarUpload}
            text="Upload Avatar"
          />
          <Button styleClass="primary" type="submit" text="Create hCard" />
        </Action>

        <input
          style={{ display: "none" }}
          ref={inputFile}
          id="avatar"
          name="avatar"
          type="file"
          accept="image/x-png,image/gif,image/jpeg"
          onChange={onAvatarUpload}
        />
      </Form>
    </DetailsFormWrapper>
  );
}
