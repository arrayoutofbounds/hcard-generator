import React from "react";
import { WrapperElement } from "./index.style";
import DetailsForm from "../DetailsForm";
import HCard from "../HCard";
import { useFormFields } from "../../utils";

export default function Wrapper(props) {
  const [fields, handleFieldChange] = useFormFields({
    givenName: "",
    surname: "",
    email: "",
    email: "",
    phone: "",
    houseName: "",
    street: "",
    suburrb: "",
    state: "",
    postcode: "",
    country: "",
    avatar: "",
  });

  return (
    <WrapperElement>
      <DetailsForm />
      <HCard />
    </WrapperElement>
  );
}
