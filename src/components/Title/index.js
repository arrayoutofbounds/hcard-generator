import React from "react";
import { TitleWrapper } from "./index.style";
import PropTypes from "prop-types";

export default function Title(props) {
  const { children, fontSize, fontWeight } = props;

  return (
    <TitleWrapper fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </TitleWrapper>
  );
}

Title.propTypes = {
  children: PropTypes.any.isRequired,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
};
