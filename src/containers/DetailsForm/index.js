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

import PropTypes from "prop-types";

import fileDownloader from "js-file-download";

export default function DetailsForm(props) {
  const inputFile = useRef();

  function onAvatarSubmit(event) {
    event.preventDefault();

    const file = event.target.files[0];
    const imageSource = window.URL.createObjectURL(file);

    props.setAvatar(imageSource);
  }

  function hCardConverter(element) {
    const hCard = new XMLSerializer().serializeToString(element);
    window.open("data:application/octet-stream;base64," + btoa(hCard));
  }

  function onSubmit(event) {
    event.preventDefault();

    hCardConverter(document.getElementById("vcard"));
  }

  function onButtonClick(event) {
    event.preventDefault();
    inputFile.current.click();
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
            onClick={onButtonClick}
            text="Upload Avatar"
          />
          <Button
            onClick={onSubmit}
            styleClass="primary"
            type="submit"
            text="Create hCard"
          />
        </Action>

        <input
          style={{ display: "none" }}
          ref={inputFile}
          id="avatar"
          name="avatar"
          type="file"
          accept="image/x-png,image/gif,image/jpeg"
          onChange={onAvatarSubmit}
        />
      </Form>
    </DetailsFormWrapper>
  );
}

DetailsForm.propTypes = {
  setAvatar: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
};
