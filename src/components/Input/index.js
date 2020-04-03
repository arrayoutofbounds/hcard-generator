import React from "react";
import PropTypes from "prop-types";
import { InputWrapper, InputElement } from "./index.style";
import Label from "../Label";

export default function Input(props) {
  const { label, name, type, onChange } = props;
  return (
    <InputWrapper>
      <Label forField={name} value={label} />
      <InputElement type={type} id={name} onChange={onChange} name={name} />
    </InputWrapper>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
