import React from "react";
import PropTypes from "prop-types";
import { LabelWrapper } from "./index.style";

export default function Label(props) {
  const { forField, value } = props;
  return <LabelWrapper htmlFor={forField}>{value}</LabelWrapper>;
}

Label.propTypes = {
  value: PropTypes.string.isRequired,
  forField: PropTypes.string.isRequired,
};
