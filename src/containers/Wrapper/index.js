import React from "react";
import { WrapperElement } from "./index.style";
import DetailsForm from "../DetailsForm";
import HCard from "../HCard";

export default function Wrapper(props) {
  return (
    <WrapperElement>
      <DetailsForm />
      <HCard />
    </WrapperElement>
  );
}
