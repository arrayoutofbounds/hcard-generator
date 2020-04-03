import React from "react";
import { WrapperElement } from "./index.style";
import DetailsForm from "../DetailsForm";
import HCard from "../HCard";
import { helpers } from "../../utils";

export default function Wrapper(props) {
  const [fields, handleFieldChange] = helpers.useFormFields({
    givenName: "",
    surname: "",
    email: "",
    phone: "",
    houseName: "",
    street: "",
    suburb: "",
    state: "",
    postcode: "",
    country: "",
    avatar: "",
  });

  return (
    <WrapperElement>
      <DetailsForm handleFieldChange={handleFieldChange} />
      <HCard
        givenName={fields.givenName}
        surname={fields.surname}
        email={fields.email}
        phone={fields.phone}
        houseName={fields.houseName}
        street={fields.street}
        suburb={fields.suburb}
        state={fields.state}
        postcode={fields.postcode}
        country={fields.country}
        avatar={fields.avatar}
      />
    </WrapperElement>
  );
}
