import React from "react";
import PropTypes from "prop-types";
import { ButtonElement } from "./index.style";

export default function Button(props) {
  const { text, styleClass, onClick, type } = props;
  return (
    <ButtonElement styleClass={styleClass} onClick={onClick} type={type}>
      {text}
    </ButtonElement>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  styleClass: PropTypes.string,
  onClick: PropTypes.func,
};
