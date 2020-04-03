import React from "react";
import { FormWrapper } from "./index.style";
import PropTypes from "prop-types";

export default function Form(props) {
  const { onSubmit, children } = props;
  return <FormWrapper onSubmit={onSubmit}>{children}</FormWrapper>;
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};
