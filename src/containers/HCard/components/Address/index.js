import React from "react";
import PropTypes from "prop-types";
import {
  Street,
  Suburb,
  State,
  Country,
  PostCode,
  AddressWrapper,
  CodeAndCountryWrapper,
  StreetLocalityRegionWrapper,
} from "./index.style";

import Row from "../Row";

export default function Address(props) {
  const { country, street, suburb, state, houseName, postcode } = props;
  return (
    <AddressWrapper className="adr">
      <StreetLocalityRegionWrapper>
        <Row label="Address">
          <Street className="street-address">
            {houseName} {street}
          </Street>
        </Row>

        <Row>
          <Suburb className="locality">{suburb}</Suburb>
          {suburb && state && ", "}
          <State className="region">{state}</State>
        </Row>
      </StreetLocalityRegionWrapper>

      <CodeAndCountryWrapper>
        <Row label="Postcode">
          <PostCode className="postal-code">{postcode}</PostCode>
        </Row>

        <Row label="Country">
          <Country className="country-name">{country}</Country>
        </Row>
      </CodeAndCountryWrapper>
    </AddressWrapper>
  );
}

Address.propTypes = {
  country: PropTypes.string,
  street: PropTypes.string,
  suburb: PropTypes.string,
  state: PropTypes.string,
  houseName: PropTypes.string,
  postcode: PropTypes.string,
};
