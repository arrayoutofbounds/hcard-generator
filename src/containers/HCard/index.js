import React from "react";
import PropTypes from "prop-types";

import { HCardWrapper } from "./index.style";
import Header from "./components/Header";
import Row from "./components/Row";
import Avatar from "./components/Avatar";
import Body from "./components/Body";
import Address from "./components/Address";

import EmailLink from "../../components/EmailLink";

export default function HCard(props) {
  const {
    givenName,
    surname,
    suburb,
    state,
    postcode,
    country,
    avatar,
    email,
    phone,
    houseName,
    street,
  } = props;

  return (
    <HCardWrapper className="vcard">
      <Header>
        <Row>
          <span className="fn">
            {" "}
            {givenName} {surname}{" "}
          </span>
        </Row>
        <Avatar source={avatar} />
      </Header>

      <Body>
        <Row label="Email">
          <EmailLink email={email} />
        </Row>

        <Row label="Phone">
          <span className="tel">{phone}</span>
        </Row>

        <Address
          country={country}
          street={street}
          suburb={suburb}
          state={state}
          houseName={houseName}
          postcode={postcode}
        />
      </Body>
    </HCardWrapper>
  );
}

HCard.propTypes = {
  suburb: PropTypes.string,
  state: PropTypes.string,
  postcode: PropTypes.string,
  country: PropTypes.string,
  avatar: PropTypes.string,
  givenName: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number,
  surname: PropTypes.string,
  houseName: PropTypes.string,
  street: PropTypes.string,
};
