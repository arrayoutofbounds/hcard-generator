import React from "react";
import PropTypes from "prop-types";
import { LabelWrapper } from "./index.style";

export default function Label(props) {
  const { forField, value } = props;
  return <LabelWrapper for={forField}> {value} </LabelWrapper>;
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  for: PropTypes.string.isRequired,
};
